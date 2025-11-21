import Link from 'next/link'
import type { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { 
  Shield, 
  Award, 
  Leaf, 
  Users, 
  CheckCircle,
  Phone,
  Wrench,
  Target
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us | AA\'s Exterior Cleaning Jacksonville, FL',
  description: 'Learn about AA\'s Exterior Cleaning - Jacksonville\'s trusted exterior cleaning specialists. Licensed FL #L25000489655, insured, OSHA-compliant, and committed to excellence since day one.',
  keywords: [
    'about aa exterior cleaning',
    'licensed pressure washing jacksonville',
    'insured cleaning company',
    'professional exterior cleaning',
    'jacksonville cleaning experts'
  ]
}

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0068B3] to-[#3CAADF] text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Jacksonville's Trusted, Licensed, and Insured Exterior Cleaning Experts
            </h1>
            <p className="text-xl text-blue-50">
              Dedicated to protecting and beautifying your property with professional, compliant cleaning solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Our Commitment to Excellence</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 mb-4">
                At <strong>AA's Exterior Cleaning</strong>, we understand that your property is one of your most valuable investments. Whether it's your home or your business, maintaining its exterior is crucial for preserving its value, enhancing curb appeal, and ensuring a safe environment.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                We specialize in <strong>soft washing and pressure washing services</strong> throughout Jacksonville and Northeast Florida. Our team combines years of expertise with state-of-the-art equipment to deliver results that exceed expectations—every single time.
              </p>
              <p className="text-lg text-gray-700">
                What sets us apart is our unwavering commitment to <strong>compliance, safety, and environmental responsibility</strong>. We don't just clean surfaces; we protect your property, your family, and our shared environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Why Choose AA's Exterior Cleaning?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Licensed & Insured */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="bg-[#0068B3] text-white w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Licensed & Fully Insured</h3>
              <p className="text-gray-700 mb-3">
                <strong>Florida License #L25000489655</strong>
              </p>
              <p className="text-gray-700">
                We carry comprehensive liability insurance exceeding $1 million, meeting the strictest commercial requirements. You're protected, and so is your property.
              </p>
            </div>

            {/* State-of-the-Art Equipment */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="bg-[#0068B3] text-white w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Wrench className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">State-of-the-Art Equipment</h3>
              <p className="text-gray-700">
                Our professional-grade systems include:
              </p>
              <ul className="text-gray-700 space-y-1 text-sm mt-2">
                <li>• 5000 PSI high-pressure systems</li>
                <li>• 230°F hot water capability</li>
                <li>• Low-pressure soft wash systems</li>
                <li>• Water reclamation technology</li>
              </ul>
            </div>

            {/* Certified Technicians */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="bg-[#0068B3] text-white w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Certified Technicians</h3>
              <p className="text-gray-700">
                Our team receives ongoing safety training and maintains OSHA compliance. We're not just experienced—we're professionals who take pride in our craft.
              </p>
            </div>

            {/* Eco-Friendly */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="bg-[#0068B3] text-white w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Leaf className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Eco-Friendly Solutions</h3>
              <p className="text-gray-700">
                We use EPA-compliant, biodegradable cleaning solutions that are safe for your family, pets, and landscaping. Protecting the environment is part of our mission.
              </p>
            </div>

            {/* Customer Focused */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="bg-[#0068B3] text-white w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Customer-Focused Service</h3>
              <p className="text-gray-700">
                From your first call to project completion, we prioritize clear communication, punctuality, and your complete satisfaction. Your experience matters to us.
              </p>
            </div>

            {/* Results Guaranteed */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="bg-[#0068B3] text-white w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Target className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">100% Satisfaction Guarantee</h3>
              <p className="text-gray-700">
                We stand behind our work. If you're not completely satisfied with our service, we'll make it right—no excuses, no exceptions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Process</h2>
            
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="bg-[#0068B3] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">
                    1
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Free Consultation & Quote</h3>
                  <p className="text-gray-700">
                    Contact us by phone or through our website. We'll discuss your needs, schedule a site visit if necessary, and provide a detailed, no-obligation quote.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="bg-[#0068B3] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">
                    2
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Custom Solution Design</h3>
                  <p className="text-gray-700">
                    We assess your property and develop a tailored cleaning plan using the appropriate methods—soft washing for delicate surfaces, pressure washing for tough stains.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="bg-[#0068B3] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">
                    3
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Professional Execution</h3>
                  <p className="text-gray-700">
                    Our certified technicians arrive on time with all necessary equipment. We protect your landscaping, complete the work efficiently, and clean up thoroughly.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="bg-[#0068B3] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">
                    4
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Final Walkthrough & Satisfaction</h3>
                  <p className="text-gray-700">
                    We walk through the completed work with you to ensure everything meets your expectations. Your satisfaction is our only measure of success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Proudly Serving Jacksonville & Northeast Florida</h2>
            <p className="text-lg text-gray-700 text-center mb-8">
              We provide professional exterior cleaning services throughout Duval County and the surrounding Jacksonville metropolitan area.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="bg-white rounded-lg p-6 shadow">
                <h3 className="font-bold text-lg mb-2">Jacksonville</h3>
                <p className="text-gray-600 text-sm">All neighborhoods & zip codes</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow">
                <h3 className="font-bold text-lg mb-2">Duval County</h3>
                <p className="text-gray-600 text-sm">Complete coverage</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow">
                <h3 className="font-bold text-lg mb-2">Northeast Florida</h3>
                <p className="text-gray-600 text-sm">Surrounding communities</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-[#0068B3] to-[#3CAADF] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experience the AA's Exterior Cleaning Difference
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied customers who trust us with their most valuable asset.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-[#0068B3] hover:bg-gray-100 text-lg px-8 py-6 h-auto">
                Get Your Free Quote
              </Button>
            </Link>
            <a href="tel:9047045962">
              <Button size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6 h-auto">
                <Phone className="mr-2 h-5 w-5" />
                Call (904) 704-5962
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
