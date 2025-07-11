import { Benefits } from '@/components/sections/Benefits'
import { Contact } from '@/components/sections/Contact'
import { CTA } from '@/components/sections/CTA'
import { DashboardPreview } from '@/components/sections/DashboardPreview'
import { FAQ } from '@/components/sections/FAQ'
import { Features } from '@/components/sections/Features'
import { HealthEcosystem } from '@/components/sections/HealthEcosystem'
import { Hero } from '@/components/sections/Hero'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { LifestyleSections } from '@/components/sections/LifestyleSections'
import { PricingComparison } from '@/components/sections/PricingComparison'
import { ProductComparison } from '@/components/sections/ProductComparison'
import { TechSpecs } from '@/components/sections/TechSpecs'
import { Testimonials } from '@/components/sections/Testimonials'
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
        <HowItWorks />
        <Benefits />
        <LifestyleSections />
        <Testimonials />
        <ProductComparison />
        <PricingComparison />
        <TechSpecs />
        <HealthEcosystem />
        <DashboardPreview />
        <FAQ />
        <Contact />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
