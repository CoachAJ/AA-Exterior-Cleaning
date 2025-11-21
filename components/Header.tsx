'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Phone, Mail, Menu, X } from 'lucide-react'
import { Button } from './ui/button'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-[#0068B3] text-white">
        <div className="container mx-auto px-4 py-2 flex flex-wrap justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <a href="tel:9047045962" className="flex items-center gap-2 hover:text-gray-200">
              <Phone className="h-4 w-4" />
              <span>(904) 704-5962</span>
            </a>
            <a href="mailto:info@aaexteriorcleaning.com" className="hidden sm:flex items-center gap-2 hover:text-gray-200">
              <Mail className="h-4 w-4" />
              <span>info@aaexteriorcleaning.com</span>
            </a>
          </div>
          <div className="text-xs">
            Licensed & Insured | FL Lic #L25000489655
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3">
            <Image 
              src="/logo.png" 
              alt="AA Exterior Cleaning Logo" 
              width={180}
              height={60}
              priority
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-gray-700 hover:text-[#0068B3] font-medium transition-colors">
              Home
            </Link>
            <Link href="/residential" className="text-gray-700 hover:text-[#0068B3] font-medium transition-colors">
              Residential
            </Link>
            <Link href="/commercial" className="text-gray-700 hover:text-[#0068B3] font-medium transition-colors">
              Commercial
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-[#0068B3] font-medium transition-colors">
              About Us
            </Link>
            <Link href="/contact">
              <Button size="lg" className="bg-[#0068B3] hover:bg-[#005a9c]">
                Free Quote
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <Link href="/" className="text-gray-700 hover:text-[#0068B3] font-medium" onClick={() => setMobileMenuOpen(false)}>
              Home
            </Link>
            <Link href="/residential" className="text-gray-700 hover:text-[#0068B3] font-medium" onClick={() => setMobileMenuOpen(false)}>
              Residential Services
            </Link>
            <Link href="/commercial" className="text-gray-700 hover:text-[#0068B3] font-medium" onClick={() => setMobileMenuOpen(false)}>
              Commercial Services
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-[#0068B3] font-medium" onClick={() => setMobileMenuOpen(false)}>
              About Us
            </Link>
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
              <Button size="lg" className="w-full bg-[#0068B3] hover:bg-[#005a9c]">
                Get Free Quote
              </Button>
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}
