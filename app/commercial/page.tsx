import Link from 'next/link'
import type { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { 
  Building2, 
  CheckCircle, 
  Shield, 
  Phone,
  Truck,
  Clock,
  FileCheck,
  Droplets
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Commercial Exterior Cleaning Services | AA's Exterior Cleaning Jacksonville',
  description: 'Professional, EPA-compliant commercial exterior cleaning in Jacksonville, FL. Storefront washing, parking lot cleaning, dumpster pad sanitization. Licensed & insured. 24/7 availability.',
  keywords: [
    'commercial pressure washing jacksonville',
    'storefront cleaning',
    'parking lot cleaning jacksonville',
    'dumpster pad cleaning',
    'commercial building washing',
    'HOA cleaning services',
    'property management cleaning',
    'gas station cleaning'
  ]
}

export default function CommercialPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0068B3] to-[#3CAADF] text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <Building2 className="h-8 w-8" />
              <span className="text-sm font-semibold uppercase tracking-wide">Commercial Services</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Professional, Compliant Commercial Exterior Cleaning for Northeast Florida
            </h1>
            <p className="text-xl mb-8 text-blue-50">
              Trusted by property managers, HOAs, and businesses throughout Jacksonville. EPA-compliant, fully insured, and available 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-[#0068B3] hover:bg-gray-100">
                  Request Commercial Quote
                </Button>
              </Link>
              <a href="tel:9047045962">
                <Button size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white/10">
                  <Phone className="mr-2 h-5 w-5" />
                  (904) 704-5962
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Shield className="h-16 w-16 text-[#0068B3] mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Compliance is Our Priority
              </h2>
              <p className="text-xl text-gray-700">
                For commercial work, adherence to Federal (EPA/CWA) and local regulations is non-negotiable. We follow Best Management Practices (BMPs) to protect our waterways and your business.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-bold mb-3 text-[#0068B3]">EPA Compliant</h3>
                <p className="text-gray-700">
                  All cleaning operations meet Environmental Protection Agency and Clean Water Act requirements.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-bold mb-3 text-[#0068B3]">Water Reclamation</h3>
                <p className="text-gray-700">
                  Advanced systems to contain, collect, filter, and properly dispose of wastewater when required.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-bold mb-3 text-[#0068B3]">Eco-Friendly Solutions</h3>
                <p className="text-gray-700">
                  Biodegradable cleaning agents safe for the environment, employees, and customers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Commercial Cleaning Services
          </h2>

          <div className="space-y-12 max-w-5xl mx-auto">
            {/* Storefront & Building Washing */}
            <div className="bg-white rounded-lg shadow-xl p-8 border-l-4 border-[#0068B3]">
              <h3 className="text-2xl font-bold mb-4">Storefront & Building Washing</h3>
              <p className="text-gray-700 mb-4">
                First impressions matter. Keep your business looking professional and inviting with our comprehensive building exterior cleaning services.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Services Include:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Multi-story building facades</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Glass storefront cleaning</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Awning and canopy washing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Entryway and door cleaning</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Perfect For:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Retail stores & shopping centers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Office buildings</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Restaurants & hospitality</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Medical facilities</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Parking Lot Cleaning */}
            <div className="bg-white rounded-lg shadow-xl p-8 border-l-4 border-[#0068B3]">
              <h3 className="text-2xl font-bold mb-4">Parking Lot & Walkway Cleaning</h3>
              <p className="text-gray-700 mb-4">
                Clean parking lots enhance customer experience, improve safety, and demonstrate property pride. Our high-pressure hot water systems remove years of buildup.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">We Remove:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Oil, grease, and fuel stains</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Tire marks and rubber deposits</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Gum and adhesive residue</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Mold, mildew, and algae</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Key Benefits:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Enhanced curb appeal</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Improved safety (reduce slips)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Extends pavement life</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Attracts more customers</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Dumpster Pad Cleaning */}
            <div className="bg-white rounded-lg shadow-xl p-8 border-l-4 border-[#0068B3]">
              <h3 className="text-2xl font-bold mb-4">Dumpster Pad Sanitization</h3>
              <div className="bg-yellow-50 border-2 border-yellow-400 rounded-lg p-4 mb-4">
                <p className="text-sm font-semibold text-gray-800">
                  🏥 <strong>Critical for Health & Compliance:</strong> Dumpster pads harbor bacteria, attract pests, and create health code violations. Regular cleaning is essential for food service businesses.
                </p>
              </div>
              <p className="text-gray-700 mb-4">
                Our specialized dumpster pad cleaning service eliminates odors, grease, bacteria, and health hazards while meeting local sanitation regulations.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Our Process:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>High-temperature hot water (230°F)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Industrial degreasers & sanitizers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Wastewater containment & disposal</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Deodorizing treatment</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Essential For:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Restaurants & food service</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Grocery stores & markets</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Shopping centers & malls</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Healthcare facilities</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Additional Commercial Services */}
            <div className="bg-white rounded-lg shadow-xl p-8 border-l-4 border-[#0068B3]">
              <h3 className="text-2xl font-bold mb-4">Additional Commercial Services</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Building2 className="h-5 w-5 text-[#0068B3]" />
                    HOA & Property Management
                  </h4>
                  <p className="text-gray-700 mb-2">
                    Complete exterior maintenance for residential communities and multi-family properties.
                  </p>
                  <ul className="text-sm space-y-1 text-gray-600">
                    <li>• Common area cleaning</li>
                    <li>• Pool deck sanitization</li>
                    <li>• Clubhouse exterior washing</li>
                    <li>• Playground equipment cleaning</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Truck className="h-5 w-5 text-[#0068B3]" />
                    Gas Station & Convenience Stores
                  </h4>
                  <p className="text-gray-700 mb-2">
                    Specialized cleaning for fuel dispensing areas and high-traffic retail locations.
                  </p>
                  <ul className="text-sm space-y-1 text-gray-600">
                    <li>• Pump island & concrete pad cleaning</li>
                    <li>• Fuel spill remediation</li>
                    <li>• Canopy & signage washing</li>
                    <li>• Store entrance maintenance</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Shield className="h-5 w-5 text-[#0068B3]" />
                    Graffiti Removal
                  </h4>
                  <p className="text-gray-700 mb-2">
                    Fast, effective graffiti removal from multiple surface types.
                  </p>
                  <ul className="text-sm space-y-1 text-gray-600">
                    <li>• Brick and concrete surfaces</li>
                    <li>• Metal and painted surfaces</li>
                    <li>• Quick response times</li>
                    <li>• Minimal surface damage</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Droplets className="h-5 w-5 text-[#0068B3]" />
                    Drive-Thru & Service Areas
                  </h4>
                  <p className="text-gray-700 mb-2">
                    Keep high-traffic service areas clean and sanitary.
                  </p>
                  <ul className="text-sm space-y-1 text-gray-600">
                    <li>• Drive-thru lane cleaning</li>
                    <li>• Menu board washing</li>
                    <li>• Loading dock maintenance</li>
                    <li>• Service bay floors</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Why Businesses Choose AA's Exterior Cleaning
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="bg-[#0068B3] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-2">Licensed & Insured</h3>
              <p className="text-gray-400">
                FL Lic #L25000489655. $1M+ liability coverage meets commercial requirements.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#0068B3] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-2">24/7 Availability</h3>
              <p className="text-gray-400">
                Flexible scheduling to minimize disruption to your business operations.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#0068B3] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileCheck className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-2">OSHA Compliant</h3>
              <p className="text-gray-400">
                Certified technicians with ongoing safety and compliance training.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#0068B3] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-2">State-of-the-Art Equipment</h3>
              <p className="text-gray-400">
                5000 PSI systems, 230°F hot water, and water reclamation technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance Plans */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Routine Maintenance Plans
            </h2>
            <p className="text-xl text-gray-700">
              Save money and maintain a consistently clean property with our customized maintenance programs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <h3 className="text-2xl font-bold mb-2">Monthly</h3>
              <p className="text-gray-600 mb-4">Best for high-traffic areas</p>
              <ul className="text-left space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Priority scheduling</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Discounted rates</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Consistent appearance</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#0068B3] text-white rounded-lg shadow-xl p-8 text-center transform scale-105">
              <div className="bg-yellow-400 text-gray-900 text-xs font-bold px-3 py-1 rounded-full inline-block mb-2">
                MOST POPULAR
              </div>
              <h3 className="text-2xl font-bold mb-2">Quarterly</h3>
              <p className="text-blue-100 mb-4">Ideal for most properties</p>
              <ul className="text-left space-y-2">
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
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <h3 className="text-2xl font-bold mb-2">Bi-Annual</h3>
              <p className="text-gray-600 mb-4">For low-traffic properties</p>
              <ul className="text-left space-y-2 text-gray-700">
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
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-[#0068B3] to-[#3CAADF] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Elevate Your Property's Appearance?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get a customized quote for your commercial property. We serve all of Jacksonville and Duval County with professional, reliable service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-[#0068B3] hover:bg-gray-100 text-lg px-8 py-6 h-auto">
                Request Commercial Quote
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
