'use client'

import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'

export function CTA() {
  return (
    <section className="py-16 md:py-24 bg-[#0a0a0f]">
      <Container>
        <div className="relative overflow-hidden rounded-3xl">
          <div className="absolute inset-0 bg-gradient-to-r from-[#8b5cf6] to-[#3b82f6] opacity-90"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557682250-f4b38c167b4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1129&q=80')] bg-cover bg-center mix-blend-overlay"></div>
          <div className="relative py-12 px-6 md:py-16 md:px-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Start Tracking Your Health Today
            </h2>
            <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
              Join thousands of health-conscious individuals who have already
              transformed their wellness journey with PulseRing.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" variant="accent">
                Pre-Order Now
              </Button>
              <Button size="lg" variant="ghost">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
} 