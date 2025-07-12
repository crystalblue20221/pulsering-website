'use client'

import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Apple, Play, Smartphone } from 'lucide-react'
import Image from 'next/image'

export function DashboardPreview() {
  return (
    <section className="py-16 md:py-24 bg-[#0a0a0f]">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Your Health Dashboard
          </h2>
          <p className="text-white/70 text-lg">
            Get comprehensive insights into your health metrics with our
            intuitive and powerful mobile app, available for iOS and Android.
          </p>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#8b5cf6]/20 to-[#3b82f6]/20 rounded-3xl blur-3xl opacity-30"></div>
          <div className="relative bg-gradient-to-tr from-[#1a1a2e] to-[#0a0a0f] p-6 rounded-3xl border border-white/10 shadow-xl">
            <div className="aspect-video relative rounded-2xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full max-w-4xl">
                  <Image
                    src="https://images.unsplash.com/photo-1551650992-ee4fd47df41f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
                    alt="PulseRing Health Dashboard"
                    width={1074}
                    height={604}
                    className="rounded-lg shadow-2xl"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button
                      className="w-16 h-16 rounded-full bg-[#8b5cf6] flex items-center justify-center hover:bg-[#7c3aed] transition-colors"
                      aria-label="Play video"
                    >
                      <Play className="h-6 w-6 text-white" fill="white" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
          <Button
            variant="primary"
            size="lg"
            className="gap-2 w-full sm:w-auto"
          >
            <Apple className="h-5 w-5" />
            Download for iOS
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="gap-2 w-full sm:w-auto"
          >
            <Smartphone className="h-5 w-5" />
            Download for Android
          </Button>
        </div>
      </Container>
    </section>
  )
} 
