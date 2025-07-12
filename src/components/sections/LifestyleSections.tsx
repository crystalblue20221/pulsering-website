'use client'

import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import Image from 'next/image'

const lifestyleCategories = [
  {
    title: 'Active Lifestyle',
    description:
      'Monitor your daily movement with automatic detection of walking, running, and step counting. Tracks distance and activity patterns to complement your overall health insights. *Note: Hand movements (typing or cooking) may occasionally affect step accuracy.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    buttonText: 'Learn More',
    buttonVariant: 'primary',
    imagePosition: 'left',
  },
  {
    title: 'Business Professional',
    description:
      'Stay connected and monitor your health discreetly during meetings. PulseRing\'s subtle notifications keep you informed without distractions.',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
    buttonText: 'Discover Features',
    buttonVariant: 'primary',
    imagePosition: 'right',
  },
  {
    title: 'Sleep Optimization',
    description:
      'Comprehensive sleep analysis with focus on breathing patterns and disturbances. Track sleep cycles, heart rate variations, and interruptions to identify potential sleep apnea episodes and optimize your rest quality.',
    image: 'https://images.unsplash.com/photo-1531353826977-0941b4779a1c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    buttonText: 'Sleep Better',
    buttonVariant: 'primary',
    imagePosition: 'left',
  },
  {
    title: 'Family Health Sharing',
    description:
      'Keep loved ones informed with real-time health monitoring. Share heart rate data and sleep patterns remotely with family members, enabling quick response to potential emergencies or health concerns.',
    image: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    buttonText: 'Connect Now',
    buttonVariant: 'primary',
    imagePosition: 'right',
  },
]

export function LifestyleSections() {
  return (
    <section className="py-16 md:py-24 bg-[#0a0a0f]">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            How PulseRing Fits Your Lifestyle
          </h2>
          <p className="text-white/70 text-lg">
            Designed to integrate seamlessly into your daily routine—no matter what your lifestyle looks like.
          </p>
        </div>

        <div className="space-y-24">
          {lifestyleCategories.map((category, index) => (
            <div
              key={category.title}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
            >
              {category.imagePosition === 'left' && (
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#8b5cf6]/20 to-[#3b82f6]/20 rounded-3xl blur-3xl opacity-30"></div>
                  <div className="relative bg-gradient-to-tr from-[#1a1a2e] to-[#0a0a0f] p-4 rounded-3xl border border-white/10 shadow-xl">
                    <div className="aspect-video relative rounded-2xl overflow-hidden">
                      <Image
                        src={category.image}
                        alt={category.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              )}

              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  {category.title}
                </h3>
                <p className="text-white/70 text-lg">
                  {category.description}
                </p>
                <Button variant={category.buttonVariant as any} size="lg">
                  {category.buttonText}
                </Button>
              </div>

              {category.imagePosition === 'right' && (
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#8b5cf6]/20 to-[#3b82f6]/20 rounded-3xl blur-3xl opacity-30"></div>
                  <div className="relative bg-gradient-to-tr from-[#1a1a2e] to-[#0a0a0f] p-4 rounded-3xl border border-white/10 shadow-xl">
                    <div className="aspect-video relative rounded-2xl overflow-hidden">
                      <Image
                        src={category.image}
                        alt={category.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
} 
