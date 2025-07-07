'use client'

import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import Image from 'next/image'

const products = [
  {
    name: 'PulseRing',
    description: 'The smart ring that tracks your health metrics 24/7.',
    image: 'https://images.unsplash.com/photo-1614285457768-646f65ca8548?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    buttonText: 'Learn More',
    buttonVariant: 'primary',
    bgColor: 'from-purple-500/20 to-indigo-500/20',
  },
  {
    name: 'Health App',
    description: 'Comprehensive health dashboard for all your metrics.',
    image: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    buttonText: 'Download',
    buttonVariant: 'accent',
    bgColor: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    name: 'Sleep Analysis',
    description: 'Advanced sleep tracking and optimization tools.',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
    buttonText: 'Explore',
    buttonVariant: 'primary',
    bgColor: 'from-indigo-500/20 to-blue-500/20',
  },
  {
    name: 'Nutrition Tracker',
    description: 'Track your nutrition and get personalized recommendations.',
    image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    buttonText: 'Get Started',
    buttonVariant: 'accent',
    bgColor: 'from-green-500/20 to-emerald-500/20',
  },
]

export function HealthEcosystem() {
  return (
    <section id="products" className="py-16 md:py-24 bg-[#0a0a0f]">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Complete Health Ecosystem
          </h2>
          <p className="text-white/70 text-lg">
            PulseRing is part of a comprehensive health ecosystem designed to
            help you live your healthiest life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product) => (
            <div
              key={product.name}
              className="relative overflow-hidden rounded-2xl border border-white/10 group hover:border-[#8b5cf6]/50 transition-all duration-300"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${product.bgColor} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
              ></div>
              <div className="relative p-6 flex flex-col h-full">
                <div className="aspect-[16/9] relative rounded-xl overflow-hidden mb-6">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {product.name}
                </h3>
                <p className="text-white/70 mb-6 flex-grow">
                  {product.description}
                </p>
                <Button variant={product.buttonVariant as any}>
                  {product.buttonText}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
} 