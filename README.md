# ❄️ CultureMap City Rink

> *Where winter magic meets downtown Dallas*

Welcome to the digital home of the CultureMap City Rink! This website brings the festive spirit of our holiday ice rink to life, featuring event information, ticket purchasing, themed event calendars, and private party booking.

---

## ✨ About the Experience

The CultureMap City Rink presented by Verizon transforms Main Street Garden into a winter wonderland with themed programming, community events, and unforgettable holiday experiences.

**🗓️ Season:** November 26, 2025 - January 4, 2026  
**📍 Location:** Main Street Garden, Downtown Dallas

---

## 🎨 What Makes This Special

### Interactive Features
- ❄️ **Animated Snowflakes** - Delightful falling snow throughout the experience
- 🎴 **Flip Card Calendar** - Touch or click event cards to reveal magical details
- 🎫 **Smart Ticket Display** - Three beautifully designed pricing tiers
- 📱 **Fully Responsive** - Looks stunning on every device
- ♿ **Accessible by Design** - Everyone can enjoy the experience

### Themed Events
- 🎄 Tree Lighting Ceremony
- 🎬 Family Movie Night
- 🛍️ Shop + Skate
- 🎅 Santa Skate
- 💝 Date Skate
- 🎉 Dallas Holiday Parade

### User Experience
- 🚀 **Lightning Fast** - Optimized performance with deferred loading
- 🎯 **Intuitive Navigation** - Find what you need instantly
- ❓ **Helpful FAQ** - Accordion-style answers to common questions
- 🤝 **Partner Showcase** - Beautiful sponsor display

---

## 🛠️ Built With

This site is crafted with simplicity and performance in mind:

- **HTML5** - Semantic structure for accessibility
- **CSS3** - Custom properties and modern layouts
- **Vanilla JavaScript** - No frameworks, pure performance
- **Outfit Font** - Clean, modern typography from Google Fonts
- **Nginx** - Lightning-fast static file serving
- **Docker** - Containerized for easy deployment
- **fly.io** - Deployed with confidence

---

## 🚀 Getting Started

Ready to bring some winter magic to your local machine? Here's how!

### What You'll Need

- A modern web browser (any recent version will do)
- *(Optional)* A local web server for the full experience

### Quick Start Guide

#### 🐍 Option 1: Python Server

Perfect if you have Python installed:
```bash
python -m http.server 8000
```

Then visit `http://localhost:8000` and watch the snowflakes fall! ❄️

#### 📦 Option 2: Node Server

Prefer Node? We've got you:
```bash
npx serve
```

Open the URL it provides and start skating! ⛸️

#### ⚡ Option 3: Quick Preview

In a hurry? Just double-click `index.html` in your file browser. 

*Note: Some interactive features work best with a proper server.*

### 📂 Project Structure

Here's where everything lives:

```
ice_rink/
├── index.html                          # ✨ The main stage
├── styles.css                          # 🎨 All the pretty colors
├── scripts.js                          # ⚡ Interactive magic
├── public/                             # 📸 Image gallery
│   ├── about.jpg
│   ├── culturemap-logo.jpg
│   ├── dallas-holiday-parade.jpg
│   ├── date-skate.jpg
│   ├── event-logo.png
│   ├── family-movie-night.jpg
│   ├── santa-skate.jpg
│   ├── shop-skate.jpg
│   ├── tree-lighting.jpg
│   └── verizon-logo.jpg
├── Dockerfile                          # 🐳 Container configuration
├── nginx.conf                          # ⚙️ Server settings
├── fly.toml                            # 🚁 Deployment config
├── DEPLOYMENT.md                       # 📖 Deployment guide
├── calendar-card-descriptions.md       # 📝 Event copy
└── specs/
    └── DELIGHTFUL_ENHANCEMENTS.md     # 💡 Feature ideas
```

---

## 💻 Development

### Making Your Mark

Making changes is easy as a Sunday morning skate:

1. **Edit** - Modify HTML, CSS, or JavaScript files
2. **Refresh** - Hit that reload button in your browser
3. **Test** - Use dev tools to check responsiveness across devices
4. **Enjoy** - Watch your changes come to life!

### 🗺️ Site Architecture

Understanding where everything is:

| Section | What It Does | Special Features |
|---------|--------------|------------------|
| **Navigation** | Sticky header | Mobile menu toggle for small screens |
| **Hero** | Eye-catching welcome | Animated snowflakes & prominent CTA |
| **Calendar** | Event showcase | Interactive flip cards with details |
| **Tickets** | Pricing display | Three tiers with clear benefits |
| **FAQ** | Helpful answers | Smooth accordion interactions |
| **Footer** | Social & legal | Links to social media channels |

### 🎨 Customization Made Simple

#### Change the Color Palette

Want to adjust the vibe? CSS custom properties make it a breeze. Find these at the top of `styles.css`:

```css
:root {
  --color-primary: #0066cc;    /* Cool winter blue */
  --color-accent: #ff6b35;     /* Warm festive orange */
  /* ... and more! */
}
```

Update these values and watch the entire site transform instantly.

#### Add New Events

Growing your calendar? Here's what to do:

1. Navigate to the `#calendar` section in `index.html`
2. Copy an existing `<article class="calendar-card" data-flip-card>`
3. Update the image, title, dates, and description
4. Save and refresh - your new event appears!

#### Edit Content

Quick reference for common updates:

- 📝 **Event descriptions** → `calendar-card-descriptions.md`
- ❓ **FAQ items** → Look for `#more-info` section in `index.html`
- 💰 **Ticket pricing** → Update `.ticket-info-card` elements in HTML

---

## 🚁 Deployment

### Launch to fly.io

Ready to share your winter wonderland with the world?

See our comprehensive [DEPLOYMENT.md](./DEPLOYMENT.md) guide for the full story, or follow this quick launch sequence:

```bash
# Install the fly CLI
curl -L https://fly.io/install.sh | sh

# Authenticate
fly auth login

# Deploy and celebrate! 🎉
fly deploy
```

Your ice rink will be live in minutes!

### 🐳 Docker Option

Prefer to containerize? We've got you covered:

```bash
# Build the image
docker build -t ice-rink .

# Run it locally
docker run -p 8080:80 ice-rink
```

Visit `http://localhost:8080` to see it in action!

---

## 🌐 Browser Support

Looks great everywhere your visitors are:

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

---

## ⚡ Performance

Built for speed, designed for delight:

- 🖼️ **Optimized Images** - Fast loading without sacrificing quality
- 📦 **Minimal Dependencies** - Only what's needed, nothing more
- 🚀 **Deferred Loading** - JavaScript loads after content
- 🎬 **GPU Animations** - Smooth as ice skating
- ⚡ **Smart Caching** - Nginx headers keep things speedy

---

## ♿ Accessibility First

Everyone deserves to experience the magic:

- 📖 **Semantic HTML5** - Screen readers understand the structure
- 🏷️ **ARIA Labels** - Extra context where needed
- ⌨️ **Keyboard Navigation** - No mouse? No problem
- ⏭️ **Skip Links** - Jump straight to content
- 🖼️ **Alt Text** - Every image tells its story
- 🎨 **High Contrast** - Easy to read for everyone
- 🎯 **Focus Indicators** - Always know where you are

---

## 🤝 Our Amazing Partners

This magical experience is brought to you by:

### ❄️ Managed by Ice Rink Events
The nation's leading designer and operator of seasonal and special-event ice rinks. With hundreds of successful installations across the U.S. and around the world, they know how to make winter magic happen.

### 📰 Powered by CultureMap.com
Dallas' go-to source for lifestyle, dining, and entertainment news. They keep the city connected to what's happening.

### 🏙️ In Partnership with Downtown Dallas, Inc.
Champions of a clean, safe, and thriving city center. They enhance public services, support growth, and care for the community spaces that make Downtown Dallas shine.

---

## 💬 Get in Touch

### For Technical Issues
Running into a bug or have a development question? Reach out to the development team.

### For Event Inquiries
Questions about tickets, events, or private parties?  
📧 Email: [sales@culturemap.com](mailto:sales@culturemap.com)

---

## 📜 License

© 2025 CultureMap City Rink presented by Verizon

---

<div align="center">

**Made with ❄️ in Dallas**

*Bringing winter magic to the heart of downtown*

</div>

