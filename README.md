# ZET Technologies - Official Website

[![Vite](https://img.shields.io/badge/Vite-8.0.0-646CFF)](https://vite.dev/)
[![React](https://img.shields.io/badge/React-19.2.0-61DAFB)](https://reactjs.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript-JSX-F7DF1E)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License](https://img.shields.io/badge/License-Proprietary-3b2bee)](LICENSE)

A modern, high-performance company website for ZET Technologies Private Limited. Built with React and Vite, featuring a sleek design with smooth animations, WhatsApp integration, and live project showcases.

**Built by**: [ZET Technologies Private Limited](mailto:zetfounder@gmail.com)  
**Contact**: zetfounder@gmail.com  
**Location**: Guntur, Andhra Pradesh, India  
**© 2026 ZET Technologies Private Limited. All rights reserved.**

## Features Implemented

### ✅ Navigation
- **Sticky Header**: Fixed navigation bar with smooth backdrop blur
- **Logo & Branding**: Company avatar with "ZET Technologies" text
- **Smooth Scrolling**: All nav links scroll to sections centered in viewport
- **GitHub Link**: Direct link to organization's GitHub profile

### ✅ Hero Section
- **Bold Typography**: "Crafting Digital Excellence" headline with 68px font
- **Animated Badge**: Pulsing "Available for new projects" indicator
- **CTA Button**: "Start Your Project" opens email to zetfounder@gmail.com
- **Developer Illustration**: Custom cartoon illustration
- **Social Proof**: Client avatars with "500+ projects delivered worldwide"

### ✅ Trusted By Section
- **Industry Leaders**: Stripe, Linear, Vercel, Notion, Figma logos
- **Grayscale Filter**: Subtle, professional logo display

### ✅ Services Section
- **3 Service Cards**: Web Development, UI/UX Design, Custom Software
- **Hover Effects**: Cards elevate with shadow on hover
- **Icon System**: Material Symbols Outlined icons
- **Feature Lists**: Detailed capabilities for each service

### ✅ Portfolio Section
- **Live Screenshots**: WordPress mshots API for real-time project previews
- **Project Cards**: KeyStrike & Drive Nation showcases
- **Tech Tags**: Technology stack badges for each project
- **Hover Animations**: Smooth scale and shadow transitions

### ✅ Process Section
- **5-Step Methodology**: Discovery → Design → Development → Launch → Maintenance
- **Numbered Steps**: Bold step indicators with hover color transitions
- **Team Photo**: Collaboration image alongside process steps
- **Clean Layout**: Two-column grid with structured content

### ✅ Contact CTA
- **WhatsApp Integration**: One-click contact via WhatsApp button
- **Grid Pattern Background**: SVG grid overlay on purple background
- **Centered Layout**: Clean, focused call-to-action design

### ✅ Footer
- **Company Info**: Logo, description, location, and email
- **Link Columns**: Company, Services, and Legal sections
- **Social Links**: GitHub, LinkedIn, Twitter icons
- **Copyright**: © 2026 ZET Technologies Private Limited

### ✅ Design System
- **Color Scheme**: Purple (#3b2bee) primary with white and slate accents
- **Typography**: Bold, modern fonts with strong weight hierarchy (900-400)
- **Hover Effects**: Smooth transitions on all interactive elements
- **Responsive Ready**: CSS Grid and Flexbox layouts
- **Inline Styles**: CSS-in-JS approach for component-scoped styling

## Project Structure

```
zet-site/
├── public/
│   ├── hero-illustration.png    # Hero section developer illustration
│   ├── zet-logo.png             # Company logo/avatar
│   └── vite.svg                 # Default Vite favicon
│
├── src/
│   ├── App.jsx                  # Main application component (~590 lines)
│   │   ├── Navigation           # Sticky header with links
│   │   ├── Hero Section         # Landing headline with CTA
│   │   ├── Trusted By           # Client logos bar
│   │   ├── Services             # 3 service cards grid
│   │   ├── Portfolio            # Project showcase cards
│   │   ├── Process              # 5-step methodology
│   │   ├── CTA Section          # Contact call-to-action
│   │   ├── Footer               # Company info and links
│   │   └── ProcessStep()        # Reusable step component
│   │
│   ├── App.css                  # Application styles
│   ├── index.css                # Global CSS reset
│   └── main.jsx                 # React entry point
│
├── index.html                   # HTML entry point
├── package.json                 # Dependencies & scripts
├── vite.config.js               # Vite configuration
├── eslint.config.js             # ESLint configuration
└── README.md                    # This file
```

## Technology Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 19.2.0 | UI component library |
| **Vite** | 8.0.0 | Build tool & dev server |
| **JavaScript (JSX)** | ES2024 | Programming language |
| **CSS-in-JS** | Inline | Component-scoped styling |
| **Material Symbols** | Outlined | Google icon system |
| **SimpleIcons CDN** | Latest | Brand icons (WhatsApp, GitHub) |
| **WordPress mshots** | v1 | Live website screenshots |
| **ESLint** | 9.39.1 | Code linting |

## Color Scheme

| Color | Hex | Usage |
|-------|-----|-------|
| **Primary Purple** | `#3b2bee` | Buttons, accents, headings |
| **Dark Text** | `#0f172a` | Headlines, primary text |
| **Body Text** | `#475569` | Paragraphs, descriptions |
| **Muted Text** | `#94a3b8` | Labels, subtle text |
| **Light Background** | `#f8fafc` | Section backgrounds |
| **Border** | `#f1f5f9` | Dividers, card borders |
| **White** | `#ffffff` | Main background, card fills |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

```bash
# Clone the repository
git clone https://github.com/ZET-Technologies-Private-Limited/ZET-Technologies.git
cd ZET-Technologies

# Install dependencies
npm install

# Start development server
npm run dev

# Open browser
# Visit http://localhost:5173
```

### Build for Production

```bash
# Create optimized build
npm run build

# Preview production build
npm run preview
```

The optimized output will be in the `dist/` folder, ready for deployment.

## Pages & Sections

| Section | Description |
|---------|-------------|
| **Hero** | Eye-catching headline with CTA and developer illustration |
| **Trusted By** | Social proof with industry leader logos |
| **Services** | Web Development, UI/UX Design, Custom Software cards |
| **Portfolio** | Live project showcases — KeyStrike & Drive Nation |
| **Process** | 5-step development methodology with team photo |
| **Contact CTA** | WhatsApp integration on purple background |
| **Footer** | Company info, navigation links, social media |

## Key Components

### App.jsx
Single-file application containing all sections and components. Uses inline styles for component-scoped CSS with no external CSS framework dependency.

### ProcessStep Component
Reusable component for rendering numbered process steps with hover animations:
```jsx
function ProcessStep({ num, title, desc, primary }) {
  // Renders numbered step with title and description
  // Hover effect changes number color to primary purple
}
```

### Navigation
Smooth scroll navigation using `scrollIntoView({ behavior: "smooth", block: "center" })` for viewport-centered section targeting.

## External Services

| Service | URL | Purpose |
|---------|-----|---------|
| **WordPress mshots** | `s.wordpress.com/mshots/v1/` | Live website screenshots |
| **SimpleIcons CDN** | `cdn.simpleicons.org` | WhatsApp & GitHub icons |
| **Material Symbols** | Google Fonts | UI icons |
| **Random User API** | `randomuser.me` | Client avatar placeholders |
| **UI Avatars** | `ui-avatars.com` | Logo placeholder generation |

## Browser Support

- Chrome / Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Android)

## Performance

- **No CSS framework** — Zero unnecessary CSS overhead
- **Lightweight** — Single component, minimal dependencies
- **Fast HMR** — Vite's instant hot module replacement
- **Optimized images** — CDN-hosted icons and illustrations
- **Lazy screenshots** — WordPress mshots load on demand

## Customization

### Changing Primary Color
Update the `PRIMARY` constant in `src/App.jsx`:
```jsx
const PRIMARY = "#3b2bee"; // Change to your brand color
```

### Updating Contact Info
Modify the email, WhatsApp number, and location directly in `src/App.jsx`:
- Email: Search for `zetfounder@gmail.com`
- WhatsApp: Search for `919291258688`
- Location: Search for `Guntur, Andhra Pradesh`

### Adding Portfolio Projects
Add new project objects to the portfolio array in the Portfolio section of `src/App.jsx`.

### Modifying Services
Edit the services array in the Services section to add, remove, or modify service cards.

## Future Enhancements

- Dark mode toggle
- Blog / Articles section
- Client testimonials carousel
- Contact form with email integration
- Multi-language support (Telugu, Hindi)
- Animation library integration (Framer Motion)
- CMS integration for dynamic content
- Analytics dashboard

## Contributing

We welcome contributions! Here's how:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Support

- **Email**: [zetfounder@gmail.com](mailto:zetfounder@gmail.com)
- **WhatsApp**: [+91 92912 58688](https://wa.me/919291258688)
- **GitHub**: [ZET Technologies](https://github.com/ZET-Technologies-Private-Limited)
- **Issues**: [GitHub Issues](https://github.com/ZET-Technologies-Private-Limited/ZET-Technologies/issues)

## License

This project is proprietary software owned by **ZET Technologies Private Limited**. All rights reserved.

---

**Built with ❤️ by ZET Technologies Private Limited**  
**Guntur, Andhra Pradesh, India · © 2026**
