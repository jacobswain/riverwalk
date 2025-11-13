FROM nginx:alpine

# Copy static files to nginx html directory
COPY index.html /usr/share/nginx/html/
COPY styles.css /usr/share/nginx/html/
COPY scripts.js /usr/share/nginx/html/
COPY public /usr/share/nginx/html/public

# Copy nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 8080
EXPOSE 8080

# Start nginx
CMD ["nginx", "-g", "daemon off;"]

