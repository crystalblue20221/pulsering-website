'use client'

import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Mail, MapPin, MessageSquare, Phone } from 'lucide-react'
import { useState } from 'react'

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    content: '+1 (800) 123-4567',
    href: 'tel:+18001234567',
  },
  {
    icon: Mail,
    title: 'Email',
    content: 'support@pulsering.com',
    href: 'mailto:support@pulsering.com',
  },
  {
    icon: MapPin,
    title: 'Office',
    content: '123 Health Tech Blvd, San Francisco, CA 94103',
    href: 'https://maps.google.com',
  },
  {
    icon: MessageSquare,
    title: 'Live Chat',
    content: 'Available 24/7',
    href: '#',
  },
]

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      // In a real implementation, this would call an API endpoint
      // For now, we'll just simulate a successful submission
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setIsSuccess(true)
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      })
    } catch (err) {
      setError('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-[#0a0a0f]">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Contact Us
          </h2>
          <p className="text-white/70 text-lg">
            Have questions about PulseRing? Our team is here to help. Reach out
            to us through any of the channels below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {isSuccess ? (
              <div className="bg-[#1a1a2e] rounded-2xl p-8 border border-white/10 flex flex-col items-center justify-center min-h-[400px]">
                <div className="w-16 h-16 bg-[#8b5cf6]/20 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-8 h-8 text-[#8b5cf6]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Message Sent!
                </h3>
                <p className="text-white/70 text-center max-w-md mb-6">
                  Thank you for reaching out. Our team will get back to you
                  within 24 hours.
                </p>
                <Button
                  variant="outline"
                  onClick={() => setIsSuccess(false)}
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-[#1a1a2e] rounded-2xl p-8 border border-white/10"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-white mb-2"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#8b5cf6] focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-white mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#8b5cf6] focus:border-transparent"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-white mb-2"
                  >
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#8b5cf6] focus:border-transparent"
                  >
                    <option value="" disabled className="bg-[#1a1a2e]">
                      Select a subject
                    </option>
                    <option value="pre-order" className="bg-[#1a1a2e]">
                      Pre-order Inquiry
                    </option>
                    <option value="support" className="bg-[#1a1a2e]">
                      Technical Support
                    </option>
                    <option value="partnership" className="bg-[#1a1a2e]">
                      Partnership Opportunity
                    </option>
                    <option value="press" className="bg-[#1a1a2e]">
                      Press Inquiry
                    </option>
                    <option value="other" className="bg-[#1a1a2e]">
                      Other
                    </option>
                  </select>
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-white mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#8b5cf6] focus:border-transparent"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                {error && <p className="text-red-400 mb-4">{error}</p>}
                <Button
                  type="submit"
                  variant="primary"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            )}
          </div>
          <div>
            <div className="bg-[#1a1a2e] rounded-2xl p-8 border border-white/10 h-full">
              <h3 className="text-xl font-semibold text-white mb-6 pb-2 border-b border-white/10">
                Get in Touch
              </h3>
              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <a
                    key={item.title}
                    href={item.href}
                    className="flex items-start hover:bg-white/5 p-2 rounded-lg transition-colors"
                  >
                    <div className="bg-[#8b5cf6]/20 p-2 rounded-lg mr-4">
                      <item.icon className="h-5 w-5 text-[#8b5cf6]" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium">{item.title}</h4>
                      <p className="text-white/70">{item.content}</p>
                    </div>
                  </a>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-white/10">
                <h4 className="text-white font-medium mb-4">Business Hours</h4>
                <div className="space-y-2 text-white/70">
                  <p>Monday - Friday: 9AM - 6PM PST</p>
                  <p>Saturday: 10AM - 4PM PST</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
} 
