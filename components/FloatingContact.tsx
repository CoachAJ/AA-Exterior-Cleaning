'use client'

import { Phone, MessageCircle } from 'lucide-react'

export default function FloatingContact() {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-3 md:hidden">
      {/* Text Us Button */}
      <a
        href="sms:9047673233?body=Hi! I'm interested in a free quote for exterior cleaning services."
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110"
        aria-label="Text Us"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
      
      {/* Call Button */}
      <a
        href="tel:9047673233"
        className="bg-[#0068B3] hover:bg-[#005a9c] text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110"
        aria-label="Call Us"
      >
        <Phone className="h-6 w-6" />
      </a>
    </div>
  )
}
