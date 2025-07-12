'use client'

import { Container } from '@/components/ui/Container'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'

const faqs = [
  {
    question: 'How long does the battery last?',
    answer:
      'PulseRing features an industry-leading 5+ day battery life with normal use. A full charge takes approximately 60 minutes, and a quick 10-minute charge provides up to 24 hours of use.',
  },
  {
    question: 'Is PulseRing compatible with my smartphone?',
    answer:
      'Yes, PulseRing is compatible with both iOS (iPhone 8 and newer) and Android (version 8.0 and above) devices. Our app is available for free download on both the App Store and Google Play Store.',
  },
  {
    question: 'How accurate is the health tracking?',
    answer:
      'PulseRing uses medical-grade sensors that provide up to 98% accuracy for heart rate monitoring and 95% accuracy for sleep tracking, making it one of the most accurate consumer health wearables on the market.',
  },
  {
    question: 'Is my health data secure and private?',
    answer:
      'We take your privacy seriously. All health data is encrypted both in transit and at rest. You have complete control over your data, and we never sell your personal information to third parties. Our privacy practices comply with GDPR, CCPA, and HIPAA regulations.',
  },
  {
    question: 'What is the warranty period?',
    answer:
      'PulseRing comes with a standard 1-year limited warranty that covers manufacturing defects. You can also purchase an extended warranty for up to 3 years of additional coverage and protection against accidental damage.',
  },
  {
    question: 'Can PulseRing detect medical emergencies?',
    answer:
      'While PulseRing can detect certain anomalies like irregular heart rhythms and send alerts, it is not a medical device and should not replace professional medical diagnosis or treatment. Always consult with healthcare professionals for medical concerns.',
  },
  {
    question: 'What sizes are available?',
    answer:
      'PulseRing comes in sizes 6-13 (US ring sizes). We offer a free sizing kit before shipping your ring to ensure a perfect fit. The sizing kit includes plastic rings that you can try on to determine your ideal size.',
  },
  {
    question: 'How do I return or exchange my PulseRing?',
    answer:
      'We offer a 30-day satisfaction guarantee. If you\'re not completely satisfied, you can return your PulseRing for a full refund or exchange it for a different size. Simply contact our customer support team to initiate the process.',
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-16 md:py-24 bg-[#0a0a0f]">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-white/70 text-lg">
            Everything you need to know about PulseRing. Can&apos;t find the answer
            you&apos;re looking for? Contact our support team.
          </p>
        </div>

        <div className="max-w-3xl mx-auto divide-y divide-white/10">
          {faqs.map((faq, index) => (
            <div key={index} className="py-6">
              <button
                className="flex w-full items-center justify-between text-left focus:outline-none"
                onClick={() => toggleFaq(index)}
              >
                <h3 className="text-lg font-medium text-white">
                  {faq.question}
                </h3>
                <span className="ml-6 flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-[#8b5cf6]" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-white/70" />
                  )}
                </span>
              </button>
              {openIndex === index && (
                <div className="mt-3 pr-12">
                  <p className="text-white/70">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
} 
