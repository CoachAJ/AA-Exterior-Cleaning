import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingContact from '@/components/FloatingContact'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AA\'s Exterior Cleaning | Pressure Washing & Soft Washing Jacksonville, FL',
  description: 'Professional exterior cleaning services in Jacksonville, FL. Licensed & insured. Specializing in soft washing, pressure washing, roof cleaning, and commercial exterior cleaning. Florida Lic #L25000489655. Call 904-767-3233.',
  keywords: [
    'pressure washing jacksonville fl',
    'soft washing jacksonville florida',
    'roof cleaning jacksonville',
    'commercial exterior cleaning northeast florida',
    'exterior cleaning jacksonville',
    'house washing',
    'driveway cleaning',
    'storefront cleaning',
    'eco-friendly cleaning',
    'licensed pressure washing'
  ],
  icons: {
    icon: [
      { url: '/favicon_io (1)/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon_io (1)/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon_io (1)/favicon.ico' }
    ],
    apple: '/favicon_io (1)/apple-touch-icon.png',
  },
  openGraph: {
    title: 'AA\'s Exterior Cleaning | Jacksonville\'s Premier Exterior Cleaning',
    description: 'Licensed & insured exterior cleaning specialists. Soft washing, pressure washing, roof cleaning, and commercial services.',
    type: 'website',
    locale: 'en_US',
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5RTJJWCW');`,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body className={inter.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5RTJJWCW"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <FloatingContact />
        <Footer />
      </body>
    </html>
  )
}
