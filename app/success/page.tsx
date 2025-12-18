import Link from 'next/link'
import type { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { CheckCircle, Phone, Home } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Thank You | AA\'s Exterior Cleaning',
  description: 'Thank you for contacting AA\'s Exterior Cleaning. We will respond to your inquiry within 24 hours.',
}

export default function SuccessPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="flex-1 flex items-center justify-center py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-6 flex justify-center">
              <div className="bg-green-100 rounded-full p-6">
                <CheckCircle className="h-16 w-16 text-green-600" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Thank You for Your Request!
            </h1>
            
            <p className="text-xl text-gray-700 mb-4">
              We've received your quote request and will get back to you within 24 hours.
            </p>
            
            <p className="text-lg text-gray-600 mb-8">
              One of our exterior cleaning specialists will review your information and provide you with a detailed estimate for your project.
            </p>

            <div className="bg-[#0068B3] text-white rounded-lg p-6 mb-8">
              <p className="font-bold text-lg mb-2">Need Immediate Assistance?</p>
              <p className="mb-4">Call us now for same-day quotes:</p>
              <a href="tel:9047673233" className="text-2xl font-bold hover:underline">
                (904) 767-3233
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/">
                <Button size="lg" className="bg-[#0068B3] hover:bg-[#005a9c]">
                  <Home className="mr-2 h-5 w-5" />
                  Return to Homepage
                </Button>
              </Link>
              <a href="tel:9047673233">
                <Button size="lg" variant="outline" className="border-2 border-[#0068B3] text-[#0068B3] hover:bg-[#0068B3] hover:text-white">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </Button>
              </a>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <h2 className="text-2xl font-bold mb-4">What Happens Next?</h2>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div>
                  <div className="bg-[#0068B3] text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mb-3">
                    1
                  </div>
                  <h3 className="font-bold mb-2">Review</h3>
                  <p className="text-sm text-gray-600">
                    We review your project details and property information.
                  </p>
                </div>
                <div>
                  <div className="bg-[#0068B3] text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mb-3">
                    2
                  </div>
                  <h3 className="font-bold mb-2">Contact</h3>
                  <p className="text-sm text-gray-600">
                    A specialist reaches out within 24 hours with your custom quote.
                  </p>
                </div>
                <div>
                  <div className="bg-[#0068B3] text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mb-3">
                    3
                  </div>
                  <h3 className="font-bold mb-2">Schedule</h3>
                  <p className="text-sm text-gray-600">
                    We schedule your service at a time that works best for you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
