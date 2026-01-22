import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import NetlifyForm from '@/components/NetlifyForm'
import {
  CheckCircle,
  Shield,
  Phone,
  Leaf,
  Award,
  Clock,
  Star,
  Droplets,
  AlertTriangle,
  Truck,
  Sparkles
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Driveway Washing Jacksonville FL | Concrete Cleaning & Oil Removal | AA\'s Exterior Cleaning',
  description: 'Professional driveway cleaning and concrete power washing in Jacksonville, FL. EPA-compliant water reclamation, oil & rust removal, paver sealing. Prevent slip hazards. Licensed FL #L25000489655, $1M+ insured. Free estimates. Call (904) 767-3233.',
  keywords: [
    'driveway cleaning jacksonville',
    'concrete power washing jacksonville fl',
    'paver sealing and cleaning',
    'oil stain removal driveway',
    'water reclamation pressure washing',
    'eco-friendly driveway wash',
    'slip hazard removal',
    'EPA compliant pressure washing',
    'hot water pressure washing',
    'surface cleaner jacksonville'
  ],
  openGraph: {
    title: 'Driveway Washing Jacksonville FL | AA\'s Exterior Cleaning',
    description: 'Professional driveway & concrete cleaning. EPA-compliant, eco-friendly. Oil & rust removal. Licensed & insured. Free estimates.',
    type: 'website',
  }
}

export default function DrivewayWashingPage() {
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
                Restore Your Curb Appeal: Professional Driveway & Concrete Cleaning
              </h1>

              <p className="text-2xl md:text-3xl font-semibold mb-4 text-yellow-300">
                Jacksonville's Trusted Concrete Experts
              </p>

              <p className="text-xl mb-8 text-blue-50">
                Remove oil, rust, and mold while preventing slip hazards. EPA-compliant, eco-friendly, and satisfaction guaranteed.
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
                    Get Free Instant Quote
                  </Button>
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                  <Shield className="h-6 w-6 mx-auto mb-1 text-yellow-300" />
                  <span className="text-xs font-semibold">Licensed & Insured</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                  <Leaf className="h-6 w-6 mx-auto mb-1 text-green-300" />
                  <span className="text-xs font-semibold">EPA Compliant</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                  <Award className="h-6 w-6 mx-auto mb-1 text-yellow-300" />
                  <span className="text-xs font-semibold">OSHA Certified</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                  <Star className="h-6 w-6 mx-auto mb-1 text-yellow-300" />
                  <span className="text-xs font-semibold">Satisfaction Guarantee</span>
                </div>
              </div>
            </div>

            {/* Right - Quick Quote Form */}
            <div className="bg-white rounded-2xl shadow-2xl p-8 text-gray-900">
              <h2 className="text-2xl font-bold mb-2 text-center">Get Your Free Estimate</h2>
              <p className="text-gray-600 text-center mb-6">Transform your driveway today</p>
              <NetlifyForm service="Driveway Washing" />
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Your Driveway Needs Professional Cleaning
              </h2>
              <p className="text-xl text-gray-700">
                Standard hosing can't remove what's soaked into your concrete
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-red-500">
                <h3 className="text-2xl font-bold mb-4 text-red-600">The Problem</h3>
                <p className="text-gray-700 mb-4">
                  Concrete acts like a sponge, absorbing oil, paint, and grime that standard hosing can't remove.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">✗</span>
                    <span>Mold and mildew create <strong>dangerous slip-and-fall hazards</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">✗</span>
                    <span>Oil stains seep deeper with every rain</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">✗</span>
                    <span>Dirty driveways reduce property value</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">✗</span>
                    <span>DIY pressure washers leave "zebra stripes"</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-[#0068B3]">
                <h3 className="text-2xl font-bold mb-4 text-[#0068B3]">Our Solution</h3>
                <p className="text-gray-700 mb-4">
                  We use industrial surface cleaners and hot water (up to 230°F) to deep clean pores without streaking or damaging the surface.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Surface cleaners</strong> provide even, streak-free cleaning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Hot water (230°F)</strong> dissolves oil and grease</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Specialized degreasers</strong> for tough stains</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Removes slip hazards</strong> for family safety</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before & After Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                See the Difference
              </h2>
              <p className="text-xl text-gray-700">
                Real results from a Jacksonville driveway cleaning
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative">
                <div className="absolute top-4 left-4 bg-red-600 text-white px-4 py-2 rounded-lg font-bold text-sm z-10 shadow-lg">
                  BEFORE
                </div>
                <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-red-200">
                  <Image
                    src="/images/driveway before.PNG"
                    alt="Dirty driveway before professional cleaning - dark stains and mold visible"
                    width={600}
                    height={500}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <p className="text-center mt-4 text-gray-600 text-sm">
                  Accumulated dirt, mold, and stains making the driveway look neglected
                </p>
              </div>

              <div className="relative">
                <div className="absolute top-4 left-4 bg-green-600 text-white px-4 py-2 rounded-lg font-bold text-sm z-10 shadow-lg">
                  AFTER
                </div>
                <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-green-200">
                  <Image
                    src="/images/driveway after.PNG"
                    alt="Clean driveway after professional pressure washing - restored appearance"
                    width={600}
                    height={500}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <p className="text-center mt-4 text-gray-600 text-sm">
                  Restored curb appeal with professional deep cleaning
                </p>
              </div>
            </div>

            <div className="text-center mt-10">
              <Link href="/contact">
                <Button size="lg" className="bg-gradient-to-r from-[#0068B3] to-[#3CAADF] text-white hover:from-[#3CAADF] hover:to-[#0068B3] text-lg px-8 py-6 h-auto font-bold shadow-lg">
                  Get Your Free Estimate
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Offered Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Driveway & Concrete Services
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-[#0068B3]">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Truck className="h-8 w-8 text-[#0068B3]" />
                </div>
                <h3 className="text-xl font-bold mb-3">Concrete & Sidewalks</h3>
                <p className="text-gray-600 mb-4">
                  Deep cleaning to remove gum, dirt, and heavy traffic stains from driveways, sidewalks, and patios.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Removes oil & automotive stains
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Eliminates mold & mildew
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Prevents slip hazards
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-amber-500">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Sparkles className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Paver Cleaning & Sealing</h3>
                <p className="text-gray-600 mb-4">
                  Restore color and stabilize joints to prevent weed growth and erosion. Extend the life of your pavers.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Professional re-sanding
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Premium sealer application
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Stops weed growth
                  </li>
                </ul>
                <Link href="/paver-sealing" className="text-[#0068B3] text-sm font-semibold hover:underline mt-4 block">
                  Learn More About Paver Sealing →
                </Link>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-gray-700">
                <div className="bg-gray-200 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Droplets className="h-8 w-8 text-gray-700" />
                </div>
                <h3 className="text-xl font-bold mb-3">Oil & Rust Removal</h3>
                <p className="text-gray-600 mb-4">
                  Specialized degreasers and treatments for tough automotive stains, rust spots, and battery acid marks.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Industrial degreasers
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Rust neutralizers
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Hot water extraction
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eco-Friendly Practices */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-green-700 to-green-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="bg-green-500 p-3 rounded-full">
                <Leaf className="h-8 w-8 text-white" />
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              Eco-Friendly Cleaning That Protects Your Property & Our Community
            </h2>

            <p className="text-xl text-center mb-8 text-green-100">
              We go beyond just cleaning—we do it the right way.
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-yellow-300">Biodegradable Cleaning Solutions</h3>
                  <p className="text-green-100">
                    We use eco-friendly, biodegradable detergents that are safe for your landscaping, pets, and family. No harsh chemicals that damage your plants or harm the environment.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4 text-yellow-300">Responsible Practices</h3>
                  <p className="text-green-100">
                    Our team is trained in best practices for minimizing environmental impact. We take care to protect storm drains and local waterways from contaminated runoff.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="bg-white/10 rounded-lg p-4">
                <Leaf className="h-8 w-8 mx-auto mb-2 text-green-300" />
                <span className="text-sm font-semibold">Eco-Friendly Detergents</span>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <Shield className="h-8 w-8 mx-auto mb-2 text-green-300" />
                <span className="text-sm font-semibold">Pet & Plant Safe</span>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <Droplets className="h-8 w-8 mx-auto mb-2 text-green-300" />
                <span className="text-sm font-semibold">Responsible Runoff</span>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <Award className="h-8 w-8 mx-auto mb-2 text-green-300" />
                <span className="text-sm font-semibold">Properly Licensed</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12">
              Simple, hassle-free service from start to finish
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-[#0068B3] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-bold mb-3">Schedule</h3>
                <p className="text-gray-600">
                  Request a free estimate online or by phone. We'll provide a detailed quote within 24 hours.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-[#0068B3] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold mb-3">Clean</h3>
                <p className="text-gray-600">
                  We arrive on time with professional-grade equipment and eco-friendly detergents. Most jobs complete in 2-4 hours.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-[#0068B3] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-bold mb-3">Inspect</h3>
                <p className="text-gray-600">
                  You review the work. If you aren't 100% satisfied, we re-clean it for free. That's our guarantee.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center gap-1 mb-6">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="h-8 w-8 text-yellow-500 fill-yellow-500" />
              ))}
            </div>
            <p className="text-xl font-semibold text-gray-700 mb-2">Rated 5.0 Stars by Jacksonville Homeowners</p>

            <div className="bg-white rounded-2xl shadow-lg p-8 mt-8">
              <p className="text-2xl text-gray-700 italic mb-6">
                "Elevated the curb appeal of my business tenfold! The team was professional, on time, and the results speak for themselves. My concrete looks brand new."
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="bg-[#0068B3] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold">
                  JM
                </div>
                <div className="text-left">
                  <p className="font-bold">Jacksonville Business Owner</p>
                  <p className="text-sm text-gray-500">Verified Customer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bundle Services */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Save More with Multi-Service Packages
              </h2>
              <p className="text-xl text-gray-700">
                Bundle driveway cleaning with other services for maximum curb appeal and savings
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="text-3xl mb-3">🏠</div>
                <h3 className="font-bold mb-2">House Washing</h3>
                <p className="text-sm text-gray-600">Complete exterior cleaning</p>
                <Link href="/house-washing" className="text-[#0068B3] text-sm font-semibold hover:underline">
                  Learn More →
                </Link>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="text-3xl mb-3">🏡</div>
                <h3 className="font-bold mb-2">Roof Cleaning</h3>
                <p className="text-sm text-gray-600">Remove black streaks safely</p>
                <Link href="/roof-cleaning" className="text-[#0068B3] text-sm font-semibold hover:underline">
                  Learn More →
                </Link>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="text-3xl mb-3">✨</div>
                <h3 className="font-bold mb-2">Paver Sealing</h3>
                <p className="text-sm text-gray-600">Protect and beautify pavers</p>
                <Link href="/paver-sealing" className="text-[#0068B3] text-sm font-semibold hover:underline">
                  Learn More →
                </Link>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="text-3xl mb-3">🌿</div>
                <h3 className="font-bold mb-2">Gutter Cleaning</h3>
                <p className="text-sm text-gray-600">Interior & exterior cleaning</p>
                <Link href="/residential" className="text-[#0068B3] text-sm font-semibold hover:underline">
                  Learn More →
                </Link>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-lg text-gray-700 font-semibold">
                💰 Ask about our <span className="text-[#0068B3]">Multi-Service Discount</span> when you schedule!
              </p>
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
                Professionally trained technicians
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#0068B3] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-2">EPA Compliant</h3>
              <p className="text-gray-400">
                Water reclamation & eco-friendly solutions
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#0068B3] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-2">100% Guarantee</h3>
              <p className="text-gray-400">
                Not satisfied? We'll re-clean for free
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
              We provide professional driveway and concrete cleaning services throughout Duval County and surrounding areas.
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
            Ready to Transform Your Driveway?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get your free, no-obligation estimate today. See the difference professional driveway cleaning makes.
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
