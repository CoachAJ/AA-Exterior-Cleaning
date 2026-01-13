import Link from 'next/link'
import type { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { 
  CheckCircle, 
  Shield, 
  Phone,
  Leaf,
  Award,
  Clock,
  Star
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Soft Wash Roof Cleaning Jacksonville FL | Remove Black Streaks | AA\'s Exterior Cleaning',
  description: 'Professional soft wash roof cleaning in Jacksonville, FL. Safely remove black streaks, algae, mold & mildew. Licensed FL #L25000489655, $1M+ insured. Free estimates. Call (904) 767-3233.',
  keywords: [
    'roof cleaning jacksonville',
    'soft wash roof cleaning jacksonville',
    'roof cleaning jacksonville fl',
    'remove black streaks from roof',
    'professional roof cleaning jacksonville',
    'roof washing jacksonville',
    'tile roof cleaning jacksonville',
    'shingle roof cleaning',
    'no pressure roof wash near me',
    'soft wash roof cleaning near me'
  ],
  openGraph: {
    title: 'Soft Wash Roof Cleaning Jacksonville FL | AA\'s Exterior Cleaning',
    description: 'Professional soft wash roof cleaning. Remove black streaks safely. Licensed & insured. Free estimates.',
    type: 'website',
  }
}

export default function RoofCleaningPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section - Matches Google Ads Headlines */}
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
                Licensed Roof Cleaning in Jacksonville
              </h1>
              
              <p className="text-2xl md:text-3xl font-semibold mb-4 text-yellow-300">
                Remove Black Streaks Safely
              </p>
              
              <p className="text-xl mb-8 text-blue-50">
                Our low-pressure soft wash system removes algae, mold & mildew without damaging your shingles. Extends roof life by years. 100% satisfaction guaranteed.
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
                    Get Free Estimate
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
                  <Leaf className="h-6 w-6 mx-auto mb-1 text-green-300" />
                  <span className="text-xs font-semibold">Eco-Friendly</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                  <Award className="h-6 w-6 mx-auto mb-1 text-yellow-300" />
                  <span className="text-xs font-semibold">OSHA Certified</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                  <Star className="h-6 w-6 mx-auto mb-1 text-yellow-300" />
                  <span className="text-xs font-semibold">100% Guarantee</span>
                </div>
              </div>
            </div>

            {/* Right - Quick Quote Form */}
            <div className="bg-white rounded-2xl shadow-2xl p-8 text-gray-900">
              <h2 className="text-2xl font-bold mb-2 text-center">Get Your Free Estimate</h2>
              <p className="text-gray-600 text-center mb-6">Same-week service available</p>
              
              <form action="/api/contact" method="POST" className="space-y-4">
                <input type="hidden" name="service" value="Roof Cleaning" />
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-1">Name *</label>
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
                    placeholder="you@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="zip" className="block text-sm font-semibold mb-1">ZIP Code *</label>
                  <input 
                    type="text" 
                    id="zip" 
                    name="zip" 
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0068B3] focus:border-transparent"
                    placeholder="32256"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full bg-[#0068B3] hover:bg-[#005a9c] text-lg py-6 h-auto font-bold">
                  Request Free Quote
                </Button>
                <p className="text-xs text-gray-500 text-center">
                  We'll contact you within 24 hours
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Roof Covered in Black Streaks?
              </h2>
              <p className="text-xl text-gray-700">
                Those ugly black streaks on your roof aren't just dirt—they're <strong>Gloeocapsa Magma</strong>, an algae that feeds on your shingles and shortens your roof's lifespan.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 text-red-700">❌ The Problem</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">•</span>
                    <span>Black streaks spread across your roof</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">•</span>
                    <span>Algae, mold & mildew damage shingles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">•</span>
                    <span>Reduces curb appeal & home value</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">•</span>
                    <span>Can lead to premature roof replacement ($20K+)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 text-green-700">✓ Our Solution</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Safe soft wash system—no high pressure</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Kills algae at the root for lasting results</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Restores curb appeal instantly</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Extends roof life by years—saves thousands</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 border-2 border-[#0068B3] rounded-xl p-6 text-center">
              <p className="text-lg font-semibold text-[#0068B3]">
                <Shield className="inline h-5 w-5 mr-2" />
                <strong>Protect Your $20K+ Roof Investment</strong> — Our soft wash method is manufacturer-approved and won't void your warranty.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Soft Wash Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Why Soft Washing is the Safe Choice
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-[#0068B3]">
                <h3 className="text-2xl font-bold mb-4 text-[#0068B3]">Soft Wash (What We Use)</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Low pressure</strong> (like a garden hose)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Biodegradable solutions</strong> kill organisms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Won't damage</strong> shingles or tiles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Manufacturer approved</strong> method</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Long-lasting results</strong> (kills at root)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-100 rounded-xl shadow-lg p-8 border-t-4 border-gray-400">
                <h3 className="text-2xl font-bold mb-4 text-gray-600">Pressure Washing (Risky)</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">✗</span>
                    <span>High pressure damages shingles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">✗</span>
                    <span>Forces water under roofing materials</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">✗</span>
                    <span>Can void manufacturer warranty</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">✗</span>
                    <span>Removes protective granules</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">✗</span>
                    <span>Temporary results (doesn't kill roots)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Clean Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              What We Remove From Your Roof
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="bg-gray-900 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                  🦠
                </div>
                <h3 className="font-bold mb-2">Black Streaks</h3>
                <p className="text-sm text-gray-600">Gloeocapsa Magma algae that feeds on shingles</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="bg-green-700 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                  🍄
                </div>
                <h3 className="font-bold mb-2">Mold & Mildew</h3>
                <p className="text-sm text-gray-600">Health hazards that spread quickly in humidity</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                  🌿
                </div>
                <h3 className="font-bold mb-2">Moss & Lichen</h3>
                <p className="text-sm text-gray-600">Root systems that lift and damage shingles</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="bg-amber-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                  🍂
                </div>
                <h3 className="font-bold mb-2">Dirt & Debris</h3>
                <p className="text-sm text-gray-600">Organic buildup that traps moisture</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Roof Types We Clean</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <h4 className="font-bold">Asphalt Shingles</h4>
                  <p className="text-sm text-gray-600">Most common roof type</p>
                </div>
                <div className="text-center">
                  <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <h4 className="font-bold">Tile Roofs</h4>
                  <p className="text-sm text-gray-600">Clay, concrete & slate</p>
                </div>
                <div className="text-center">
                  <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <h4 className="font-bold">Metal Roofs</h4>
                  <p className="text-sm text-gray-600">Standing seam & panels</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 md:py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Why Jacksonville Trusts AA's Exterior Cleaning
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
                <Award className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-2">OSHA Certified</h3>
              <p className="text-gray-400">
                Professionally trained technicians with safety certification
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#0068B3] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-2">Eco-Friendly</h3>
              <p className="text-gray-400">
                EPA compliant, biodegradable, pet-safe solutions
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#0068B3] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-2">100% Guarantee</h3>
              <p className="text-gray-400">
                Satisfaction guaranteed or we'll make it right
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
              We provide professional roof cleaning services throughout Duval County and surrounding areas.
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
            Ready to Restore Your Roof?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get your free, no-obligation estimate today. Same-week service available.
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
                Schedule Free Estimate
              </Button>
            </Link>
          </div>
          <p className="mt-6 text-blue-100">
            <Clock className="inline h-4 w-4 mr-1" />
            We respond to all inquiries within 24 hours
          </p>
        </div>
      </section>
    </div>
  )
}
