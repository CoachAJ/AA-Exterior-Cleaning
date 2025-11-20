import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AA Exterior Cleaning | Pressure Washing & Soft Washing Jacksonville, FL',
  description: 'Professional exterior cleaning services in Jacksonville, FL. Licensed & insured. Specializing in soft washing, pressure washing, roof cleaning, and commercial exterior cleaning. Florida Lic #L25000489655. Call 904-704-5962.',
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
  openGraph: {
    title: 'AA Exterior Cleaning | Jacksonville\'s Premier Exterior Cleaning',
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
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
