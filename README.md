# Incredible Medicare

A modern pharmaceutical company website built with [Next.js](https://nextjs.org), showcasing products, manufacturing capabilities, and PCD franchise opportunities across India.

## About Incredible Medicare

**Incredible Medicare** is a distinguished Indian pharmaceutical enterprise specializing in:

- **Manufacturing & Distribution** of high-grade ethical pharmaceutical formulations
- **650+ DCGI-Approved Products** across multiple therapeutic segments
- **PCD Pharma Franchise** opportunities with monopoly rights across Indian states
- **Third-Party Contract Manufacturing** (CMO/CDMO services)
- **WHO-GMP & ISO 9001:2015 Certified** facilities with Class 10,000 cleanrooms

### Key Highlights

- **650+ Approved Formulations** across Antibiotics, Pain Management, Gastroenterology, Nutraceuticals, and Dermatology
- **850+ Distribution Partners** nationwide
- **120M+ Units Produced** annually
- **15+ Years** of industry experience
- **28+ States** coverage with pan-India presence
- **Class 10,000 Cleanroom** facilities with cGMP compliance

## Tech Stack

- **Framework:** [Next.js 16.3.6](https://nextjs.org)
- **Runtime:** [React 19.2.8](https://react.dev)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com) + PostCSS
- **UI Components:** [Radix UI](https://radix-ui.com)
- **Animations:** [Motion 13.4.4](https://www.framer.com/motion)
- **Visualization:** [D3.js 7.9.0](https://d3js.org) + TopoJSON
- **Icons:** [Lucide React 1.48.0](https://lucide.dev)
- **Language:** [TypeScript 5](https://www.typescriptlang.org)

## Project Structure

```
src/
├── app/
│   ├── page.tsx                    # Home page (hero, featured products, company overview)
│   ├── about/page.tsx              # Company background and mission
│   ├── products/page.tsx           # Complete product directory with category filters
│   ├── infrastructure/page.tsx     # Manufacturing facilities and capabilities
│   ├── divisions/page.tsx          # Product divisions and therapeutic segments
│   ├── exports/page.tsx            # Export markets and information
│   ├── our-services/page.tsx       # Service offerings and capabilities
│   ├── services/page.tsx           # Additional services
│   ├── contact/page.tsx            # Contact form and business enquiries
│   ├── product/page.tsx            # Individual product details
│   ├── privacy-policy/page.tsx     # Privacy policy
│   ├── terms-conditions/page.tsx   # Terms and conditions
│   ├── layout.tsx                  # Root layout and metadata
│   ├── template.tsx                # Page template wrapper
│   ├── globals.css                 # Global styles
│   └── favicon.ico
├── components/
│   ├── Header.tsx                  # Navigation header
│   ├── Footer.tsx                  # Footer with links and info
│   ├── EnquiryModal.tsx            # Product enquiry form modal
│   ├── FloatingAssistant.tsx       # Floating assistant widget
│   ├── motion/                     # Animated components
│   │   ├── HeroCarousel.tsx        # Hero section image carousel
│   │   ├── Parallax.tsx            # Parallax scroll effect
│   │   ├── Reveal.tsx              # Scroll reveal animations
│   │   ├── CountUp.tsx             # Number counter animation
│   │   ├── ProcessFlow.tsx         # Business process visualization
│   │   ├── Ticker.tsx              # Scrolling ticker/marquee
│   │   ├── ExportRoutes.tsx        # Export routes visualization
│   │   ├── YouTubeLite.tsx         # Lightweight YouTube embed
│   │   ├── YouTubeCoverBackground.tsx # Background video cover
│   │   ├── YouTubeAutoplay.tsx     # Auto-playing video
│   │   ├── Conveyor.tsx            # Conveyor animation
│   │   ├── SectionBg.tsx           # Section background handler
│   │   └── AutoReveal.tsx          # Automatic reveal trigger
│   └── ui/                         # Reusable UI components
│       ├── button.tsx              # Button component
│       ├── contact-with-globe.tsx  # Contact with globe visualization
│       ├── navigation-menu.tsx     # Navigation menu
│       ├── testimonial.tsx         # Testimonial card
│       └── timeline-animation.tsx  # Timeline component
├── data/
│   ├── company.ts                  # Company info, contact details, addresses
│   └── products.ts                 # Product database and catalog
└── public/
    ├── images/                     # Hero and section images
    ├── logo.png                    # Company logo
    └── icons/                      # SVG icons
```

## Getting Started

### Prerequisites

- **Node.js** 18.17 or later
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd medical
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run development server:**
   ```bash
   npm run dev
   ```

   The application will be available at **[http://localhost:3009](http://localhost:3009)**

### Available Scripts

```bash
# Start development server (port 3009)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run ESLint checks
npm run lint
```

## Key Pages & Features

| Page | Path | Description |
|------|------|-------------|
| **Home** | `/` | Hero section, featured products, company stats, about snapshot, CTA |
| **Products** | `/products` | Complete 650+ product directory with category filters and search |
| **About** | `/about` | Company history, mission, corporate information |
| **Infrastructure** | `/infrastructure` | Manufacturing facilities, equipment, and quality systems |
| **Our Services** | `/our-services` | Business services and capabilities overview |
| **Divisions** | `/divisions` | Product categories and therapeutic segments |
| **Exports** | `/exports` | International export information and markets |
| **Contact** | `/contact` | Contact form, location map, business enquiry |
| **Privacy Policy** | `/privacy-policy` | Data privacy and legal information |
| **Terms & Conditions** | `/terms-conditions` | Terms of service and legal agreements |

### Core Features

✨ **Animations & Motion**
- Scroll-triggered reveal animations
- Parallax effects on imagery and sections
- Number counter animations for statistics
- Smooth hero carousel transitions
- Auto-playing background videos
- Floating assistant widget

📱 **Responsive Design**
- Mobile-first approach
- Optimized for tablets and desktops
- Touch-friendly interface
- Adaptive navigation

🔍 **Product Discovery**
- Advanced product filtering by category
- Product search functionality
- Detailed product information cards
- Enquiry modal for product quotes
- Price list and terms requests

💼 **Business Features**
- Franchise enquiry forms
- Consignment tracking information
- Promotional support details
- Contract manufacturing options
- Monopoly rights information
- Distribution partner network

⚡ **Performance**
- Next.js image optimization
- Dynamic routing and code splitting
- TypeScript for type safety
- SEO-optimized metadata

## Configuration

### Company Data

Edit company information in **`src/data/company.ts`**:
- Contact phone and email
- WhatsApp business number
- Office addresses (Corporate HQ and Manufacturing)
- Social media links
- Business hours

Update product catalog in **`src/data/products.ts`**:
- Product names and descriptions
- Categories and therapeutic segments
- Generic names and strength
- Packaging options
- Division assignment
- Featured product flags

### Styling & Branding

- **Primary Color:** Teal (#0D9488)
- **Secondary Color:** Dark Navy (#0b192c)
- **Accent Colors:** Emerald, Amber, Rose variants
- Tailwind CSS configuration in `tailwind.config.ts`
- Global styles in `src/app/globals.css`

### Environment Variables

Create `.env.local` in the root directory for any environment-specific settings:

```env
# Add environment variables as needed
NEXT_PUBLIC_API_URL=
```

## Deployment

### Vercel (Recommended)

1. Push code to GitHub repository
2. Import project to [Vercel Dashboard](https://vercel.com)
3. Configure environment variables if needed
4. Deploy with one click

### Self-Hosted

```bash
# Build for production
npm run build

# Start production server
npm start
```

Server will run on the configured port (default 3009 for production).

## Browser Support

- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Microsoft Edge (latest)

## Development Guidelines

### Code Style
- Use TypeScript for all new components
- Follow React functional component patterns
- Use Tailwind CSS for styling
- ESLint enforced via npm run lint

### Component Structure
- Components in `src/components/`
- Reusable UI in `src/components/ui/`
- Animations in `src/components/motion/`
- Page components in `src/app/[route]/page.tsx`

### Adding New Products
1. Update `src/data/products.ts` with product details
2. Ensure category matches existing categories
3. Include all required fields (name, generic, description, packaging, etc.)
4. Set `featured: true` to show on home page

## Contributing

When making changes:
1. Create a feature branch from `main`
2. Make changes and test locally
3. Run `npm run lint` to check code quality
4. Commit with clear messages
5. Push and create a pull request

## Company Information

**Incredible Medicare**

**Corporate Headquarters:**
- Unicity Business Park, Dhakoli
- Zirakpur, Punjab - 160104, India
- [View on Map](https://maps.google.com)

**Manufacturing Facility:**
- SIDCO Industrial Complex, Ghatti
- Kathua, Jammu & Kashmir - 184143, India
- WHO-GMP Certified
- Class 10,000 Cleanroom

**Contact:**
- **Phone:** +91 [Contact Number]
- **Email:** contact@incrediblemedicate.com
- **WhatsApp:** [Business WhatsApp Number]

**Certifications:**
- WHO-GMP Certified Facilities
- ISO 9001:2015 Quality Assured
- 650+ DCGI Approved Formulations
- Pan-India Coverage (28+ States)

## License

Proprietary — All rights reserved by Incredible Medicare.

## Support

For technical support or questions about the website, contact the development team through the contact page or email the corporate office.

---

**Built with ❤️ for pharmaceutical excellence in India**

*Last Updated: 2026*
