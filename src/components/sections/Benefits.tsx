'use client'

import { Container } from '@/components/ui/Container'
import { Battery, Clock, Shield, Smile } from 'lucide-react'

const benefits = [
  {
    title: 'Long Battery Life',
    description: 'Enjoy 5+ days of continuous use on a single charge, so you can focus on your health, not charging your device.',
    icon: Battery,
    color: 'bg-gradient-to-br from-green-500 to-emerald-600',
  },
  {
    title: 'Discreet Design',
    description: 'The sleek, minimalist design looks like a stylish ring, not a tech gadget, making it perfect for all occasions.',
    icon: Smile,
    color: 'bg-gradient-to-br from-purple-500 to-indigo-600',
  },
  {
    title: '24/7 Monitoring',
    description: 'Continuous health tracking provides a complete picture of your well-being, day and night.',
    icon: Clock,
    color: 'bg-gradient-to-br from-blue-500 to-cyan-600',
  },
  {
    title: 'Data Privacy',
    description: 'Your health data is encrypted and secure. You control who has access to your information.',
    icon: Shield,
    color: 'bg-gradient-to-br from-red-500 to-pink-600',
  },
]

export function Benefits() {
  return (
    <section className="py-16 md:py-24 bg-[#0a0a0f]">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Why Choose PulseRing
          </h2>
          <p className="text-white/70 text-lg">
            PulseRing offers unique advantages that set it apart from traditional
            wearables, making it the smart choice for health-conscious individuals.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="bg-[#1a1a2e] rounded-2xl p-6 border border-white/10 hover:border-[#8b5cf6]/50 transition-all duration-300 h-full"
            >
              <div
                className={`${benefit.color} w-12 h-12 rounded-xl flex items-center justify-center mb-4`}
              >
                <benefit.icon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {benefit.title}
              </h3>
              <p className="text-white/70">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 bg-[#1a1a2e] rounded-2xl border border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Designed for Everyday Life
              </h3>
              <p className="text-white/70 mb-6">
                PulseRing is water-resistant, durable, and comfortable enough to
                wear 24/7. Whether you're working out, sleeping, or attending a
                business meeting, PulseRing seamlessly integrates into your lifestyle.
              </p>
              <ul className="space-y-2">
                {[
                  'Water-resistant up to 100m',
                  'Scratch-resistant titanium construction',
                  'Lightweight design (4-6 grams)',
                  'Available in multiple sizes and finishes',
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-white/70">
                    <span className="mr-2 text-[#8b5cf6]">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-[#8b5cf6]/20 to-[#3b82f6]/20 p-8 rounded-xl">
              <blockquote className="text-white/90 italic">
                "PulseRing has revolutionized how we think about wearable health
                technology. Its combination of elegant design and powerful health
                insights makes it a game-changer in the industry."
              </blockquote>
              <div className="mt-4 flex items-center">
                <div className="h-0.5 w-8 bg-[#8b5cf6] mr-3"></div>
                <p className="text-white font-medium">
                  Health Tech Magazine
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
} 