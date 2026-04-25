# Huma Qureshi Website

Static HTML/CSS/JS website ready for GitHub and Vercel deployment.

## Pages
- `index.html` — Home
- `about.html` — About
- `work.html` — Work
- `gallery.html` — Gallery
- `press.html` — Press
- `contact.html` — Contact with lead enquiry form

## Folders
- `assets/styles.css` — global styling
- `assets/script.js` — mobile menu, WhatsApp enquiry bot, contact form WhatsApp handoff
- `images/` — website image assets
- `mockups/` — visual design mockup references generated during design

## WhatsApp bot setup
Open `assets/script.js` and replace:

```js
const WHATSAPP_NUMBER = "919876543210";
```

Use the official WhatsApp number with country code and no plus sign. Example for India: `9198XXXXXXXX`.

## Contact form behavior
The contact form is frontend-only. On submit, it opens WhatsApp with a pre-filled lead enquiry message. For production CRM/email storage, connect the form to a backend, Vercel Serverless Function, Formspree, HubSpot, Zoho, or a custom API.
