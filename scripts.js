const header = document.querySelector("[data-sticky]");
const nav = document.querySelector(".site-nav");
const toggle = document.querySelector(".site-nav__toggle");
const closeBtn = document.querySelector(".site-nav__close");

if (toggle && nav) {
  // Open menu
  toggle.addEventListener("click", () => {
    const isActive = nav.classList.toggle("is-active");
    toggle.setAttribute("aria-expanded", String(isActive));
  });

  // Close menu when clicking links
  nav.addEventListener("click", (event) => {
    const isLink = event.target instanceof HTMLElement && event.target.tagName === "A";
    if (isLink) {
      nav.classList.remove("is-active");
      toggle.setAttribute("aria-expanded", "false");
    }
  });

  // Close menu with close button
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      nav.classList.remove("is-active");
      toggle.setAttribute("aria-expanded", "false");
    });
  }
}

const updateHeaderState = () => {
  if (!header) return;
  const shouldStick = window.scrollY > 32;
  header.classList.toggle("is-scrolled", shouldStick);
};

updateHeaderState();
window.addEventListener("scroll", updateHeaderState, { passive: true });

// Scroll reveal animations...
const observerOptions = {
  root: null,
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe sections and cards
const animatedElements = document.querySelectorAll('.section, .calendar-card, .about-content, .more-info-card');
animatedElements.forEach((el) => {
  el.classList.add('reveal');
  observer.observe(el);
});

// Animate info sections with stagger
const infoSections = document.querySelectorAll('.info-section');
const infoObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('reveal-info');
      infoObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

infoSections.forEach((section) => {
  infoObserver.observe(section);
});

// Add parallax effect to hero
const hero = document.querySelector('.hero');
if (hero) {
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const heroContent = hero.querySelector('.hero__content');
    if (heroContent && scrolled < window.innerHeight) {
      heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
      heroContent.style.opacity = `${1 - (scrolled / window.innerHeight) * 0.5}`;
    }
  }, { passive: true });
}

// Add delightful hover sound effect to buttons (visual pulse)
const buttons = document.querySelectorAll('.button--primary');
buttons.forEach(button => {
  button.addEventListener('mouseenter', () => {
    button.style.animation = 'pulse 0.4s ease';
  });
  button.addEventListener('animationend', () => {
    button.style.animation = '';
  });
});

// Calendar card flip functionality
const flipCards = document.querySelectorAll('[data-flip-card]');

// Check if device supports hover (desktop)
const isHoverDevice = window.matchMedia('(hover: hover)').matches;

if (isHoverDevice) {
  // Desktop: flip on hover
  flipCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.classList.add('is-flipped');
    });
    card.addEventListener('mouseleave', () => {
      card.classList.remove('is-flipped');
    });
  });
} else {
  // Mobile/Touch: flip on click
  flipCards.forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('is-flipped');
    });
  });
}

// FAQ Accordion functionality
const faqItems = document.querySelectorAll('[data-faq]');

faqItems.forEach((item) => {
  const question = item.querySelector('.faq-question');
  const answer = item.querySelector('.faq-answer');
  
  if (question && answer) {
    question.addEventListener('click', () => {
      const isOpen = item.classList.contains('is-open');
      
      // Close all other FAQ items for better UX
      faqItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.classList.remove('is-open');
          const otherQuestion = otherItem.querySelector('.faq-question');
          if (otherQuestion) {
            otherQuestion.setAttribute('aria-expanded', 'false');
          }
        }
      });
      
      // Toggle current item
      item.classList.toggle('is-open');
      question.setAttribute('aria-expanded', String(!isOpen));
    });
    
    // Add keyboard accessibility
    question.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        question.click();
      }
    });
  }
});

// Add smooth scroll to anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href === '#' || !href) return;
    
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      const headerHeight = header?.offsetHeight || 0;
      const targetPosition = target.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = targetPosition - headerHeight - 20;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  });
});

/**
 * Contact Sales Form Handler
 * Validates form inputs and sends data to email endpoint
 */
const contactForm = document.getElementById('contact-sales-form');

if (contactForm) {
  const formStatus = contactForm.querySelector('.form-status');
  const submitButton = contactForm.querySelector('button[type="submit"]');

  /**
   * Validates email format
   * @param {string} email - Email address to validate
   * @returns {boolean} True if valid email format
   */
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  /**
   * Displays error message for a specific input field
   * @param {HTMLElement} input - Input element
   * @param {string} message - Error message to display
   */
  const showError = (input, message) => {
    input.classList.add('error');
    const errorSpan = input.parentElement.querySelector('.error-message');
    if (errorSpan) {
      errorSpan.textContent = message;
      errorSpan.classList.add('visible');
    }
  };

  /**
   * Clears error message for a specific input field
   * @param {HTMLElement} input - Input element
   */
  const clearError = (input) => {
    input.classList.remove('error');
    const errorSpan = input.parentElement.querySelector('.error-message');
    if (errorSpan) {
      errorSpan.textContent = '';
      errorSpan.classList.remove('visible');
    }
  };

  /**
   * Shows status message (success or error)
   * @param {string} message - Message to display
   * @param {string} type - Message type ('success' or 'error')
   */
  const showStatus = (message, type) => {
    if (formStatus) {
      formStatus.textContent = message;
      formStatus.className = 'form-status visible ' + type;
    }
  };

  /**
   * Hides status message
   */
  const hideStatus = () => {
    if (formStatus) {
      formStatus.className = 'form-status';
    }
  };

  /**
   * Validates all form inputs
   * @returns {boolean} True if all inputs are valid
   */
  const validateForm = () => {
    let isValid = true;
    const nameInput = contactForm.querySelector('#contact-name');
    const phoneInput = contactForm.querySelector('#contact-phone');
    const emailInput = contactForm.querySelector('#contact-email');
    const partySizeInput = contactForm.querySelector('#contact-party-size');
    const celebrationTypeInput = contactForm.querySelector('#contact-celebration-type');
    const dateTimeInput = contactForm.querySelector('#contact-date-time');
    const foodBeverageInput = contactForm.querySelector('#contact-food-beverage');

    // Clear all errors
    clearError(nameInput);
    clearError(phoneInput);
    clearError(emailInput);
    clearError(partySizeInput);
    clearError(celebrationTypeInput);
    clearError(dateTimeInput);
    clearError(foodBeverageInput);

    // Validate Contact Name
    if (!nameInput.value.trim()) {
      showError(nameInput, 'Please enter your contact name');
      isValid = false;
    }

    // Validate Phone
    if (!phoneInput.value.trim()) {
      showError(phoneInput, 'Please enter your phone number');
      isValid = false;
    }

    // Validate Email
    if (!emailInput.value.trim()) {
      showError(emailInput, 'Please enter your email address');
      isValid = false;
    } else if (!isValidEmail(emailInput.value.trim())) {
      showError(emailInput, 'Please enter a valid email address');
      isValid = false;
    }

    // Validate Party Size
    if (!partySizeInput.value.trim()) {
      showError(partySizeInput, 'Please enter your party size');
      isValid = false;
    } else if (parseInt(partySizeInput.value) < 50) {
      showError(partySizeInput, 'Minimum party size is 50 guests');
      isValid = false;
    }

    // Validate Celebration Type
    if (!celebrationTypeInput.value.trim()) {
      showError(celebrationTypeInput, 'Please enter the celebration type');
      isValid = false;
    }

    // Validate Date & Time
    if (!dateTimeInput.value.trim()) {
      showError(dateTimeInput, 'Please enter your preferred date and time');
      isValid = false;
    }

    // Validate Food/Beverage Service
    if (!foodBeverageInput.value) {
      showError(foodBeverageInput, 'Please select an option');
      isValid = false;
    }

    return isValid;
  };

  // Clear errors on input
  contactForm.querySelectorAll('input, textarea, select').forEach(input => {
    input.addEventListener('input', () => {
      if (input.classList.contains('error')) {
        clearError(input);
      }
    });
    
    // For select elements, also listen to change event
    if (input.tagName === 'SELECT') {
      input.addEventListener('change', () => {
        if (input.classList.contains('error')) {
          clearError(input);
        }
      });
    }
  });

  /**
   * Handles form submission
   */
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    hideStatus();

    if (!validateForm()) {
      return;
    }

    // Disable submit button and show loading state
    submitButton.disabled = true;

    // Collect form data
    const formData = new FormData(contactForm);
    const data = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      email: formData.get('email'),
      company: formData.get('company') || 'Not provided',
      partySize: formData.get('partySize'),
      celebrationType: formData.get('celebrationType'),
      dateTime: formData.get('dateTime'),
      foodBeverage: formData.get('foodBeverage')
    };

    // Build email HTML content
    const emailHtml = `
      <div style="font-family: 'Outfit', -apple-system, sans-serif; color: #0b1b33; max-width: 600px;">
        <h2 style="color: #2d5954; border-bottom: 3px solid #2d5954; padding-bottom: 10px;">New Private Party Inquiry</h2>
        <p style="font-size: 1em; color: #666; margin-bottom: 20px;">CultureMap City Rink</p>
        
        <table style="width: 100%; border-collapse: collapse;">
          <tr style="background-color: #f5fbff;">
            <td style="padding: 12px; border: 1px solid #e0e0e0; font-weight: 600; width: 40%;">Contact Name</td>
            <td style="padding: 12px; border: 1px solid #e0e0e0;">${data.name}</td>
          </tr>
          <tr>
            <td style="padding: 12px; border: 1px solid #e0e0e0; font-weight: 600;">Phone</td>
            <td style="padding: 12px; border: 1px solid #e0e0e0;">${data.phone}</td>
          </tr>
          <tr style="background-color: #f5fbff;">
            <td style="padding: 12px; border: 1px solid #e0e0e0; font-weight: 600;">Email Address</td>
            <td style="padding: 12px; border: 1px solid #e0e0e0;"><a href="mailto:${data.email}" style="color: #2d5954;">${data.email}</a></td>
          </tr>
          <tr>
            <td style="padding: 12px; border: 1px solid #e0e0e0; font-weight: 600;">Company Name</td>
            <td style="padding: 12px; border: 1px solid #e0e0e0;">${data.company}</td>
          </tr>
          <tr style="background-color: #f5fbff;">
            <td style="padding: 12px; border: 1px solid #e0e0e0; font-weight: 600;">Party Size</td>
            <td style="padding: 12px; border: 1px solid #e0e0e0;"><strong>${data.partySize} guests</strong></td>
          </tr>
          <tr>
            <td style="padding: 12px; border: 1px solid #e0e0e0; font-weight: 600;">Celebration Type</td>
            <td style="padding: 12px; border: 1px solid #e0e0e0;">${data.celebrationType}</td>
          </tr>
          <tr style="background-color: #f5fbff;">
            <td style="padding: 12px; border: 1px solid #e0e0e0; font-weight: 600;">Preferred Date & Time</td>
            <td style="padding: 12px; border: 1px solid #e0e0e0;"><strong>${data.dateTime}</strong></td>
          </tr>
          <tr>
            <td style="padding: 12px; border: 1px solid #e0e0e0; font-weight: 600;">Food/Beverage Service</td>
            <td style="padding: 12px; border: 1px solid #e0e0e0;">${data.foodBeverage}</td>
          </tr>
        </table>
        
        <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 30px 0;">
        
        <p style="font-size: 0.9em; color: #666; text-align: center;">
          This inquiry was submitted via the CultureMap City Rink website on<br>
          ${new Date().toLocaleString('en-US', { dateStyle: 'full', timeStyle: 'short' })}
        </p>
      </div>
    `;

    // Prepare email payload
    const emailPayload = {
      to: ['jacob@culturemap.com', 'cityrink@culturemap.com', 'lindsey@culturemap.com'],
      subject: `Private Party Inquiry from ${data.name}`,
      html: emailHtml,
      fromEmail: 'info@culturemap.com',
      fromName: 'CultureMap City Rink'
    };

    try {
      const response = await fetch('https://cm-send-email-561577077688.us-south1.run.app', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(emailPayload)
      });

      if (response.ok) {
        showStatus('Thank you! Your inquiry has been submitted. Our event planning team will contact you shortly.', 'success');
        contactForm.reset();
        
        // Scroll to status message
        setTimeout(() => {
          formStatus?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      showStatus('Sorry, there was an error sending your message. Please try again or email us directly at sales@culturemap.com.', 'error');
    } finally {
      submitButton.disabled = false;
    }
  });
}
