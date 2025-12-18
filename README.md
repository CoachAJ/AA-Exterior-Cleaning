# AA's Exterior Cleaning - Jacksonville, FL

A high-performance, SEO-optimized website for AA's Exterior Cleaning, a professional exterior cleaning company serving Jacksonville and Northeast Florida.

## 🌟 Features

- **SEO-Optimized**: Comprehensive metadata, structured keywords, and semantic HTML for excellent search engine visibility
- **Mobile-Responsive**: Beautiful design that works perfectly on all devices
- **Fast Performance**: Built with Next.js 14 for optimal loading speeds
- **Accessibility**: WCAG-compliant with semantic HTML and proper ARIA labels
- **Modern Tech Stack**: TypeScript, Tailwind CSS, and React

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment Ready**: Optimized for Vercel, Netlify, or any Node.js hosting

## 📋 Company Information

- **Company**: AA's Exterior Cleaning
- **Location**: Jacksonville, Florida (Duval County, Northeast Florida)
- **License**: Florida Lic #L25000489655
- **Phone**: (904) 767-3233
- **Email**: info@aaexteriorcleaning.com

## 🏗️ Project Structure

```
AA's Exterior Cleaning/
├── app/
│   ├── about/
│   │   └── page.tsx          # About Us page
│   ├── commercial/
│   │   └── page.tsx          # Commercial Services page
│   ├── contact/
│   │   └── page.tsx          # Contact/Quote Request page
│   ├── residential/
│   │   └── page.tsx          # Residential Services page
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout with SEO metadata
│   └── page.tsx              # Homepage
├── components/
│   ├── ui/
│   │   └── button.tsx        # Reusable button component
│   ├── Footer.tsx            # Site footer
│   └── Header.tsx            # Site header with navigation
├── lib/
│   └── utils.ts              # Utility functions
├── public/                   # Static assets (add logo here)
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

## 🎯 Key Pages

### Homepage (`/`)
- Hero section with primary CTAs
- Services overview (Residential, Commercial, Methods)
- Soft washing vs. pressure washing education
- Trust signals and certifications

### Residential Services (`/residential`)
- Detailed roof cleaning information
- House washing services
- Driveway and concrete cleaning
- Additional services (pavers, decks, gutters, windows)

### Commercial Services (`/commercial`)
- EPA compliance messaging
- Storefront and building washing
- Parking lot cleaning
- Dumpster pad sanitization
- HOA and property management services
- Maintenance plans

### About Us (`/about`)
- Company mission and values
- Why choose AA's Exterior Cleaning
- Process overview
- Service areas

### Contact (`/contact`)
- Request quote form
- Contact information
- Business hours
- License details

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. **Install Dependencies**

```bash
npm install
```

2. **Run Development Server**

```bash
npm run dev
```

3. **Open Browser**

Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 🎨 Customization

### Adding Your Logo

1. Place your logo file in the `/public` folder
2. Update the header in `components/Header.tsx` to display the logo:

```tsx
<Link href="/" className="flex items-center">
  <Image src="/logo.png" alt="AA's Exterior Cleaning" width={150} height={50} />
</Link>
```

### Color Scheme

The site uses a professional blue color scheme. Primary colors:
- **Primary Blue**: `#0068B3`
- **Light Blue**: `#3CAADF`

To change colors, update the Tailwind config in `tailwind.config.ts` and CSS variables in `app/globals.css`.

### Contact Form

The contact form in `/contact` currently logs to console. To connect it to your backend:

1. Add your form submission endpoint
2. Update the `handleSubmit` function in `app/contact/page.tsx`
3. Consider integrations like:
   - Formspree
   - SendGrid
   - Mailchimp
   - Custom API endpoint

## 📱 SEO Features

- **Structured Metadata**: Each page has unique title, description, and keywords
- **Semantic HTML**: Proper heading hierarchy and semantic elements
- **Local SEO**: Company name, address, phone (NAP) consistency
- **Schema Markup Ready**: Easy to add structured data for rich snippets
- **Mobile-First**: Responsive design for better mobile rankings
- **Fast Load Times**: Optimized Next.js build

### Target Keywords

**Primary:**
- Pressure Washing Jacksonville FL
- Soft Washing Jacksonville Florida
- Roof Cleaning Jacksonville
- Commercial Exterior Cleaning Northeast Florida
- Exterior Cleaning Jacksonville

**Secondary:**
- House Washing, Driveway Cleaning, Storefront Cleaning
- Dumpster Pad Cleaning, HOA Cleaning Services
- Licensed Pressure Washing Jacksonville

## 🚢 Deployment

### Deploy to Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

```bash
npm run build
# Upload the `.next` folder to Netlify
```

### Environment Variables

If you add a contact form backend, create `.env.local`:

```
NEXT_PUBLIC_FORM_ENDPOINT=your_endpoint_here
NEXT_PUBLIC_GOOGLE_ANALYTICS=your_ga_id
```

## 📊 Analytics & Tracking

To add Google Analytics:

1. Get your GA tracking ID
2. Add to `app/layout.tsx`:

```tsx
<Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
```

## 🔧 Maintenance

### Updating Content

- **Services**: Edit respective page files in `/app/[service]/page.tsx`
- **Contact Info**: Update in `components/Header.tsx` and `components/Footer.tsx`
- **Business Hours**: Update in `components/Footer.tsx` and `/app/contact/page.tsx`

### Adding New Services

1. Create a new route: `/app/[service-name]/page.tsx`
2. Add navigation link in `components/Header.tsx`
3. Update sitemap if deployed

## 🎯 Performance Optimization

- Images: Use Next.js `<Image>` component for automatic optimization
- Fonts: Leverages Next.js font optimization
- CSS: Tailwind purges unused styles in production
- Code Splitting: Automatic with Next.js App Router

## 📞 Support & Customization

For additional customization or support with this website, you can:
- Modify the code directly (fully open source)
- Hire a Next.js developer for advanced features
- Integrate with CMS (Contentful, Sanity, etc.)

## 📄 License

This website is created for AA's Exterior Cleaning. All rights reserved.

---

**Built with ❤️ for AA's Exterior Cleaning**

For technical questions about the website, consult the Next.js documentation: https://nextjs.org/docs
