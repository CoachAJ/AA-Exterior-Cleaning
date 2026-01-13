import Link from 'next/link'
import type { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { 
  CheckCircle, 
  Shield, 
  Phone,
  AlertTriangle,
  Clock,
  FileCheck,
  Leaf,
  Star,
  ThermometerSun
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Dumpster Pad Cleaning & Sanitization Jacksonville FL | Health Code Compliant | AA\'s Exterior Cleaning',
  description: 'Professional dumpster pad cleaning and sanitization in Jacksonville, FL. Health code compliant, EPA approved. Hot water sanitization, odor elimination. Licensed FL #L25000489655. Call (904) 767-3233.',
  keywords: [
    'dumpster pad cleaning jacksonville',
    'dumpster pad sanitization service',
    'commercial dumpster area cleaning',
    'dumpster pad pressure washing',
    'restaurant dumpster cleaning jacksonville',
    'health code compliant dumpster cleaning',
    'dumpster enclosure cleaning',
    'grease trap area cleaning'
  ],
  openGraph: {
    title: 'Dumpster Pad Cleaning & Sanitization Jacksonville FL | AA\'s Exterior Cleaning',
    description: 'Health code compliant dumpster pad cleaning. Hot water sanitization, odor elimination. Licensed & insured.',
    type: 'website',
  }
}

export default function DumpsterPadCleaningPage() {
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
                Dumpster Pad Cleaning & Sanitization
              </h1>
              
              <p className="text-2xl md:text-3xl font-semibold mb-4 text-yellow-300">
                Health Code Compliant Commercial Cleaning
              </p>
              
              <p className="text-xl mb-8 text-blue-50">
                Keep your business compliant with professional dumpster pad sanitization. Hot water cleaning (230°F), odor elimination, and proper wastewater disposal. Essential for restaurants, grocery stores, and commercial properties.
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
                    Request Commercial Quote
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
                  <FileCheck className="h-6 w-6 mx-auto mb-1 text-green-300" />
                  <span className="text-xs font-semibold">EPA Compliant</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                  <ThermometerSun className="h-6 w-6 mx-auto mb-1 text-red-300" />
                  <span className="text-xs font-semibold">230°F Hot Water</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                  <Clock className="h-6 w-6 mx-auto mb-1 text-yellow-300" />
                  <span className="text-xs font-semibold">24/7 Available</span>
                </div>
              </div>
            </div>

            {/* Right - Quick Quote Form */}
            <div className="bg-white rounded-2xl shadow-2xl p-8 text-gray-900">
              <h2 className="text-2xl font-bold mb-2 text-center">Get a Commercial Quote</h2>
              <p className="text-gray-600 text-center mb-6">Recurring service plans available</p>
              
              <form action="/api/contact" method="POST" className="space-y-4">
                <input type="hidden" name="service" value="Dumpster Pad Cleaning" />
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
                  <label htmlFor="company" className="block text-sm font-semibold mb-1">Business Name *</label>
                  <input 
                    type="text" 
                    id="company" 
                    name="company" 
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0068B3] focus:border-transparent"
                    placeholder="Your business name"
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
                  <label htmlFor="email" className="block text-sm font-semibold mb-1">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0068B3] focus:border-transparent"
                    placeholder="you@business.com"
                  />
                </div>
                <div>
                  <label htmlFor="frequency" className="block text-sm font-semibold mb-1">Service Frequency</label>
                  <select 
                    id="frequency" 
                    name="frequency"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0068B3] focus:border-transparent"
                  >
                    <option value="one-time">One-Time Service</option>
                    <option value="weekly">Weekly</option>
                    <option value="bi-weekly">Bi-Weekly</option>
                    <option value="monthly">Monthly</option>
                    <option value="quarterly">Quarterly</option>
                  </select>
                </div>
                <Button type="submit" size="lg" className="w-full bg-[#0068B3] hover:bg-[#005a9c] text-lg py-6 h-auto font-bold">
                  Request Quote
                </Button>
                <p className="text-xs text-gray-500 text-center">
                  We'll contact you within 24 hours
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Warning Section */}
      <section className="py-12 bg-red-50 border-y-4 border-red-400">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <AlertTriangle className="h-12 w-12 text-red-600 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold text-red-800 mb-2">
                  Health Code Compliance is Critical
                </h2>
                <p className="text-red-700 mb-4">
                  Dirty dumpster pads are a <strong>leading cause of health code violations</strong> for restaurants and food service businesses. Inspectors look for:
                </p>
                <ul className="grid md:grid-cols-2 gap-2 text-red-700">
                  <li className="flex items-center gap-2">
                    <span className="text-red-500">⚠️</span>
                    Grease and food waste buildup
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-red-500">⚠️</span>
                    Pest and rodent attraction
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-red-500">⚠️</span>
                    Foul odors and bacteria growth
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-red-500">⚠️</span>
                    Improper wastewater runoff
                  </li>
                </ul>
                <p className="mt-4 text-red-800 font-semibold">
                  Regular professional cleaning keeps you compliant and protects your business reputation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Professional Sanitization Process
              </h2>
              <p className="text-xl text-gray-700">
                Complete cleaning that eliminates health hazards and keeps you compliant
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6 text-center relative">
                <div className="bg-[#0068B3] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="font-bold mb-2">Pre-Treatment</h3>
                <p className="text-sm text-gray-600">Industrial degreasers break down grease, oil, and organic waste buildup</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 text-center relative">
                <div className="bg-[#0068B3] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="font-bold mb-2">Hot Water Blast</h3>
                <p className="text-sm text-gray-600">230°F hot water at 5000 PSI kills bacteria and removes stubborn stains</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 text-center relative">
                <div className="bg-[#0068B3] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="font-bold mb-2">Sanitization</h3>
                <p className="text-sm text-gray-600">EPA-approved sanitizers eliminate remaining bacteria and pathogens</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 text-center relative">
                <div className="bg-[#0068B3] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  4
                </div>
                <h3 className="font-bold mb-2">Deodorizing</h3>
                <p className="text-sm text-gray-600">Commercial deodorizers neutralize odors at the source</p>
              </div>
            </div>

            <div className="mt-12 bg-green-50 border-2 border-green-400 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <Leaf className="h-8 w-8 text-green-600 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-green-800 mb-2">EPA Compliant Wastewater Handling</h3>
                  <p className="text-green-700">
                    We use proper containment and disposal methods for all wastewater. Our process meets EPA and Clean Water Act requirements, protecting local waterways and keeping your business compliant with environmental regulations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Benefits of Professional Dumpster Pad Cleaning
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-[#0068B3]">
                <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <FileCheck className="h-7 w-7 text-[#0068B3]" />
                </div>
                <h3 className="text-xl font-bold mb-2">Pass Health Inspections</h3>
                <p className="text-gray-600">Regular cleaning ensures your dumpster area meets health department standards and avoids costly violations.</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-[#0068B3]">
                <div className="bg-green-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">🐀</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Pest Prevention</h3>
                <p className="text-gray-600">Eliminate food residue that attracts rats, roaches, flies, and other pests to your property.</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-[#0068B3]">
                <div className="bg-purple-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">👃</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Odor Elimination</h3>
                <p className="text-gray-600">Remove foul smells that can affect customers, employees, and neighboring businesses.</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-[#0068B3]">
                <div className="bg-yellow-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">🏢</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Professional Image</h3>
                <p className="text-gray-600">A clean dumpster area reflects positively on your entire business and attention to detail.</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-[#0068B3]">
                <div className="bg-red-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">🦠</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Bacteria Elimination</h3>
                <p className="text-gray-600">Hot water sanitization kills harmful bacteria including E. coli, Salmonella, and Listeria.</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-[#0068B3]">
                <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">⚖️</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Liability Protection</h3>
                <p className="text-gray-600">Reduce slip-and-fall risks from grease buildup and protect against contamination claims.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Industries We Serve
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="text-4xl mb-3">🍽️</div>
                <h3 className="font-bold mb-2">Restaurants</h3>
                <p className="text-sm text-gray-600">Fast food, casual dining, fine dining, food trucks</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="text-4xl mb-3">🛒</div>
                <h3 className="font-bold mb-2">Grocery Stores</h3>
                <p className="text-sm text-gray-600">Supermarkets, specialty food stores, butcher shops</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="text-4xl mb-3">🏨</div>
                <h3 className="font-bold mb-2">Hotels & Hospitality</h3>
                <p className="text-sm text-gray-600">Hotels, resorts, event venues, catering facilities</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="text-4xl mb-3">🏥</div>
                <h3 className="font-bold mb-2">Healthcare</h3>
                <p className="text-sm text-gray-600">Hospitals, clinics, nursing homes, medical offices</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="text-4xl mb-3">🏫</div>
                <h3 className="font-bold mb-2">Schools & Universities</h3>
                <p className="text-sm text-gray-600">Cafeterias, dormitories, campus facilities</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="text-4xl mb-3">🏢</div>
                <h3 className="font-bold mb-2">Office Buildings</h3>
                <p className="text-sm text-gray-600">Corporate campuses, business parks, mixed-use</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="text-4xl mb-3">🛍️</div>
                <h3 className="font-bold mb-2">Retail Centers</h3>
                <p className="text-sm text-gray-600">Shopping malls, strip centers, outlet stores</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="text-4xl mb-3">🏘️</div>
                <h3 className="font-bold mb-2">Multi-Family</h3>
                <p className="text-sm text-gray-600">Apartments, condos, HOA communities</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Plans */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Recurring Service Plans
              </h2>
              <p className="text-xl text-gray-700">
                Stay compliant with scheduled maintenance—save money with recurring service
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                <h3 className="text-2xl font-bold mb-2">Weekly</h3>
                <p className="text-gray-600 mb-4">High-volume food service</p>
                <ul className="text-left space-y-2 text-gray-700 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Best for restaurants</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Maximum compliance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Highest discount rate</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#0068B3] text-white rounded-xl shadow-xl p-8 text-center transform scale-105">
                <div className="bg-yellow-400 text-gray-900 text-xs font-bold px-3 py-1 rounded-full inline-block mb-2">
                  MOST POPULAR
                </div>
                <h3 className="text-2xl font-bold mb-2">Bi-Weekly</h3>
                <p className="text-blue-100 mb-4">Standard food service</p>
                <ul className="text-left space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-200 mt-0.5 flex-shrink-0" />
                    <span>Ideal for most businesses</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-200 mt-0.5 flex-shrink-0" />
                    <span>Consistent cleanliness</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-200 mt-0.5 flex-shrink-0" />
                    <span>Cost-effective pricing</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                <h3 className="text-2xl font-bold mb-2">Monthly</h3>
                <p className="text-gray-600 mb-4">Lower-volume locations</p>
                <ul className="text-left space-y-2 text-gray-700 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Retail & office buildings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Maintains compliance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Budget-friendly option</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 md:py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Why Businesses Trust AA's Exterior Cleaning
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
              <h3 className="text-xl font-bold mb-2">EPA Compliant</h3>
              <p className="text-gray-400">
                Proper wastewater containment and disposal
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#0068B3] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-2">24/7 Availability</h3>
              <p className="text-gray-400">
                After-hours service to minimize business disruption
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#0068B3] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-2">100% Guarantee</h3>
              <p className="text-gray-400">
                Satisfaction guaranteed on every service
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
              We provide professional dumpster pad cleaning services throughout Duval County and surrounding areas.
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
            Keep Your Business Compliant
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Don't risk health code violations. Get a quote for professional dumpster pad cleaning and sanitization today.
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
                Request Commercial Quote
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
