'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Phone, Mail, Menu, X, ChevronDown, MessageCircle } from 'lucide-react'
import { Button } from './ui/button'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-[#0068B3] text-white">
        <div className="container mx-auto px-4 py-2 flex flex-wrap justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <a href="tel:9047673233" className="flex items-center gap-2 hover:text-gray-200">
              <Phone className="h-4 w-4" />
              <span>(904) 767-3233</span>
            </a>
            <a href="sms:9047673233?body=Hi! I'm interested in a free quote for exterior cleaning services." className="flex items-center gap-2 hover:text-gray-200">
              <MessageCircle className="h-4 w-4" />
              <span className="hidden sm:inline">Text Us</span>
            </a>
            <a href="mailto:info@aaexteriorcleaning.com" className="hidden md:flex items-center gap-2 hover:text-gray-200">
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
              alt="AA's Exterior Cleaning Logo"
              width={240}
              height={80}
              priority
              className="h-16 w-auto"
            />
            <span className="text-2xl font-bold hidden sm:block">
              <span className="bg-gradient-to-r from-[#0068B3] to-[#3CAADF] bg-clip-text text-transparent hover:from-[#3CAADF] hover:to-[#0068B3] transition-all duration-500">
                AA&apos;s Exterior Cleaning
              </span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-gray-700 hover:text-[#0068B3] font-medium transition-colors">
              Home
            </Link>

            {/* Residential Dropdown */}
            <div
              className="relative group"
            >
              <Link href="/residential" className="text-gray-700 hover:text-[#0068B3] font-medium transition-colors flex items-center gap-1 py-4">
                Residential
                <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
              </Link>
              <div className="absolute top-full left-0 pt-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="bg-white shadow-lg rounded-lg py-2 min-w-[200px] border mt-0">
                  <Link href="/residential" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#0068B3]">
                    All Residential Services
                  </Link>
                  <Link href="/roof-cleaning" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#0068B3]">
                    Roof Cleaning
                  </Link>
                  <Link href="/house-washing" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#0068B3]">
                    House Washing
                  </Link>
                  <Link href="/paver-sealing" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#0068B3]">
                    Paver Cleaning & Sealing
                  </Link>
                  <Link href="/driveway-washing" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#0068B3]">
                    Driveway Washing
                  </Link>
                </div>
              </div>
            </div>

            {/* Commercial Dropdown */}
            <div
              className="relative group"
            >
              <Link href="/commercial" className="text-gray-700 hover:text-[#0068B3] font-medium transition-colors flex items-center gap-1 py-4">
                Commercial
                <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
              </Link>
              <div className="absolute top-full left-0 pt-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="bg-white shadow-lg rounded-lg py-2 min-w-[220px] border mt-0">
                  <Link href="/commercial" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#0068B3]">
                    All Commercial Services
                  </Link>
                  <Link href="/commercial-hoa" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#0068B3]">
                    HOA & Property Management
                  </Link>
                  <Link href="/dumpster-pad-cleaning" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#0068B3]">
                    Dumpster Pad Cleaning
                  </Link>
                  <Link href="/parking-lot-cleaning" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#0068B3]">
                    Parking Lot Cleaning
                  </Link>
                </div>
              </div>
            </div>

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
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-2">
            <Link href="/" className="text-gray-700 hover:text-[#0068B3] font-medium py-2" onClick={() => setMobileMenuOpen(false)}>
              Home
            </Link>

            {/* Mobile Residential Section */}
            <div className="border-t pt-2">
              <span className="text-xs text-gray-500 uppercase tracking-wide">Residential</span>
              <Link href="/residential" className="block text-gray-700 hover:text-[#0068B3] font-medium py-2 pl-2" onClick={() => setMobileMenuOpen(false)}>
                All Residential Services
              </Link>
              <Link href="/roof-cleaning" className="block text-gray-600 hover:text-[#0068B3] py-1 pl-4 text-sm" onClick={() => setMobileMenuOpen(false)}>
                → Roof Cleaning
              </Link>
              <Link href="/house-washing" className="block text-gray-600 hover:text-[#0068B3] py-1 pl-4 text-sm" onClick={() => setMobileMenuOpen(false)}>
                → House Washing
              </Link>
              <Link href="/paver-sealing" className="block text-gray-600 hover:text-[#0068B3] py-1 pl-4 text-sm" onClick={() => setMobileMenuOpen(false)}>
                → Paver Cleaning & Sealing
              </Link>
              <Link href="/driveway-washing" className="block text-gray-600 hover:text-[#0068B3] py-1 pl-4 text-sm" onClick={() => setMobileMenuOpen(false)}>
                → Driveway Washing
              </Link>
            </div>

            {/* Mobile Commercial Section */}
            <div className="border-t pt-2">
              <span className="text-xs text-gray-500 uppercase tracking-wide">Commercial</span>
              <Link href="/commercial" className="block text-gray-700 hover:text-[#0068B3] font-medium py-2 pl-2" onClick={() => setMobileMenuOpen(false)}>
                All Commercial Services
              </Link>
              <Link href="/commercial-hoa" className="block text-gray-600 hover:text-[#0068B3] py-1 pl-4 text-sm" onClick={() => setMobileMenuOpen(false)}>
                → HOA & Property Management
              </Link>
              <Link href="/dumpster-pad-cleaning" className="block text-gray-600 hover:text-[#0068B3] py-1 pl-4 text-sm" onClick={() => setMobileMenuOpen(false)}>
                → Dumpster Pad Cleaning
              </Link>
              <Link href="/parking-lot-cleaning" className="block text-gray-600 hover:text-[#0068B3] py-1 pl-4 text-sm" onClick={() => setMobileMenuOpen(false)}>
                → Parking Lot Cleaning
              </Link>
            </div>

            <div className="border-t pt-2">
              <Link href="/about" className="block text-gray-700 hover:text-[#0068B3] font-medium py-2" onClick={() => setMobileMenuOpen(false)}>
                About Us
              </Link>
            </div>

            <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="mt-2">
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
