'use server'

export async function submitContactForm(formData: FormData) {
  const data = {
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    serviceType: formData.get('serviceType'),
    propertyType: formData.get('propertyType'),
    message: formData.get('message'),
  }

  // In production, you would send this to your email service
  // For now, we'll just log it and redirect
  console.log('Form submission:', data)

  // You can integrate with email services like:
  // - SendGrid
  // - AWS SES
  // - Resend
  // - etc.

  // For now, just return success
  return { success: true }
}
