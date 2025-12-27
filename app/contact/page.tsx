import type { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { ContactForm } from '@/components/contact-form'

export const metadata: Metadata = {
  title: 'Contact Us | AA\'s Exterior Cleaning Jacksonville',
  description: 'Get a free quote for professional exterior cleaning services in Jacksonville, FL. Call (904) 767-3233 or fill out our contact form. Licensed & insured.',
  keywords: [
    'contact aa exterior cleaning',
    'free quote jacksonville',
    'pressure washing quote',
    'exterior cleaning estimate',
    'jacksonville cleaning services contact'
  ]
}

export default function ContactPage() {

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0068B3] to-[#3CAADF] text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get Your Free Quote Today
            </h1>
            <p className="text-xl text-blue-50">
              Professional exterior cleaning services in Jacksonville, FL. Licensed, insured, and ready to serve you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Request a Free Estimate</h2>
              <p className="text-gray-700 mb-8">
                Fill out the form below and we'll get back to you within 24 hours with a detailed quote for your project.
              </p>

              <ContactForm />
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="bg-[#0068B3] text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Phone</h3>
                    <a href="tel:9047673233" className="text-[#0068B3] text-xl font-semibold hover:underline">
                      (904) 767-3233
                    </a>
                    <p className="text-gray-600 text-sm mt-1">Available for calls and text messages</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#0068B3] text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Email</h3>
                    <a href="mailto:info@aaexteriorcleaning.com" className="text-[#0068B3] hover:underline break-all">
                      info@aaexteriorcleaning.com
                    </a>
                    <p className="text-gray-600 text-sm mt-1">We respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#0068B3] text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Service Area</h3>
                    <p className="text-gray-700">
                      Jacksonville, FL<br />
                      Duval County<br />
                      Northeast Florida
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#0068B3] text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Business Hours</h3>
                    <div className="text-gray-700 space-y-1">
                      <p><strong>Monday - Friday:</strong> 7:00 AM - 7:00 PM</p>
                      <p><strong>Saturday:</strong> 8:00 AM - 5:00 PM</p>
                      <p><strong>Sunday:</strong> Closed</p>
                      <p className="text-sm text-[#0068B3] font-semibold mt-2">
                        24/7 availability for commercial clients
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* License Badge */}
              <div className="bg-gray-50 rounded-lg p-6 border-2 border-[#0068B3]">
                <h3 className="font-bold text-lg mb-2">Licensed & Insured</h3>
                <p className="text-gray-700 mb-2">
                  Florida License #L25000489655
                </p>
                <p className="text-sm text-gray-600">
                  Fully insured with $1M+ liability coverage. All work is performed by certified, OSHA-compliant technicians.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Prefer to Call Directly?
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Speak with one of our exterior cleaning specialists right now.
          </p>
          <a href="tel:9047673233">
            <Button size="lg" className="bg-[#0068B3] hover:bg-[#005a9c] text-xl px-12 py-8 h-auto">
              <Phone className="mr-3 h-6 w-6" />
              Call (904) 767-3233
            </Button>
          </a>
        </div>
      </section>
    </div>
  )
}
