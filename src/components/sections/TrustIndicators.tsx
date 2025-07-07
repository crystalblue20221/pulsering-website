'use client'

import { Container } from '@/components/ui/Container'
import { Battery, Brain, Star, Users } from 'lucide-react'

const trustItems = [
  {
    name: '5-Day Battery',
    icon: Battery,
    color: 'text-green-400',
  },
  {
    name: 'Trusted by 10,000+ users',
    icon: Users,
    color: 'text-blue-400',
  },
  {
    name: 'AI Health Insights',
    icon: Brain,
    color: 'text-purple-400',
  },
  {
    name: '4.9/5 rating',
    icon: Star,
    color: 'text-yellow-400',
  },
]

export function TrustIndicators() {
  return (
    <div className="bg-[#1a1a2e]/80 backdrop-blur-md py-3 border-y border-white/10">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {trustItems.map((item) => (
            <div
              key={item.name}
              className="flex items-center justify-center md:justify-start space-x-2"
            >
              <item.icon
                className={`h-4 w-4 ${item.color}`}
                aria-hidden="true"
              />
              <span className="text-xs sm:text-sm text-white/80">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
} 