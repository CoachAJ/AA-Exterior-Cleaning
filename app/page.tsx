import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { 
  Droplets, 
  Home, 
  Building2, 
  Shield, 
  CheckCircle, 
  Phone, 
  Award,
  Leaf,
  Clock
} from 'lucide-react'

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0068B3] to-[#3CAADF] text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                The Premier Exterior & Roof Cleaning Specialists in Jacksonville, FL
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-50">
                Professional soft washing and pressure washing services. Licensed, insured, and committed to protecting your property.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-gradient-to-r from-white to-gray-50 text-[#0068B3] hover:from-[#FFB81C] hover:to-[#F58A34] hover:text-white hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-2xl text-lg px-8 py-6 h-auto font-bold animate-pulse">
                    Schedule Your Free Estimate
                  </Button>
                </Link>
                <a href="tel:9047045962">
                  <Button size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6 h-auto">
                    <Phone className="mr-2 h-5 w-5" />
                    (904) 704-5962
                  </Button>
                </a>
              </div>
              <div className="mt-8 flex items-center gap-2">
                <Shield className="h-6 w-6 text-yellow-300" />
                <span className="text-sm">Florida Licensed & Insured | Lic #L25000489655</span>
              </div>
            </div>

            {/* Right Logo */}
            <div className="hidden lg:flex justify-center items-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <Image 
                  src="/logo.png" 
                  alt="AA Exterior Cleaning Logo" 
                  width={240}
                  height={180}
                  priority
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Expert Cleaning Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Serving Jacksonville and Northeast Florida with specialized exterior cleaning solutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Residential */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="bg-[#0068B3] text-white w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Home className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Residential Services</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Soft Wash Roof Cleaning</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>House & Siding Washing</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Driveway & Concrete Cleaning</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Paver Cleaning & Sealing</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Deck & Fence Cleaning</span>
                </li>
              </ul>
              <Link href="/residential">
                <Button className="w-full bg-[#0068B3] hover:bg-[#005a9c]">
                  Learn More
                </Button>
              </Link>
            </div>

            {/* Commercial */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow border-2 border-[#0068B3]">
              <div className="bg-[#0068B3] text-white w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Building2 className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Commercial Services</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Storefront & Building Washing</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Parking Lot Cleaning</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Dumpster Pad Sanitization</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>HOA & Property Management</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>24/7 Flexible Scheduling</span>
                </li>
              </ul>
              <Link href="/commercial">
                <Button className="w-full bg-[#0068B3] hover:bg-[#005a9c]">
                  Learn More
                </Button>
              </Link>
            </div>

            {/* Methods */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="bg-[#0068B3] text-white w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Droplets className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Methods</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Soft Wash Technology</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>High-Pressure Systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Water Reclamation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>EPA Compliant</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Biodegradable Solutions</span>
                </li>
              </ul>
              <Link href="/about">
                <Button className="w-full bg-[#0068B3] hover:bg-[#005a9c]">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Soft Washing vs Pressure Washing */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Understanding Our Cleaning Methods
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-blue-50 rounded-lg p-8 border-2 border-[#0068B3]">
                <h3 className="text-2xl font-bold mb-4 text-[#0068B3]">Soft Washing</h3>
                <p className="text-gray-700 mb-4">
                  Our <strong>soft wash system</strong> uses low pressure combined with specialized, biodegradable cleaning solutions to safely remove algae, mold, mildew, and black streaks.
                </p>
                <p className="text-sm text-gray-600 mb-4"><strong>Best for:</strong></p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Roofs (shingle and tile)</li>
                  <li>• Vinyl and stucco siding</li>
                  <li>• Delicate surfaces</li>
                  <li>• Painted surfaces</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-8 border-2 border-gray-300">
                <h3 className="text-2xl font-bold mb-4">Pressure Washing</h3>
                <p className="text-gray-700 mb-4">
                  Our <strong>high-pressure systems</strong> (up to 5000 PSI and 230°F hot water) effectively remove tough stains, dirt, oil, and grime from hard surfaces.
                </p>
                <p className="text-sm text-gray-600 mb-4"><strong>Best for:</strong></p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Concrete driveways</li>
                  <li>• Parking lots</li>
                  <li>• Pavers and walkways</li>
                  <li>• Hard surface cleaning</li>
                </ul>
              </div>
            </div>

            <div className="bg-green-50 border-2 border-green-600 rounded-lg p-6">
              <p className="text-green-900 font-semibold">
                <Leaf className="inline h-5 w-5 mr-2" />
                We use the right method for each surface to ensure effective cleaning while protecting your property and our environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-16 md:py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Why Choose AA Exterior Cleaning?</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-[#0068B3] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-2">Licensed & Insured</h3>
              <p className="text-gray-400">
                FL Lic #L25000489655. Fully insured with $1M+ liability coverage.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#0068B3] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-2">Certified Technicians</h3>
              <p className="text-gray-400">
                OSHA-compliant, professionally trained cleaning specialists.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#0068B3] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-2">Eco-Friendly</h3>
              <p className="text-gray-400">
                EPA compliant with biodegradable, pet-safe cleaning solutions.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#0068B3] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-2">Satisfaction Guarantee</h3>
              <p className="text-gray-400">
                We stand behind our work with a 100% satisfaction guarantee.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-[#0068B3] to-[#3CAADF] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Restore Your Property's Beauty?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get your free, no-obligation estimate today. Serving Jacksonville and all of Duval County.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-[#0068B3] hover:bg-gray-100 text-lg px-8 py-6 h-auto">
                Get Free Quote
              </Button>
            </Link>
            <a href="tel:9047045962">
              <Button size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6 h-auto">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
