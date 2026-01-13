'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'

export function ContactForm() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const form = e.currentTarget
    const formData = new FormData(form)

    // Encode form data for Netlify
    const encode = (data: Record<string, string>) => {
      return Object.keys(data)
        .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&')
    }

    const data: Record<string, string> = {
      'form-name': 'contact',
    }
    formData.forEach((value, key) => {
      data[key] = value.toString()
    })

    try {
      await fetch('/forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode(data),
      })
      router.push('/success')
    } catch (error) {
      console.error('Form error:', error)
      alert('There was an error. Please call us at (904) 767-3233.')
      setIsSubmitting(false)
    }
  }

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <input type="hidden" name="form-name" value="contact" />
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

      <Button 
        type="submit" 
        size="lg" 
        className="w-full bg-[#0068B3] hover:bg-[#005a9c] text-lg py-6"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Submitting...' : 'Submit Request'}
      </Button>
    </form>
  )
}
