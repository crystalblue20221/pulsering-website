'use client'

import { Container } from '@/components/ui/Container'

const techSpecs = [
  {
    category: 'Physical',
    specs: [
      { name: 'Materials', value: 'Titanium, Ceramic, Medical-grade Silicone' },
      { name: 'Weight', value: '4-6 grams (depending on size)' },
      { name: 'Thickness', value: '2.5mm' },
      { name: 'Sizes', value: '6-13 (US ring sizes)' },
      { name: 'Water Resistance', value: '100m (10 ATM)' },
      { name: 'Colors', value: 'Silver, Black, Gold, Rose Gold' },
    ],
  },
  {
    category: 'Technical',
    specs: [
      { name: 'Battery Life', value: '5+ days (typical use)' },
      { name: 'Charging Time', value: '60 minutes (full charge)' },
      { name: 'Connectivity', value: 'Bluetooth 5.2, NFC' },
      { name: 'Sensors', value: 'Accelerometer, Heart Rate, Temperature, SpO2' },
      { name: 'Storage', value: '64MB local storage (7 days of data)' },
      { name: 'Compatibility', value: 'iOS 14+, Android 8.0+' },
    ],
  },
  {
    category: 'Features',
    specs: [
      { name: 'Health Tracking', value: 'Heart rate, Sleep, Activity, Stress' },
      { name: 'Notifications', value: 'Customizable vibration patterns' },
      { name: 'Emergency Alerts', value: 'Fall detection, Irregular heart rhythm' },
      { name: 'AI Analysis', value: 'Personalized health insights' },
      { name: 'Data Sync', value: 'Automatic with smartphone app' },
      { name: 'API Access', value: 'Available for developers (OAuth 2.0)' },
    ],
  },
]

export function TechSpecs() {
  return (
    <section id="specs" className="py-16 md:py-24 bg-[#0a0a0f]">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Technical Specifications
          </h2>
          <p className="text-white/70 text-lg">
            PulseRing combines cutting-edge technology with elegant design to
            deliver a powerful health monitoring experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {techSpecs.map((category) => (
            <div
              key={category.category}
              className="bg-[#1a1a2e] rounded-2xl p-6 border border-white/10"
            >
              <h3 className="text-xl font-semibold text-white mb-6 pb-2 border-b border-white/10">
                {category.category}
              </h3>
              <dl className="space-y-4">
                {category.specs.map((spec) => (
                  <div key={spec.name} className="grid grid-cols-2 gap-4">
                    <dt className="text-white/70">{spec.name}</dt>
                    <dd className="text-white font-medium text-right">
                      {spec.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-[#1a1a2e] rounded-2xl p-8 border border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Need more technical details?
              </h3>
              <p className="text-white/70">
                Download our complete technical documentation for in-depth
                information about PulseRing's specifications and capabilities.
              </p>
            </div>
            <a
              href="#"
              className="mt-4 md:mt-0 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-[#8b5cf6] hover:bg-[#7c3aed] transition-colors"
            >
              Download Tech Specs PDF
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
} 
