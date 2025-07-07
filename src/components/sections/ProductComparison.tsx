'use client'

import { Container } from '@/components/ui/Container'
import { Check, X } from 'lucide-react'
import Image from 'next/image'

const products = [
  {
    name: 'PulseRing',
    image: 'https://images.unsplash.com/photo-1614285457768-646f65ca8548?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    price: '$199',
    highlighted: true,
    features: {
      'Sleep Tracking': { value: 'Advanced', icon: Check },
      'Heart Rate Monitoring': { value: 'Continuous', icon: Check },
      'Battery Life': { value: '5+ days', icon: Check },
      'Water Resistance': { value: '100m', icon: Check },
      'Form Factor': { value: 'Ring', icon: Check },
      'Comfort': { value: 'Excellent', icon: Check },
      'Notifications': { value: 'Subtle vibration', icon: Check },
      'App Ecosystem': { value: 'iOS & Android', icon: Check },
    },
  },
  {
    name: 'Smart Watch X',
    image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80',
    price: '$349',
    highlighted: false,
    features: {
      'Sleep Tracking': { value: 'Basic', icon: Check },
      'Heart Rate Monitoring': { value: 'Periodic', icon: Check },
      'Battery Life': { value: '1-2 days', icon: X },
      'Water Resistance': { value: '50m', icon: Check },
      'Form Factor': { value: 'Watch', icon: X },
      'Comfort': { value: 'Moderate', icon: X },
      'Notifications': { value: 'Screen & vibration', icon: Check },
      'App Ecosystem': { value: 'iOS & Android', icon: Check },
    },
  },
  {
    name: 'Fitness Band Pro',
    image: 'https://images.unsplash.com/photo-1576243345690-4e4b79b63288?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    price: '$129',
    highlighted: false,
    features: {
      'Sleep Tracking': { value: 'Basic', icon: Check },
      'Heart Rate Monitoring': { value: 'Continuous', icon: Check },
      'Battery Life': { value: '3-4 days', icon: Check },
      'Water Resistance': { value: '30m', icon: Check },
      'Form Factor': { value: 'Band', icon: X },
      'Comfort': { value: 'Good', icon: Check },
      'Notifications': { value: 'Screen & vibration', icon: Check },
      'App Ecosystem': { value: 'Limited', icon: X },
    },
  },
]

export function ProductComparison() {
  return (
    <section className="py-16 md:py-24 bg-[#0a0a0f]">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            How PulseRing Compares
          </h2>
          <p className="text-white/70 text-lg">
            See how PulseRing stacks up against other popular health wearables
            on the market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.name}
              className={`bg-[#1a1a2e] rounded-2xl border ${
                product.highlighted
                  ? 'border-[#8b5cf6] shadow-lg shadow-[#8b5cf6]/20'
                  : 'border-white/10'
              } overflow-hidden transition-all duration-300 hover:transform hover:scale-[1.02]`}
            >
              <div className="aspect-[4/3] relative">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
                {product.highlighted && (
                  <div className="absolute top-4 right-4 bg-[#8b5cf6] text-white text-xs font-bold px-3 py-1 rounded-full">
                    RECOMMENDED
                  </div>
                )}
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3
                    className={`text-xl font-bold ${
                      product.highlighted ? 'text-[#8b5cf6]' : 'text-white'
                    }`}
                  >
                    {product.name}
                  </h3>
                  <span
                    className={`font-bold ${
                      product.highlighted ? 'text-[#8b5cf6]' : 'text-white'
                    }`}
                  >
                    {product.price}
                  </span>
                </div>
                <div className="space-y-3">
                  {Object.entries(product.features).map(([feature, details]) => (
                    <div
                      key={feature}
                      className="flex items-center justify-between"
                    >
                      <span className="text-white/70">{feature}</span>
                      <div className="flex items-center">
                        {details.icon === Check ? (
                          <Check
                            className={`h-4 w-4 mr-2 ${
                              product.highlighted
                                ? 'text-[#8b5cf6]'
                                : 'text-green-500'
                            }`}
                          />
                        ) : (
                          <X className="h-4 w-4 mr-2 text-red-500" />
                        )}
                        <span
                          className={
                            details.icon === Check
                              ? 'text-white'
                              : 'text-white/50'
                          }
                        >
                          {details.value}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-4 border-t border-white/10">
                  <button
                    className={`w-full py-2 rounded-lg font-medium ${
                      product.highlighted
                        ? 'bg-[#8b5cf6] text-white hover:bg-[#7c3aed]'
                        : 'bg-white/10 text-white hover:bg-white/20'
                    } transition-colors`}
                  >
                    {product.highlighted ? 'Pre-Order Now' : 'Learn More'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-white/70">
            * Comparison based on publicly available information as of{' '}
            {new Date().toLocaleDateString('en-US', {
              month: 'long',
              year: 'numeric',
            })}
          </p>
        </div>
      </Container>
    </section>
  )
} 