'use client'

import { useState, FormEvent } from 'react'
import { Button } from './ui/button'

interface NetlifyFormProps {
  service: string
  type?: 'residential' | 'commercial'
  children?: React.ReactNode
}

export default function NetlifyForm({ service, type = 'residential' }: NetlifyFormProps) {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('submitting')

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString(),
      })

      if (response.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="text-center py-8">
        <div className="text-green-500 text-5xl mb-4">✓</div>
        <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
        <p className="text-gray-600">We'll contact you within 24 hours.</p>
      </div>
    )
  }

  return (
    <form 
      name="contact" 
      method="POST" 
      data-netlify="true" 
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit} 
      className="space-y-4"
    >
      <input type="hidden" name="form-name" value="contact" />
      <input type="hidden" name="service" value={service} />
      <input type="hidden" name="type" value={type} />
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

      {type === 'commercial' && (
        <div>
          <label htmlFor="company" className="block text-sm font-semibold mb-1">Company Name</label>
          <input 
            type="text" 
            id="company" 
            name="company"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0068B3] focus:border-transparent"
            placeholder="Your company"
          />
        </div>
      )}
      
      <Button 
        type="submit" 
        size="lg" 
        className="w-full bg-[#0068B3] hover:bg-[#005a9c] text-lg py-6 h-auto font-bold"
        disabled={status === 'submitting'}
      >
        {status === 'submitting' ? 'Sending...' : 'Request Free Quote'}
      </Button>
      
      {status === 'error' && (
        <p className="text-red-500 text-sm text-center">
          Something went wrong. Please call us at (904) 767-3233.
        </p>
      )}
      
      <p className="text-xs text-gray-500 text-center">
        We'll contact you within 24 hours
      </p>
    </form>
  )
}
