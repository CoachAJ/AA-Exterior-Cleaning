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
  Star,
  Droplets
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Paver Cleaning & Sealing Jacksonville FL | Protect Your Investment | AA\'s Exterior Cleaning',
  description: 'Professional paver cleaning and sealing in Jacksonville, FL. Restore color, prevent weeds, protect against stains. Licensed FL #L25000489655, $1M+ insured. Free estimates. Call (904) 767-3233.',
  keywords: [
    'paver sealing jacksonville fl',
    'paver cleaning and sealing near me',
    'driveway paver restoration jacksonville',
    'brick paver sealing service',
    'paver cleaning jacksonville',
    'patio paver sealing',
    'pool deck paver sealing',
    'paver restoration jacksonville fl'
  ],
  openGraph: {
    title: 'Paver Cleaning & Sealing Jacksonville FL | AA\'s Exterior Cleaning',
    description: 'Professional paver cleaning and sealing. Restore color, prevent weeds. Licensed & insured. Free estimates.',
    type: 'website',
  }
}

export default function PaverSealingPage() {
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
                Paver Cleaning & Sealing in Jacksonville
              </h1>
              
              <p className="text-2xl md:text-3xl font-semibold mb-4 text-yellow-300">
                Restore & Protect Your Investment
              </p>
              
              <p className="text-xl mb-8 text-blue-50">
                Professional paver restoration that brings back original color, prevents weed growth, and protects against stains for years. 100% satisfaction guaranteed.
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
                  <span className="text-xs font-semibold">Premium Sealers</span>
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
              <p className="text-gray-600 text-center mb-6">Transform your pavers today</p>
              
              <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" className="space-y-4">
                <input type="hidden" name="form-name" value="contact" />
                <input type="hidden" name="service" value="Paver Cleaning & Sealing" />
                <input type="hidden" name="bot-field" />
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

      {/* Our Process Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Professional Paver Restoration Process
              </h2>
              <p className="text-xl text-gray-700">
                A complete 4-step process that transforms and protects your pavers
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6 text-center relative">
                <div className="bg-[#0068B3] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="font-bold mb-2">Deep Cleaning</h3>
                <p className="text-sm text-gray-600">High-pressure washing removes dirt, algae, mold, and stains from paver surfaces</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 text-center relative">
                <div className="bg-[#0068B3] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="font-bold mb-2">Joint Stabilization</h3>
                <p className="text-sm text-gray-600">Re-sanding of joints with polymeric sand to prevent shifting and weed growth</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 text-center relative">
                <div className="bg-[#0068B3] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="font-bold mb-2">Surface Prep</h3>
                <p className="text-sm text-gray-600">Complete drying and preparation ensures optimal sealer adhesion</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 text-center relative">
                <div className="bg-[#0068B3] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  4
                </div>
                <h3 className="font-bold mb-2">Premium Sealing</h3>
                <p className="text-sm text-gray-600">Application of professional-grade sealer for lasting protection and color enhancement</p>
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
              Why Seal Your Pavers?
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-[#0068B3]">
                <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">🎨</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Color Enhancement</h3>
                <p className="text-gray-600">Brings back the rich, vibrant colors of your pavers. Choose from natural, wet-look, or high-gloss finishes.</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-[#0068B3]">
                <div className="bg-green-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">🌿</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Weed Prevention</h3>
                <p className="text-gray-600">Polymeric sand and sealer work together to prevent weed and grass growth between pavers.</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-[#0068B3]">
                <div className="bg-yellow-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">🛡️</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Stain Protection</h3>
                <p className="text-gray-600">Creates a protective barrier against oil, grease, rust, and other common stains.</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-[#0068B3]">
                <div className="bg-purple-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">☀️</span>
                </div>
                <h3 className="text-xl font-bold mb-2">UV Protection</h3>
                <p className="text-gray-600">Shields pavers from Florida's intense sun, preventing fading and color loss over time.</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-[#0068B3]">
                <div className="bg-red-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">🐜</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Ant Prevention</h3>
                <p className="text-gray-600">Sealed joints discourage ant colonies from building nests between your pavers.</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-[#0068B3]">
                <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">💰</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Property Value</h3>
                <p className="text-gray-600">Well-maintained pavers significantly boost curb appeal and overall property value.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sealer Options */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Choose Your Finish
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="bg-gray-200 h-32 flex items-center justify-center">
                  <span className="text-4xl">🪨</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Natural Matte</h3>
                  <p className="text-gray-600 mb-4">Preserves the original look of your pavers with invisible protection. No shine, just clean.</p>
                  <ul className="text-sm space-y-1 text-gray-600">
                    <li>✓ Invisible finish</li>
                    <li>✓ Natural appearance</li>
                    <li>✓ Full protection</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-[#0068B3]">
                <div className="bg-[#0068B3] text-white text-center py-2 text-sm font-bold">
                  MOST POPULAR
                </div>
                <div className="bg-gray-300 h-32 flex items-center justify-center">
                  <span className="text-4xl">💧</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Wet Look</h3>
                  <p className="text-gray-600 mb-4">Enhances colors with a subtle sheen, like pavers after a fresh rain. Rich and elegant.</p>
                  <ul className="text-sm space-y-1 text-gray-600">
                    <li>✓ Color enhancement</li>
                    <li>✓ Subtle sheen</li>
                    <li>✓ Most requested</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="bg-gray-400 h-32 flex items-center justify-center">
                  <span className="text-4xl">✨</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">High Gloss</h3>
                  <p className="text-gray-600 mb-4">Maximum shine and color pop. Creates a dramatic, polished appearance.</p>
                  <ul className="text-sm space-y-1 text-gray-600">
                    <li>✓ Maximum shine</li>
                    <li>✓ Bold colors</li>
                    <li>✓ Statement look</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Clean */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Surfaces We Clean & Seal
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <Droplets className="h-10 w-10 text-[#0068B3] mx-auto mb-3" />
                <h3 className="font-bold mb-2">Driveways</h3>
                <p className="text-sm text-gray-600">Brick, concrete, and interlocking pavers</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <Droplets className="h-10 w-10 text-[#0068B3] mx-auto mb-3" />
                <h3 className="font-bold mb-2">Pool Decks</h3>
                <p className="text-sm text-gray-600">Non-slip sealers for safety around pools</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <Droplets className="h-10 w-10 text-[#0068B3] mx-auto mb-3" />
                <h3 className="font-bold mb-2">Patios</h3>
                <p className="text-sm text-gray-600">Outdoor living spaces and entertainment areas</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <Droplets className="h-10 w-10 text-[#0068B3] mx-auto mb-3" />
                <h3 className="font-bold mb-2">Walkways</h3>
                <p className="text-sm text-gray-600">Front entries, garden paths, and sidewalks</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 md:py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Why Choose AA's Exterior Cleaning
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
              <h3 className="text-xl font-bold mb-2">Premium Products</h3>
              <p className="text-gray-400">
                Professional-grade sealers for lasting results
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#0068B3] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-2">Eco-Friendly</h3>
              <p className="text-gray-400">
                Safe for landscaping, pets, and the environment
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
              We provide professional paver cleaning and sealing services throughout Duval County and surrounding areas.
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
            Ready to Transform Your Pavers?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get your free, no-obligation estimate today. See the difference professional paver restoration makes.
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
