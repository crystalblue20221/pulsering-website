'use client'

import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Play } from 'lucide-react'
import Image from 'next/image'

export function Hero() {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-[#1a1a2e] to-[#0a0a0f]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3 space-y-6">
            <div className="inline-flex items-center rounded-full bg-[#8b5cf6]/20 px-3 py-1 text-sm text-[#8b5cf6]">
              <span className="font-medium">Next-Gen Wearable</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
              Your Health, Right at Hand—No Bulky Watches Required
            </h1>
            
            <p className="text-lg text-white/80 max-w-2xl">
              Meet PulseRing, the sleek ring that tracks your health and keeps you connected—discreetly.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-2">
              <Button size="lg">Shop Now</Button>
              <Button variant="outline" size="lg" className="gap-2">
                <Play className="h-4 w-4" />
                See How It Works
              </Button>
            </div>
            
            <div className="flex items-center pt-4">
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-indigo-600 border-2 border-[#1a1a2e] flex items-center justify-center text-xs text-white font-medium"
                  >
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
                <div className="w-8 h-8 rounded-full bg-[#8b5cf6] border-2 border-[#1a1a2e] flex items-center justify-center text-xs text-white">
                  +
                </div>
              </div>
              <span className="ml-4 text-sm text-white/70">
                from 10k+ happy users
              </span>
            </div>
          </div>
          
          <div className="lg:col-span-2 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#8b5cf6]/30 to-[#3b82f6]/30 rounded-3xl blur-3xl opacity-30"></div>
            <div className="relative bg-gradient-to-tr from-[#1a1a2e] to-[#0a0a0f] p-4 rounded-3xl border border-white/10 shadow-xl">
              <div className="aspect-[4/5] relative rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1614285457768-646f65ca8548?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                  alt="Hand wearing PulseRing"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
} 