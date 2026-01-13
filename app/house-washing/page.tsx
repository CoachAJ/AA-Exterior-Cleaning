import Link from 'next/link'
import type { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { 
  CheckCircle, 
  Shield, 
  Phone,
  Home,
  Leaf,
  Award,
  Clock,
  Star,
  Sparkles
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'House Washing Jacksonville FL | Soft Wash Exterior Cleaning | AA\'s Exterior Cleaning',
  description: 'Professional house washing and soft wash exterior cleaning in Jacksonville, FL. Safe for vinyl, stucco, brick & painted surfaces. Licensed FL #L25000489655, $1M+ insured. Free estimates. Call (904) 767-3233.',
  keywords: [
    'house washing jacksonville',
    'pressure wash house jacksonville',
    'soft wash house cleaning jacksonville',
    'exterior house cleaning near me',
    'siding cleaning jacksonville fl',
    'vinyl siding cleaning',
    'stucco cleaning jacksonville',
    'house power washing jacksonville fl'
  ],
  openGraph: {
    title: 'House Washing Jacksonville FL | AA\'s Exterior Cleaning',
    description: 'Professional soft wash house cleaning. Safe for all siding types. Licensed & insured. Free estimates.',
    type: 'website',
  }
}

export default function HouseWashingPage() {
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
                Professional House Washing in Jacksonville
              </h1>
              
              <p className="text-2xl md:text-3xl font-semibold mb-4 text-yellow-300">
                Restore Your Home's Curb Appeal
              </p>
              
              <p className="text-xl mb-8 text-blue-50">
                Our gentle soft wash system safely removes years of dirt, mold, mildew, and algae from your home's exterior without damaging siding, paint, or landscaping. 100% satisfaction guaranteed.
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
              <p className="text-gray-600 text-center mb-6">Transform your home's exterior</p>
              
              <form action="/api/contact" method="POST" className="space-y-4">
                <input type="hidden" name="service" value="House Washing" />
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
                <div>
                  <label htmlFor="homeType" className="block text-sm font-semibold mb-1">Home Type</label>
                  <select 
                    id="homeType" 
                    name="homeType"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0068B3] focus:border-transparent"
                  >
                    <option value="">Select...</option>
                    <option value="single-story">Single Story</option>
                    <option value="two-story">Two Story</option>
                    <option value="three-story">Three Story</option>
                    <option value="townhouse">Townhouse</option>
                    <option value="condo">Condo</option>
                  </select>
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

      {/* Why Soft Wash Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Soft Washing is Better for Your Home
              </h2>
              <p className="text-xl text-gray-700">
                Traditional pressure washing can damage siding, force water behind walls, and strip paint. Our soft wash method is safe and effective.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-[#0068B3]">
                <h3 className="text-2xl font-bold mb-4 text-[#0068B3]">Soft Wash (What We Use)</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Low pressure</strong> won't damage siding</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Biodegradable solutions</strong> kill mold at the root</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Safe for all surfaces</strong> including delicate materials</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Long-lasting results</strong> that prevent regrowth</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Pet & plant safe</strong> eco-friendly formulas</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-100 rounded-xl shadow-lg p-8 border-t-4 border-gray-400">
                <h3 className="text-2xl font-bold mb-4 text-gray-600">High-Pressure Washing (Risky)</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">✗</span>
                    <span>Can damage vinyl, wood, and stucco</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">✗</span>
                    <span>Forces water behind siding causing mold</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">✗</span>
                    <span>Strips paint and damages window seals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">✗</span>
                    <span>Only removes surface dirt temporarily</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">✗</span>
                    <span>Can harm landscaping and plants</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Siding Types We Clean */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Siding Types We Safely Clean
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Home className="h-8 w-8 text-[#0068B3]" />
                </div>
                <h3 className="font-bold mb-2">Vinyl Siding</h3>
                <p className="text-sm text-gray-600">Gentle removal of dirt, mold, and oxidation without warping or damage</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Home className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="font-bold mb-2">Stucco</h3>
                <p className="text-sm text-gray-600">Deep cleaning of textured surfaces without damaging the finish</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Home className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="font-bold mb-2">Brick & Masonry</h3>
                <p className="text-sm text-gray-600">Restoration of original color and removal of efflorescence</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Home className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-bold mb-2">Painted Surfaces</h3>
                <p className="text-sm text-gray-600">Safe cleaning that won't strip, fade, or damage paint</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Home className="h-8 w-8 text-yellow-700" />
                </div>
                <h3 className="font-bold mb-2">Wood Siding</h3>
                <p className="text-sm text-gray-600">Careful treatment that preserves wood integrity and finish</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="bg-gray-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Home className="h-8 w-8 text-gray-600" />
                </div>
                <h3 className="font-bold mb-2">Hardie Board</h3>
                <p className="text-sm text-gray-600">Fiber cement siding cleaned without damage to the surface</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Remove */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              What We Remove From Your Home
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="bg-green-700 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                  🦠
                </div>
                <h3 className="font-bold mb-2">Mold & Mildew</h3>
                <p className="text-sm text-gray-600">Health hazards that thrive in Florida's humidity</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                  🌿
                </div>
                <h3 className="font-bold mb-2">Algae & Green Stains</h3>
                <p className="text-sm text-gray-600">Organic growth that makes your home look neglected</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="bg-amber-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                  🍂
                </div>
                <h3 className="font-bold mb-2">Dirt & Grime</h3>
                <p className="text-sm text-gray-600">Years of accumulated dust, pollen, and pollution</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="bg-gray-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                  🕸️
                </div>
                <h3 className="font-bold mb-2">Cobwebs & Insects</h3>
                <p className="text-sm text-gray-600">Spider webs, wasp nests, and insect residue</p>
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
              Benefits of Professional House Washing
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-[#0068B3]">
                <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <Sparkles className="h-7 w-7 text-[#0068B3]" />
                </div>
                <h3 className="text-xl font-bold mb-2">Boost Curb Appeal</h3>
                <p className="text-gray-600">Dramatically improve your home's appearance. Neighbors will notice the difference immediately.</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-[#0068B3]">
                <div className="bg-green-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">💰</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Increase Property Value</h3>
                <p className="text-gray-600">A clean exterior can increase your home's value by 5-10%. Essential before selling.</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-[#0068B3]">
                <div className="bg-red-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">🏠</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Protect Your Investment</h3>
                <p className="text-gray-600">Prevent costly siding replacement by removing damaging organic growth.</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-[#0068B3]">
                <div className="bg-purple-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">🫁</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Healthier Environment</h3>
                <p className="text-gray-600">Eliminate mold, mildew, and allergens that can affect your family's health.</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-[#0068B3]">
                <div className="bg-yellow-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">🎨</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Prep for Painting</h3>
                <p className="text-gray-600">Clean surfaces ensure better paint adhesion and longer-lasting results.</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-[#0068B3]">
                <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">📋</span>
                </div>
                <h3 className="text-xl font-bold mb-2">HOA Compliance</h3>
                <p className="text-gray-600">Meet neighborhood standards and avoid violation notices.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Complete Exterior Cleaning Package
              </h2>
              <p className="text-xl text-gray-700">
                Add these services to your house washing for a complete home refresh
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="text-3xl mb-3">🏠</div>
                <h3 className="font-bold mb-2">Roof Cleaning</h3>
                <p className="text-sm text-gray-600">Soft wash roof to remove black streaks</p>
                <Link href="/roof-cleaning" className="text-[#0068B3] text-sm font-semibold hover:underline">
                  Learn More →
                </Link>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="text-3xl mb-3">🚗</div>
                <h3 className="font-bold mb-2">Driveway Cleaning</h3>
                <p className="text-sm text-gray-600">Pressure wash concrete and pavers</p>
                <Link href="/residential" className="text-[#0068B3] text-sm font-semibold hover:underline">
                  Learn More →
                </Link>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="text-3xl mb-3">🌿</div>
                <h3 className="font-bold mb-2">Gutter Cleaning</h3>
                <p className="text-sm text-gray-600">Interior cleaning and exterior brightening</p>
                <Link href="/residential" className="text-[#0068B3] text-sm font-semibold hover:underline">
                  Learn More →
                </Link>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="text-3xl mb-3">🪟</div>
                <h3 className="font-bold mb-2">Window Cleaning</h3>
                <p className="text-sm text-gray-600">Crystal-clear windows inside and out</p>
                <Link href="/residential" className="text-[#0068B3] text-sm font-semibold hover:underline">
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 md:py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Why Jacksonville Homeowners Trust Us
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
                Professionally trained technicians
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#0068B3] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-2">Eco-Friendly</h3>
              <p className="text-gray-400">
                Biodegradable, pet-safe solutions
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
              We provide professional house washing services throughout Duval County and surrounding areas.
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
            Ready to Transform Your Home?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get your free, no-obligation estimate today. See the difference professional house washing makes.
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
