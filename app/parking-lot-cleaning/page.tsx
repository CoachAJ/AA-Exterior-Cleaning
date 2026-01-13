import Link from 'next/link'
import type { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import NetlifyForm from '@/components/NetlifyForm'
import { 
  CheckCircle, 
  Shield, 
  Phone,
  Clock,
  FileCheck,
  Leaf,
  Star,
  ThermometerSun,
  Truck
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Parking Lot Cleaning Jacksonville FL | Commercial Pressure Washing | AA\'s Exterior Cleaning',
  description: 'Professional parking lot cleaning and pressure washing in Jacksonville, FL. Remove oil stains, gum, tire marks. EPA compliant, hot water systems. Licensed FL #L25000489655. Call (904) 767-3233.',
  keywords: [
    'parking lot cleaning jacksonville',
    'parking lot pressure washing',
    'commercial parking lot cleaning',
    'parking garage cleaning jacksonville',
    'concrete cleaning jacksonville fl',
    'oil stain removal parking lot',
    'gum removal service',
    'parking lot maintenance jacksonville'
  ],
  openGraph: {
    title: 'Parking Lot Cleaning Jacksonville FL | AA\'s Exterior Cleaning',
    description: 'Professional parking lot cleaning. Remove oil, gum, tire marks. Licensed & insured. Free estimates.',
    type: 'website',
  }
}

export default function ParkingLotCleaningPage() {
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
                Parking Lot Cleaning in Jacksonville
              </h1>
              
              <p className="text-2xl md:text-3xl font-semibold mb-4 text-yellow-300">
                First Impressions Start in the Parking Lot
              </p>
              
              <p className="text-xl mb-8 text-blue-50">
                Professional parking lot and concrete cleaning that removes oil stains, gum, tire marks, and years of buildup. High-pressure hot water systems for superior results. EPA compliant with proper wastewater handling.
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
                  <ThermometerSun className="h-6 w-6 mx-auto mb-1 text-red-300" />
                  <span className="text-xs font-semibold">5000 PSI + Hot Water</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                  <FileCheck className="h-6 w-6 mx-auto mb-1 text-green-300" />
                  <span className="text-xs font-semibold">EPA Compliant</span>
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
              <p className="text-gray-600 text-center mb-6">Free property assessment</p>
              <NetlifyForm service="Parking Lot Cleaning" type="commercial" />
            </div>
          </div>
        </div>
      </section>

      {/* What We Remove Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                What We Remove From Your Parking Lot
              </h2>
              <p className="text-xl text-gray-700">
                Our high-pressure hot water systems tackle the toughest stains and buildup
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="bg-gray-800 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                  🛢️
                </div>
                <h3 className="font-bold mb-2">Oil & Grease</h3>
                <p className="text-sm text-gray-600">Vehicle leaks, hydraulic fluid, transmission fluid</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="bg-pink-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                  🫧
                </div>
                <h3 className="font-bold mb-2">Gum & Adhesives</h3>
                <p className="text-sm text-gray-600">Chewing gum, stickers, tape residue</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="bg-gray-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                  🚗
                </div>
                <h3 className="font-bold mb-2">Tire Marks</h3>
                <p className="text-sm text-gray-600">Rubber deposits, skid marks, burnouts</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                  🦠
                </div>
                <h3 className="font-bold mb-2">Algae & Mold</h3>
                <p className="text-sm text-gray-600">Slippery growth, mildew, organic stains</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="bg-orange-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                  🦀
                </div>
                <h3 className="font-bold mb-2">Rust Stains</h3>
                <p className="text-sm text-gray-600">Metal oxidation, sprinkler stains, iron deposits</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="bg-amber-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                  🍂
                </div>
                <h3 className="font-bold mb-2">Organic Debris</h3>
                <p className="text-sm text-gray-600">Leaves, tree sap, pollen, bird droppings</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="bg-yellow-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                  ⛽
                </div>
                <h3 className="font-bold mb-2">Fuel Spills</h3>
                <p className="text-sm text-gray-600">Gasoline, diesel, antifreeze stains</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="bg-brown-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl" style={{backgroundColor: '#8B4513'}}>
                  🧱
                </div>
                <h3 className="font-bold mb-2">General Grime</h3>
                <p className="text-sm text-gray-600">Dirt, dust, pollution, years of buildup</p>
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
              Why Clean Parking Lots Matter
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-[#0068B3]">
                <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">👋</span>
                </div>
                <h3 className="text-xl font-bold mb-2">First Impressions</h3>
                <p className="text-gray-600">Your parking lot is the first thing customers see. A clean lot signals a well-managed, professional business.</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-[#0068B3]">
                <div className="bg-yellow-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">⚠️</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Safety & Liability</h3>
                <p className="text-gray-600">Remove slippery algae, oil, and debris that cause slip-and-fall accidents. Reduce your liability exposure.</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-[#0068B3]">
                <div className="bg-green-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">🛡️</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Pavement Protection</h3>
                <p className="text-gray-600">Oil and chemicals break down asphalt and concrete. Regular cleaning extends pavement life and prevents costly repairs.</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-[#0068B3]">
                <div className="bg-purple-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">🏆</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Competitive Advantage</h3>
                <p className="text-gray-600">Stand out from competitors with a pristine parking area. Customers notice and appreciate the difference.</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-[#0068B3]">
                <div className="bg-red-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">📋</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Compliance</h3>
                <p className="text-gray-600">Meet property management requirements, franchise standards, and local ordinances for property maintenance.</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-[#0068B3]">
                <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">💰</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Property Value</h3>
                <p className="text-gray-600">Well-maintained parking areas increase overall property value and attract quality tenants.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Equipment */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Commercial-Grade Equipment
              </h2>
              <p className="text-xl text-gray-700">
                We use professional equipment designed for large-scale commercial cleaning
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                <ThermometerSun className="h-12 w-12 text-red-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Hot Water Systems</h3>
                <p className="text-3xl font-bold text-[#0068B3] mb-2">230°F</p>
                <p className="text-gray-600">Hot water cuts through grease and oil far more effectively than cold water alone</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                <Truck className="h-12 w-12 text-[#0068B3] mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">High Pressure</h3>
                <p className="text-3xl font-bold text-[#0068B3] mb-2">5000 PSI</p>
                <p className="text-gray-600">Industrial-strength pressure for the toughest stains and years of buildup</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                <Leaf className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Water Reclamation</h3>
                <p className="text-3xl font-bold text-[#0068B3] mb-2">EPA</p>
                <p className="text-gray-600">Proper containment and disposal of wastewater when required by regulations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Properties We Serve */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Properties We Serve
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="text-4xl mb-3">🛍️</div>
                <h3 className="font-bold mb-2">Retail Centers</h3>
                <p className="text-sm text-gray-600">Shopping malls, strip centers, outlet stores</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="text-4xl mb-3">🏢</div>
                <h3 className="font-bold mb-2">Office Buildings</h3>
                <p className="text-sm text-gray-600">Corporate campuses, business parks</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="text-4xl mb-3">🍽️</div>
                <h3 className="font-bold mb-2">Restaurants</h3>
                <p className="text-sm text-gray-600">Fast food, casual dining, drive-thrus</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="text-4xl mb-3">⛽</div>
                <h3 className="font-bold mb-2">Gas Stations</h3>
                <p className="text-sm text-gray-600">Fuel islands, convenience stores</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="text-4xl mb-3">🏨</div>
                <h3 className="font-bold mb-2">Hotels</h3>
                <p className="text-sm text-gray-600">Hotels, motels, resorts</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="text-4xl mb-3">🏥</div>
                <h3 className="font-bold mb-2">Healthcare</h3>
                <p className="text-sm text-gray-600">Hospitals, clinics, medical offices</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="text-4xl mb-3">🏘️</div>
                <h3 className="font-bold mb-2">Multi-Family</h3>
                <p className="text-sm text-gray-600">Apartments, condos, HOAs</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="text-4xl mb-3">🏭</div>
                <h3 className="font-bold mb-2">Industrial</h3>
                <p className="text-sm text-gray-600">Warehouses, distribution centers</p>
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
                Maintenance Programs
              </h2>
              <p className="text-xl text-gray-700">
                Keep your parking lot consistently clean with scheduled service
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                <h3 className="text-2xl font-bold mb-2">Monthly</h3>
                <p className="text-gray-600 mb-4">High-traffic properties</p>
                <ul className="text-left space-y-2 text-gray-700 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Retail & restaurant lots</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Maximum discount rates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Priority scheduling</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#0068B3] text-white rounded-xl shadow-xl p-8 text-center transform scale-105">
                <div className="bg-yellow-400 text-gray-900 text-xs font-bold px-3 py-1 rounded-full inline-block mb-2">
                  MOST POPULAR
                </div>
                <h3 className="text-2xl font-bold mb-2">Quarterly</h3>
                <p className="text-blue-100 mb-4">Standard commercial</p>
                <ul className="text-left space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-200 mt-0.5 flex-shrink-0" />
                    <span>Ideal for most properties</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-200 mt-0.5 flex-shrink-0" />
                    <span>Seasonal deep cleaning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-200 mt-0.5 flex-shrink-0" />
                    <span>Cost-effective pricing</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                <h3 className="text-2xl font-bold mb-2">Bi-Annual</h3>
                <p className="text-gray-600 mb-4">Lower-traffic lots</p>
                <ul className="text-left space-y-2 text-gray-700 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Office buildings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Spring & fall cleaning</span>
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
                Proper wastewater handling and disposal
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
              We provide professional parking lot cleaning services throughout Duval County and surrounding areas.
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
            Ready to Transform Your Parking Lot?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get a free property assessment and commercial quote. See the difference professional cleaning makes.
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
