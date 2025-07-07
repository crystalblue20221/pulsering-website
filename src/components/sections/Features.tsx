'use client'

import { Container } from '@/components/ui/Container'
import { Activity, Heart, Moon, Zap } from 'lucide-react'

const features = [
  {
    name: 'Sleep Quality',
    description:
      'Advanced sleep tracking monitors your REM cycles, deep sleep, and overall sleep quality to help you optimize your rest.',
    icon: Moon,
    color: 'bg-gradient-to-br from-purple-500 to-indigo-600',
  },
  {
    name: 'Heart Rate',
    description:
      'Continuous heart rate monitoring with alerts for abnormal patterns and detailed insights about your cardiovascular health.',
    icon: Heart,
    color: 'bg-gradient-to-br from-red-500 to-pink-600',
  },
  {
    name: 'Activity Tracking',
    description:
      'Automatically detects and logs your workouts, steps, calories burned, and provides personalized fitness recommendations.',
    icon: Activity,
    color: 'bg-gradient-to-br from-green-500 to-emerald-600',
  },
  {
    name: 'Health Insights',
    description:
      'AI-powered analysis of your health data to provide actionable insights and early warning signs of potential health issues.',
    icon: Zap,
    color: 'bg-gradient-to-br from-blue-500 to-cyan-600',
  },
]

export function Features() {
  return (
    <section
      id="features"
      className="py-16 md:py-24 bg-[#0a0a0f]"
    >
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Smart Health Tracking in a Sleek Design
          </h2>
          <p className="text-white/70 text-lg">
            PulseRing gives you what matters most—health insights, in a ring that's as stylish as it is revolutionary.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="bg-[#1a1a2e] rounded-2xl p-6 border border-white/10 hover:border-[#8b5cf6]/50 transition-all duration-300 group"
            >
              <div
                className={`${feature.color} w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-purple-500/20 transition-all duration-300`}
              >
                <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.name}
              </h3>
              <p className="text-white/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
} 