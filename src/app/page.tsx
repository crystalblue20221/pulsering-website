import { CTA } from '@/components/sections/CTA'
import { DashboardPreview } from '@/components/sections/DashboardPreview'
import { FAQ } from '@/components/sections/FAQ'
import { Features } from '@/components/sections/Features'
import { HealthEcosystem } from '@/components/sections/HealthEcosystem'
import { Hero } from '@/components/sections/Hero'
import { LifestyleSections } from '@/components/sections/LifestyleSections'
import { PricingComparison } from '@/components/sections/PricingComparison'
import { TrustIndicators } from '@/components/sections/TrustIndicators'
import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustIndicators />
        <Features />
        <LifestyleSections />
        <PricingComparison />
        <HealthEcosystem />
        <DashboardPreview />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
