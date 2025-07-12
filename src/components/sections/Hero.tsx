'use client'

import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Play } from 'lucide-react'
import Image from 'next/image'

export function Hero() {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-[#1a1a2e] to-[#0a0a0f]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center">
          <div className="space-y-12">
            <div className="inline-flex items-center rounded-full bg-[#8b5cf6]/20 px-3 py-1 text-sm text-[#8b5cf6]">
              <span className="font-medium">Sleep Apnea Detection</span>
            </div>
            
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tighter leading-none font-satoshi">
                Sleep Apnea Detection <span className="text-[#8b5cf6]">+</span> No Monthly Fees <span className="text-[#8b5cf6]">=</span> <br />
                Peace of Mind
              </h1>
              <p className="text-lg lg:text-xl font-medium tracking-tight text-white/90 font-montserrat">
                Meet PulseRing, the sleek ring that detects sleep apnea patterns and provides actionable insights—all with no recurring fees.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 pt-6">
              <Button size="lg" className="text-lg px-8 py-6">Shop Now</Button>
              <Button variant="outline" size="lg" className="gap-2 text-lg px-8 py-6">
                <Play className="h-5 w-5" />
                See How It Works
              </Button>
            </div>
            
            <div className="flex items-center pt-4">
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-indigo-600 border-2 border-[#1a1a2e] flex items-center justify-center text-xs text-white font-medium"
                  >
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
                <div className="w-10 h-10 rounded-full bg-[#8b5cf6] border-2 border-[#1a1a2e] flex items-center justify-center text-xs text-white">
                  +
                </div>
              </div>
              <span className="ml-4 text-base text-white/70">
                from 10k+ happy users
              </span>
            </div>
          </div>
          
          <div className="flex justify-center items-center">
            <div className="relative w-full md:w-[500px] lg:w-[600px] mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#8b5cf6]/30 to-[#3b82f6]/30 rounded-xl blur-xl opacity-30 -m-4"></div>
              <div className="relative overflow-hidden rounded-xl shadow-2xl border border-white/10">
                <div className="aspect-[5/4] relative">
                  <Image
                    src="https://images.unsplash.com/photo-1614285457768-646f65ca8548?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80"
                    alt="Hand wearing PulseRing"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 500px, 600px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
} 
