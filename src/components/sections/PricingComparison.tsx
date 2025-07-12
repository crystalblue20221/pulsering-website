'use client'

import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Check, X } from 'lucide-react'

const pricingData = {
  features: [
    'Sleep tracking',
    'Heart rate monitoring',
    'Activity tracking',
    'Water resistance',
    'Battery life',
    'Health insights',
    'Smartphone notifications',
    'Emergency alerts',
  ],
  competitors: [
    {
      name: 'Competitor 1',
      priceRange: '$299-$799',
      values: [
        { value: 'Basic', icon: Check },
        { value: 'Limited', icon: Check },
        { value: 'Basic', icon: Check },
        { value: '50m', icon: Check },
        { value: '1-2 days', icon: X },
        { value: 'Limited', icon: Check },
        { value: 'Yes', icon: Check },
        { value: 'No', icon: X },
      ],
    },
    {
      name: 'Competitor 2',
      priceRange: '$249-$599',
      values: [
        { value: 'Advanced', icon: Check },
        { value: 'Continuous', icon: Check },
        { value: 'Advanced', icon: Check },
        { value: '100m', icon: Check },
        { value: '2-3 days', icon: Check },
        { value: 'Basic', icon: Check },
        { value: 'Yes', icon: Check },
        { value: 'Limited', icon: Check },
      ],
    },
    {
      name: 'PulseRing',
      priceRange: '$199',
      highlighted: true,
      values: [
        { value: 'Premium', icon: Check },
        { value: 'Continuous', icon: Check },
        { value: 'Premium', icon: Check },
        { value: '100m', icon: Check },
        { value: '5 days', icon: Check },
        { value: 'Comprehensive', icon: Check },
        { value: 'Yes', icon: Check },
        { value: 'Yes', icon: Check },
      ],
    },
  ],
}

export function PricingComparison() {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-[#0a0a0f]">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            PulseRing vs Traditional Wearables
          </h2>
          <p className="text-white/70 text-lg">
            See how PulseRing compares to other wearables on the market.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-white/10">
                <th className="py-4 px-6 text-left text-white text-lg font-medium">
                  Features
                </th>
                {pricingData.competitors.map((competitor) => (
                  <th
                    key={competitor.name}
                    className={`py-4 px-6 text-center ${
                      competitor.highlighted
                        ? 'text-[#8b5cf6] font-bold'
                        : 'text-white'
                    }`}
                  >
                    {competitor.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {pricingData.features.map((feature, featureIdx) => (
                <tr
                  key={feature}
                  className={`${
                    featureIdx % 2 === 0 ? 'bg-[#1a1a2e]/30' : ''
                  } hover:bg-[#1a1a2e]/50 transition-colors`}
                >
                  <td className="py-4 px-6 text-left text-white">
                    {feature}
                  </td>
                  {pricingData.competitors.map((competitor) => {
                    const value = competitor.values[featureIdx]
                    return (
                      <td
                        key={`${competitor.name}-${feature}`}
                        className={`py-4 px-6 text-center ${
                          competitor.highlighted ? 'text-[#8b5cf6]' : 'text-white/80'
                        }`}
                      >
                        <div className="flex items-center justify-center gap-2">
                          {value.icon === Check ? (
                            <Check
                              className={`h-5 w-5 ${
                                competitor.highlighted
                                  ? 'text-[#8b5cf6]'
                                  : 'text-green-500'
                              }`}
                            />
                          ) : (
                            <X className="h-5 w-5 text-red-500" />
                          )}
                          <span>{value.value}</span>
                        </div>
                      </td>
                    )
                  })}
                </tr>
              ))}
              <tr className="border-t border-white/10">
                <td className="py-6 px-6 text-left text-white font-bold">
                  Price
                </td>
                {pricingData.competitors.map((competitor) => (
                  <td
                    key={`${competitor.name}-price`}
                    className={`py-6 px-6 text-center ${
                      competitor.highlighted
                        ? 'text-[#8b5cf6] font-bold text-xl'
                        : 'text-white font-medium'
                    }`}
                  >
                    {competitor.priceRange}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" variant="accent">
            Pre-Order Now
          </Button>
        </div>
      </Container>
    </section>
  )
} 
