# Windcrest

**Digital partner for stunning websites** — a single-page marketing site for a web design & development agency built for the Indian market.

🔗 **Live demo:** [windcrest-gilt.vercel.app](https://windcrest-gilt.vercel.app)

## Overview

Windcrest is a fully custom, dark-themed landing page showcasing an agency's services, pricing, and testimonials, with a contact form for lead capture. Built from scratch with HTML, CSS, and vanilla JavaScript — no frameworks, no build step.

## Features

- Animated page loader and a custom cursor (dot + trailing ring) that disables itself on touch devices
- Sticky navbar with scroll-based active-section highlighting and a mobile hamburger menu
- Hero section with animated stat counters, a fake typing terminal mockup, and an image gallery
- Scroll-triggered reveal animations throughout, powered by AOS
- Pricing section with three INR-priced plans (Starter / Classic / Premium) and a 3D tilt-on-hover effect on each card
- Testimonials section
- Contact form that pre-selects a plan when triggered from a pricing CTA, with a simulated submit and success state
- Fully responsive layout

## Tech Stack

- HTML5 / CSS3 (custom properties, no CSS framework)
- Vanilla JavaScript (ES6+, no build tools)
- [AOS](https://michalsnik.github.io/aos/) — scroll animations (CDN)
- [Font Awesome 6](https://fontawesome.com/) — icons (CDN)
- Google Fonts — Clash Display, Syne, DM Sans

## Project Structure

```
Windcrest/
├── index.html
└── assets/
    ├── css/
    │   ├── base.css
    │   ├── cursor-loader.css
    │   ├── nav.css
    │   ├── hero.css
    │   ├── sections.css
    │   ├── testimonials-contact.css
    │   ├── footer.css
    │   └── responsive.css
    └── js/
        ├── cursor.js              # custom cursor + loader
        ├── nav.js                 # navbar scroll/active state + mobile menu
        ├── hero-effects.js        # stat counters, typing animation, gallery
        ├── main.js                # AOS init + pricing card tilt effect
        └── forms.js               # plan pre-select + contact form handling
```

## Getting Started

No build tools or dependencies required.

```bash
git clone https://github.com/aayu88888/Windcrest.git
cd Windcrest
```

Then either:
- Open `index.html` directly in your browser, or
- Run it with a local dev server (e.g. VS Code's [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension) for live reload while editing.

## Notes

The contact form is currently front-end only — it simulates a network request and shows a success state, but isn't wired up to a backend or form service yet.


