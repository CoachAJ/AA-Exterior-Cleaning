import type { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Us | AA Exterior Cleaning Jacksonville',
  description: 'Get a free quote for professional exterior cleaning services in Jacksonville, FL. Call (904) 704-5962 or fill out our contact form. Licensed & insured.',
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

              <form 
                name="contact" 
                method="POST" 
                data-netlify="true" 
                netlify-honeypot="bot-field"
                action="/success"
                className="space-y-6"
              >
                {/* Netlify form name - required for form detection */}
                <input type="hidden" name="form-name" value="contact" />
                
                {/* Honeypot field for spam protection */}
                <p className="hidden">
                  <label>
                    Don't fill this out if you're human: <input name="bot-field" />
                  </label>
                </p>

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0068B3] focus:border-transparent"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0068B3] focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0068B3] focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-2">
                      Service Type *
                    </label>
                    <select
                      id="serviceType"
                      name="serviceType"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0068B3] focus:border-transparent"
                    >
                      <option value="">Select a service...</option>
                      <option value="roof-cleaning">Roof Cleaning</option>
                      <option value="house-washing">House Washing</option>
                      <option value="driveway-cleaning">Driveway/Concrete Cleaning</option>
                      <option value="paver-cleaning">Paver Cleaning & Sealing</option>
                      <option value="deck-fence">Deck & Fence Cleaning</option>
                      <option value="gutter-cleaning">Gutter Cleaning</option>
                      <option value="commercial">Commercial Services</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="propertyType" className="block text-sm font-medium text-gray-700 mb-2">
                      Property Type *
                    </label>
                    <select
                      id="propertyType"
                      name="propertyType"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0068B3] focus:border-transparent"
                    >
                      <option value="">Select property type...</option>
                      <option value="residential">Residential</option>
                      <option value="commercial">Commercial</option>
                      <option value="hoa">HOA/Property Management</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Please describe your cleaning needs, property size, and any specific concerns..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0068B3] focus:border-transparent"
                  ></textarea>
                </div>

                <Button type="submit" size="lg" className="w-full bg-[#0068B3] hover:bg-[#005a9c] text-lg py-6">
                  Submit Request
                </Button>
              </form>
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
                    <a href="tel:9047045962" className="text-[#0068B3] text-xl font-semibold hover:underline">
                      (904) 704-5962
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
          <a href="tel:9047045962">
            <Button size="lg" className="bg-[#0068B3] hover:bg-[#005a9c] text-xl px-12 py-8 h-auto">
              <Phone className="mr-3 h-6 w-6" />
              Call (904) 704-5962
            </Button>
          </a>
        </div>
      </section>
    </div>
  )
}
