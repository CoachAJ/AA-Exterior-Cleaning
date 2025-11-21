import Link from 'next/link'
import type { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { 
  Home, 
  Droplets, 
  CheckCircle, 
  Shield, 
  Phone,
  Sparkles,
  Trees,
  DoorOpen
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Residential Exterior Cleaning Services | AA\'s Exterior Cleaning Jacksonville',
  description: 'Professional residential soft washing and pressure washing services in Jacksonville, FL. Roof cleaning, house washing, driveway cleaning, and more. Licensed & insured FL #L25000489655.',
  keywords: [
    'house washing jacksonville',
    'roof cleaning jacksonville fl',
    'driveway cleaning',
    'soft wash house cleaning',
    'residential pressure washing',
    'paver cleaning jacksonville',
    'deck cleaning',
    'fence cleaning jacksonville'
  ]
}

export default function ResidentialPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0068B3] to-[#3CAADF] text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <Home className="h-8 w-8" />
              <span className="text-sm font-semibold uppercase tracking-wide">Residential Services</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Residential Soft Washing & Pressure Washing Services in Jacksonville
            </h1>
            <p className="text-xl mb-8 text-blue-50">
              Restore your home's curb appeal and protect your investment with our expert, eco-friendly cleaning solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-[#0068B3] hover:bg-gray-100">
                  Get Free Quote
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

      {/* Roof Cleaning */}
      <section id="roof-cleaning" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Soft Wash Roof Cleaning
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Our <strong>soft wash roof cleaning system</strong> is the safe, manufacturer-recommended method for cleaning shingle and tile roofs. Unlike high-pressure washing that can damage shingles and void warranties, our low-pressure technique effectively removes:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Black Streaks (Gloeocapsa Magma):</strong> Ugly algae that feeds on your shingles</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Mold & Mildew:</strong> Health hazards that spread quickly</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Moss & Lichen:</strong> Root systems that lift and damage shingles</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Dirt & Organic Debris:</strong> Surface buildup that reduces roof lifespan</span>
                </li>
              </ul>
              <div className="bg-blue-50 border-l-4 border-[#0068B3] p-4 mb-6">
                <p className="text-sm font-semibold text-[#0068B3]">
                  <Shield className="inline h-5 w-5 mr-2" />
                  Roof Warranty Protection: Our soft wash method preserves your manufacturer's warranty by using approved, low-pressure cleaning techniques.
                </p>
              </div>
              <Link href="/contact">
                <Button size="lg" className="bg-[#0068B3] hover:bg-[#005a9c]">
                  Schedule Roof Cleaning
                </Button>
              </Link>
            </div>
            <div className="bg-gray-100 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Why Soft Washing?</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">✓ Safe for Your Roof</h4>
                  <p className="text-gray-700">No high pressure to damage shingles or force water under them</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">✓ Long-Lasting Results</h4>
                  <p className="text-gray-700">Kills organisms at the root, preventing rapid regrowth</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">✓ Warranty Approved</h4>
                  <p className="text-gray-700">Recommended by major roofing manufacturers</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">✓ Eco-Friendly</h4>
                  <p className="text-gray-700">Biodegradable solutions safe for landscaping and pets</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* House Washing */}
      <section id="house-washing" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Perfect For:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Sparkles className="h-5 w-5 text-[#0068B3] mt-0.5" />
                    <span><strong>Vinyl Siding:</strong> Gentle removal of dirt, mold, and oxidation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Sparkles className="h-5 w-5 text-[#0068B3] mt-0.5" />
                    <span><strong>Stucco:</strong> Deep cleaning without damage to textured surfaces</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Sparkles className="h-5 w-5 text-[#0068B3] mt-0.5" />
                    <span><strong>Brick & Masonry:</strong> Restoration of original color and appearance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Sparkles className="h-5 w-5 text-[#0068B3] mt-0.5" />
                    <span><strong>Painted Surfaces:</strong> Safe cleaning that won't strip or fade paint</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Sparkles className="h-5 w-5 text-[#0068B3] mt-0.5" />
                    <span><strong>Wood Siding:</strong> Careful treatment to preserve wood integrity</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                House & Siding Washing
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Transform your home's exterior with our professional <strong>soft wash house cleaning service</strong>. We use specialized, low-pressure techniques to safely clean all types of siding without causing damage.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Over time, your home accumulates dirt, mold, mildew, pollen, and environmental pollutants that not only make it look dingy but can also lead to premature deterioration of your siding materials.
              </p>
              <h3 className="text-xl font-bold mb-4">Benefits of Regular House Washing:</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Boosts Curb Appeal:</strong> Dramatically improve your home's appearance</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Protects Your Investment:</strong> Prevent costly siding replacement</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Healthier Environment:</strong> Eliminate mold and allergens</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Increases Property Value:</strong> Essential before selling your home</span>
                </li>
              </ul>
              <Link href="/contact">
                <Button size="lg" className="bg-[#0068B3] hover:bg-[#005a9c]">
                  Get House Washing Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Driveway & Concrete Cleaning */}
      <section id="driveway-cleaning" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Driveway, Sidewalk & Concrete Cleaning
            </h2>
            <p className="text-lg text-gray-700">
              Restore your concrete surfaces to like-new condition with our powerful <strong>pressure washing service</strong>. We use high-pressure systems (up to 5000 PSI) and optional hot water (230°F) to blast away years of buildup.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-[#0068B3]">We Remove:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Oil & Grease Stains</li>
                <li>• Tire Marks</li>
                <li>• Rust Stains</li>
                <li>• Mold & Mildew</li>
                <li>• Gum & Adhesives</li>
                <li>• Dirt & Grime</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-[#0068B3]">Surfaces We Clean:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Driveways</li>
                <li>• Sidewalks & Walkways</li>
                <li>• Patios</li>
                <li>• Pool Decks</li>
                <li>• Garage Floors</li>
                <li>• Concrete Steps</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-[#0068B3]">Key Benefits:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Improved Safety</li>
                <li>• Enhanced Appearance</li>
                <li>• Increased Home Value</li>
                <li>• Prevents Deterioration</li>
                <li>• Eliminates Slippery Algae</li>
                <li>• Long-Lasting Results</li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 border-2 border-yellow-400 rounded-lg p-6 max-w-2xl mx-auto text-center">
            <p className="text-lg font-semibold text-gray-800">
              🚨 <strong>Safety Note:</strong> Dirty concrete can become dangerously slippery due to algae and mold growth. Regular cleaning reduces slip-and-fall hazards for your family and guests.
            </p>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Additional Residential Services
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Paver Cleaning */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Sparkles className="h-6 w-6 text-[#0068B3]" />
                Paver Cleaning & Sealing
              </h3>
              <p className="text-gray-700 mb-4">
                Restore the beauty of your brick pavers and protect them from the elements with our professional cleaning and sealing service.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <span>Pressure washing to remove dirt and stains</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <span>Re-sanding of joints for stability</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <span>Premium sealing for color enhancement</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <span>Protection against weeds, stains, and fading</span>
                </li>
              </ul>
            </div>

            {/* Deck Cleaning */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Trees className="h-6 w-6 text-[#0068B3]" />
                Deck & Fence Cleaning
              </h3>
              <p className="text-gray-700 mb-4">
                Extend the life of your wood and composite decks and fences with our specialized cleaning treatments.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <span>Wood deck restoration and brightening</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <span>Composite deck cleaning (Trex, TimberTech)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <span>Wood and vinyl fence washing</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <span>Mold, mildew, and algae removal</span>
                </li>
              </ul>
            </div>

            {/* Gutter Cleaning */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Droplets className="h-6 w-6 text-[#0068B3]" />
                Gutter Cleaning & Brightening
              </h3>
              <p className="text-gray-700 mb-4">
                Keep your gutters functioning properly and looking great with our comprehensive gutter service.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <span>Interior gutter cleaning (debris removal)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <span>Downspout flushing and clog removal</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <span>Exterior gutter brightening (tiger stripes)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <span>Prevents water damage and foundation issues</span>
                </li>
              </ul>
            </div>

            {/* Window Cleaning */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <DoorOpen className="h-6 w-6 text-[#0068B3]" />
                Window & Screen Cleaning
              </h3>
              <p className="text-gray-700 mb-4">
                Let natural light shine through with our professional window cleaning service.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <span>Interior and exterior window cleaning</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <span>Screen removal, cleaning, and reinstallation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <span>Sill and frame cleaning</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <span>Streak-free, crystal-clear results</span>
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
            Ready to Restore Your Home's Beauty?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get a free, customized quote for your residential exterior cleaning needs. We serve all of Jacksonville and Duval County.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-[#0068B3] hover:bg-gray-100 text-lg px-8 py-6 h-auto">
                Schedule Free Estimate
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
