import Link from 'next/link'
import { Phone, Mail, MapPin, Shield } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              AA&apos;s Exterior Cleaning
            </h3>
            <p className="text-gray-400 mb-4">
              Jacksonville's premier exterior cleaning specialists. Licensed, insured, and committed to excellence.
            </p>
            <div className="flex items-center gap-2 text-[#3CAADF]">
              <Shield className="h-5 w-5" />
              <span className="text-sm">FL Lic #L25000489655</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/residential" className="hover:text-white transition-colors">Residential Cleaning</Link></li>
              <li><Link href="/residential#roof-cleaning" className="hover:text-white transition-colors">Roof Cleaning</Link></li>
              <li><Link href="/residential#house-washing" className="hover:text-white transition-colors">House Washing</Link></li>
              <li><Link href="/residential#driveway-cleaning" className="hover:text-white transition-colors">Driveway Cleaning</Link></li>
              <li><Link href="/commercial" className="hover:text-white transition-colors">Commercial Services</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start gap-2">
                <Phone className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <a href="tel:9047045962" className="hover:text-white transition-colors">
                  (904) 704-5962
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <a href="mailto:info@aaexteriorcleaning.com" className="hover:text-white transition-colors break-all">
                  info@aaexteriorcleaning.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>Serving Jacksonville & Duval County, Northeast Florida</span>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Business Hours</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex justify-between">
                <span>Monday - Friday:</span>
                <span>7:00 AM - 7:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday:</span>
                <span>8:00 AM - 5:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday:</span>
                <span>Closed</span>
              </li>
              <li className="mt-4 text-sm">
                <span className="text-[#3CAADF] font-semibold">24/7 availability</span> for commercial clients
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} AA's Exterior Cleaning. All rights reserved.
          </p>
          <div className="flex gap-4 text-gray-400 text-sm">
            <span>EPA Compliant</span>
            <span>•</span>
            <span>Eco-Friendly Solutions</span>
            <span>•</span>
            <span>Satisfaction Guaranteed</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
