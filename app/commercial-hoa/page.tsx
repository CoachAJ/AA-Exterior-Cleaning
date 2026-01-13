import Link from 'next/link'
import type { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { 
  CheckCircle, 
  Shield, 
  Phone,
  Building2,
  Clock,
  FileCheck,
  Users,
  Calendar,
  Star
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'HOA & Property Management Exterior Cleaning Jacksonville FL | AA\'s Exterior Cleaning',
  description: 'Professional exterior cleaning for HOAs, property managers & multi-family properties in Jacksonville, FL. Common areas, pool decks, clubhouses. Licensed FL #L25000489655, $1M+ insured. Request a bid.',
  keywords: [
    'HOA pressure washing jacksonville',
    'property management exterior cleaning',
    'condo building washing jacksonville',
    'HOA cleaning services jacksonville fl',
    'apartment complex pressure washing',
    'multi-family property cleaning',
    'community pool deck cleaning',
    'HOA common area maintenance'
  ],
  openGraph: {
    title: 'HOA & Property Management Cleaning Jacksonville FL | AA\'s Exterior Cleaning',
    description: 'Professional exterior cleaning for HOAs and property managers. Licensed & insured. Request a commercial bid.',
    type: 'website',
  }
}

export default function CommercialHOAPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0068B3] to-[#3CAADF] text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <Shield className="h-5 w-5 text-yellow-300" />
                <span className="text-sm font-semibold">Licensed & Insured | FL #L25000489655</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                HOA & Property Management Cleaning Experts
              </h1>
              
              <p className="text-2xl md:text-3xl font-semibold mb-4 text-yellow-300">
                Trusted by Jacksonville Property Managers
              </p>
              
              <p className="text-xl mb-8 text-blue-50">
                Complete exterior maintenance for residential communities, apartment complexes, and multi-family properties. EPA compliant, fully insured, and available for recurring contracts.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a href="tel:9047673233">
                  <Button size="lg" className="bg-gradient-to-r from-[#FFB81C] to-[#F58A34] text-white hover:from-[#F58A34] hover:to-[#FFB81C] text-lg px-8 py-6 h-auto font-bold shadow-lg hover:shadow-xl transition-all">
                    <Phone className="mr-2 h-5 w-5" />
                    Call (904) 767-3233
                  </Button>
                </a>
                <Link href="/contact">
                  <Button size="lg" className="bg-white text-[#0068B3] hover:bg-gray-100 text-lg px-8 py-6 h-auto font-bold">
                    Request Commercial Bid
                  </Button>
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                  <Shield className="h-6 w-6 mx-auto mb-1 text-yellow-300" />
                  <span className="text-xs font-semibold">$1M+ Insured</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                  <Clock className="h-6 w-6 mx-auto mb-1 text-green-300" />
                  <span className="text-xs font-semibold">24/7 Available</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                  <FileCheck className="h-6 w-6 mx-auto mb-1 text-yellow-300" />
                  <span className="text-xs font-semibold">EPA Compliant</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                  <Calendar className="h-6 w-6 mx-auto mb-1 text-yellow-300" />
                  <span className="text-xs font-semibold">Recurring Plans</span>
                </div>
              </div>
            </div>

            {/* Right - Commercial Bid Form */}
            <div className="bg-white rounded-2xl shadow-2xl p-8 text-gray-900">
              <h2 className="text-2xl font-bold mb-2 text-center">Request a Commercial Bid</h2>
              <p className="text-gray-600 text-center mb-6">Free property assessment included</p>
              
              <form action="/api/contact" method="POST" className="space-y-4">
                <input type="hidden" name="service" value="HOA / Property Management" />
                <input type="hidden" name="type" value="commercial" />
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-1">Contact Name *</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0068B3] focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-semibold mb-1">Property/Company Name *</label>
                  <input 
                    type="text" 
                    id="company" 
                    name="company" 
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0068B3] focus:border-transparent"
                    placeholder="HOA or property name"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold mb-1">Phone *</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0068B3] focus:border-transparent"
                    placeholder="(904) 555-1234"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-1">Email *</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0068B3] focus:border-transparent"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-1">Project Details</label>
                  <textarea 
                    id="message" 
                    name="message"
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0068B3] focus:border-transparent"
                    placeholder="Describe your property and cleaning needs..."
                  />
                </div>
                <Button type="submit" size="lg" className="w-full bg-[#0068B3] hover:bg-[#005a9c] text-lg py-6 h-auto font-bold">
                  Request Commercial Bid
                </Button>
                <p className="text-xs text-gray-500 text-center">
                  We'll schedule a free property assessment
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Services for HOA/Property Management */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Complete Property Exterior Maintenance
              </h2>
              <p className="text-xl text-gray-700">
                Everything your community needs to maintain curb appeal and property values
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="bg-[#0068B3] text-white w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Building2 className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">Building Exteriors</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Multi-story building washing</li>
                  <li>• Stucco & siding cleaning</li>
                  <li>• Entryway & breezeway cleaning</li>
                  <li>• Balcony & railing washing</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="bg-[#0068B3] text-white w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <span className="text-xl">🏊</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Pool & Recreation Areas</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Pool deck sanitization</li>
                  <li>• Clubhouse exterior cleaning</li>
                  <li>• Playground equipment washing</li>
                  <li>• Tennis/basketball court cleaning</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="bg-[#0068B3] text-white w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <span className="text-xl">🛣️</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Common Areas</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Sidewalks & walkways</li>
                  <li>• Parking lots & garages</li>
                  <li>• Curbs & gutters</li>
                  <li>• Signage & monuments</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="bg-[#0068B3] text-white w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <span className="text-xl">🏠</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Roof Cleaning</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Soft wash roof cleaning</li>
                  <li>• Black streak removal</li>
                  <li>• Tile & shingle safe methods</li>
                  <li>• Warranty-approved process</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="bg-[#0068B3] text-white w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <span className="text-xl">🗑️</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Dumpster Areas</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Dumpster pad sanitization</li>
                  <li>• Enclosure cleaning</li>
                  <li>• Odor elimination</li>
                  <li>• Health code compliance</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="bg-[#0068B3] text-white w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <span className="text-xl">🚿</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Concrete & Pavers</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Paver cleaning & sealing</li>
                  <li>• Concrete restoration</li>
                  <li>• Oil & stain removal</li>
                  <li>• Gum removal</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Property Managers Choose Us */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Why Property Managers Choose AA's Exterior Cleaning
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-[#0068B3]">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Shield className="h-6 w-6 text-[#0068B3]" />
                  Full Insurance Coverage
                </h3>
                <p className="text-gray-700 mb-4">
                  We carry $1M+ in liability insurance, meeting the requirements of most property management companies and HOA boards.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>✓ Certificate of Insurance available on request</li>
                  <li>✓ Additional insured endorsements</li>
                  <li>✓ Workers' compensation coverage</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-[#0068B3]">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <FileCheck className="h-6 w-6 text-[#0068B3]" />
                  EPA & Regulatory Compliance
                </h3>
                <p className="text-gray-700 mb-4">
                  All work meets EPA and Clean Water Act requirements. We use proper containment and disposal methods.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>✓ Water reclamation when required</li>
                  <li>✓ Biodegradable cleaning solutions</li>
                  <li>✓ Proper wastewater disposal</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-[#0068B3]">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Clock className="h-6 w-6 text-[#0068B3]" />
                  Flexible Scheduling
                </h3>
                <p className="text-gray-700 mb-4">
                  We work around your residents' schedules. Early morning, evening, and weekend availability.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>✓ 24/7 scheduling options</li>
                  <li>✓ Minimal disruption to residents</li>
                  <li>✓ Advance notice coordination</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-[#0068B3]">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Users className="h-6 w-6 text-[#0068B3]" />
                  Dedicated Account Management
                </h3>
                <p className="text-gray-700 mb-4">
                  One point of contact for all your properties. Consistent service and communication.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>✓ Single point of contact</li>
                  <li>✓ Detailed service reports</li>
                  <li>✓ Before/after documentation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance Plans */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Recurring Maintenance Programs
              </h2>
              <p className="text-xl text-gray-700">
                Save money and maintain consistent property appearance with scheduled service
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                <h3 className="text-2xl font-bold mb-2">Monthly</h3>
                <p className="text-gray-600 mb-4">High-traffic communities</p>
                <ul className="text-left space-y-2 text-gray-700 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Priority scheduling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Maximum discount rates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Consistent appearance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Emergency response</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#0068B3] text-white rounded-xl shadow-xl p-8 text-center transform scale-105">
                <div className="bg-yellow-400 text-gray-900 text-xs font-bold px-3 py-1 rounded-full inline-block mb-2">
                  MOST POPULAR
                </div>
                <h3 className="text-2xl font-bold mb-2">Quarterly</h3>
                <p className="text-blue-100 mb-4">Ideal for most properties</p>
                <ul className="text-left space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-200 mt-0.5 flex-shrink-0" />
                    <span>Seasonal deep cleaning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-200 mt-0.5 flex-shrink-0" />
                    <span>Cost-effective pricing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-200 mt-0.5 flex-shrink-0" />
                    <span>Prevents major buildup</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-200 mt-0.5 flex-shrink-0" />
                    <span>Flexible scheduling</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                <h3 className="text-2xl font-bold mb-2">Bi-Annual</h3>
                <p className="text-gray-600 mb-4">Lower-traffic properties</p>
                <ul className="text-left space-y-2 text-gray-700 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Spring & fall cleaning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Budget-friendly option</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Maintains curb appeal</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Annual planning</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Property Types */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Properties We Serve
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="text-4xl mb-3">🏘️</div>
                <h3 className="font-bold mb-2">HOA Communities</h3>
                <p className="text-sm text-gray-600">Single-family & townhome communities</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="text-4xl mb-3">🏢</div>
                <h3 className="font-bold mb-2">Apartment Complexes</h3>
                <p className="text-sm text-gray-600">Multi-family residential properties</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="text-4xl mb-3">🏨</div>
                <h3 className="font-bold mb-2">Condominiums</h3>
                <p className="text-sm text-gray-600">High-rise & low-rise condos</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="text-4xl mb-3">🏡</div>
                <h3 className="font-bold mb-2">Rental Properties</h3>
                <p className="text-sm text-gray-600">Single & multi-unit rentals</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 md:py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            The AA's Exterior Cleaning Advantage
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="bg-[#0068B3] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-2">Licensed & Insured</h3>
              <p className="text-gray-400">
                FL Lic #L25000489655<br />$1M+ liability coverage
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#0068B3] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileCheck className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-2">OSHA Compliant</h3>
              <p className="text-gray-400">
                Certified technicians with ongoing safety training
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#0068B3] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-2">24/7 Availability</h3>
              <p className="text-gray-400">
                Flexible scheduling around your residents
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#0068B3] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-2">100% Guarantee</h3>
              <p className="text-gray-400">
                Satisfaction guaranteed on every project
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Serving Jacksonville & Northeast Florida
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              We provide professional property management cleaning services throughout Duval County and surrounding areas.
            </p>
            <div className="flex flex-wrap justify-center gap-3 text-sm">
              {['Jacksonville', 'Ponte Vedra', 'Nocatee', 'St. Johns', 'Atlantic Beach', 'Neptune Beach', 'Jacksonville Beach', 'Fleming Island', 'Orange Park', 'Mandarin', 'San Marco', 'Riverside'].map((area) => (
                <span key={area} className="bg-gray-100 px-4 py-2 rounded-full">
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-[#0068B3] to-[#3CAADF] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Discuss Your Property's Needs?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Request a free property assessment and commercial bid. We'll create a customized maintenance plan for your community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:9047673233">
              <Button size="lg" className="bg-gradient-to-r from-[#FFB81C] to-[#F58A34] text-white hover:from-[#F58A34] hover:to-[#FFB81C] text-lg px-8 py-6 h-auto font-bold">
                <Phone className="mr-2 h-5 w-5" />
                Call (904) 767-3233
              </Button>
            </a>
            <Link href="/contact">
              <Button size="lg" className="bg-white text-[#0068B3] hover:bg-gray-100 text-lg px-8 py-6 h-auto font-bold">
                Request Commercial Bid
              </Button>
            </Link>
          </div>
          <p className="mt-6 text-blue-100">
            <Clock className="inline h-4 w-4 mr-1" />
            We respond to all commercial inquiries within 24 hours
          </p>
        </div>
      </section>
    </div>
  )
}
