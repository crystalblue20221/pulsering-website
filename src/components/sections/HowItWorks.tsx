'use client'

import { Container } from '@/components/ui/Container'
import { CheckCircle, Smartphone, Zap } from 'lucide-react'
import Image from 'next/image'

const steps = [
  {
    title: 'Wear Your PulseRing',
    description:
      'Simply wear your PulseRing on any finger. The sleek, comfortable design means you can wear it 24/7, even while sleeping or showering.',
    icon: CheckCircle,
    color: 'bg-gradient-to-br from-purple-500 to-indigo-600',
  },
  {
    title: 'Connect to the App',
    description:
      'Download the PulseRing app and pair your ring via Bluetooth. The setup takes less than 2 minutes, and your ring will automatically sync data throughout the day.',
    icon: Smartphone,
    color: 'bg-gradient-to-br from-blue-500 to-cyan-600',
  },
  {
    title: 'Review Sleep Data',
    description:
      'View your sleep apnea patterns and trends through easy-to-read charts and summaries—no medical claims, just helpful data.',
    icon: Zap,
    color: 'bg-gradient-to-br from-green-500 to-emerald-600',
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-[#0a0a0f]">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            How PulseRing Works
          </h2>
          <p className="text-white/70 text-lg">
            Getting started with PulseRing is simple. Just follow these three
            easy steps to begin tracking your sleep patterns.
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="bg-[#1a1a2e] rounded-2xl p-6 border border-white/10 hover:border-[#8b5cf6]/50 transition-all duration-300 flex flex-col items-center text-center"
              >
                <div
                  className={`${step.color} w-12 h-12 rounded-full flex items-center justify-center mb-4`}
                >
                  <step.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-white/70">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#8b5cf6]/20 to-[#3b82f6]/20 rounded-3xl blur-3xl opacity-30"></div>
          <div className="relative bg-gradient-to-tr from-[#1a1a2e] to-[#0a0a0f] p-6 rounded-3xl border border-white/10 shadow-xl">
            <div className="aspect-video relative rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="PulseRing in action"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
} 
