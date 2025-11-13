# CultureMap City Rink - Deployment Guide

This guide will help you deploy the CultureMap City Rink website to fly.io.

## Prerequisites

1. Install the fly.io CLI:
   ```bash
   curl -L https://fly.io/install.sh | sh
   ```

2. Login to your fly.io account:
   ```bash
   fly auth login
   ```

## Deployment Steps

### First Time Deployment

1. **Launch the app** (this creates the app on fly.io):
   ```bash
   fly launch
   ```
   
   When prompted:
   - Choose a unique app name (or let fly.io generate one)
   - Select your preferred region (dfw for Dallas)
   - Choose "No" when asked to create a PostgreSQL database
   - Choose "No" when asked to create a Redis database
   - Choose "Yes" to deploy now

   Note: The `fly.toml` file is already configured, so fly.io will use those settings.

### Update Existing Deployment

To deploy updates after making changes:

```bash
fly deploy
```

## Configuration

### App Name
The default app name in `fly.toml` is `ice-rink`. To use a different name:

1. Edit `fly.toml` and change the `app` value
2. Or run `fly launch` and choose a different name

### Region
The default region is `dfw` (Dallas). To change it:

1. Edit `fly.toml` and change `primary_region`
2. Available regions: https://fly.io/docs/reference/regions/

### Scaling

The app is configured with minimal resources:
- 1 shared CPU
- 256MB RAM
- Auto-stop/start when idle (free tier friendly)

To scale up:
```bash
fly scale vm shared-cpu-1x --memory 512
```

## Useful Commands

### View deployment status
```bash
fly status
```

### View logs
```bash
fly logs
```

### Open the app in browser
```bash
fly open
```

### View app info
```bash
fly info
```

### SSH into the container
```bash
fly ssh console
```

### Set custom domain
```bash
fly certs add yourdomain.com
```

## Custom Domain Setup

1. Add your domain:
   ```bash
   fly certs add cityring.culturemap.com
   ```

2. Add the DNS records shown by fly.io to your domain provider

3. Verify certificate:
   ```bash
   fly certs show cityring.culturemap.com
   ```

## Troubleshooting

### App not starting
Check logs:
```bash
fly logs
```

### Build fails
Ensure all files are present:
- index.html
- styles.css
- scripts.js
- public/ directory with all images
- nginx.conf
- Dockerfile

### Domain not working
Check certificate status:
```bash
fly certs list
```

## Cost

With the free tier settings (auto-stop when idle):
- Free for hobby projects with minimal traffic
- App sleeps when not in use
- Wakes up on first request (may take a few seconds)

For production with always-on:
```bash
fly scale count 1 --min-machines-running 1
```

## Support

- fly.io docs: https://fly.io/docs/
- fly.io community: https://community.fly.io/

