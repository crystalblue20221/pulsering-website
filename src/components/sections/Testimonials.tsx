'use client'

import { Container } from '@/components/ui/Container'
import { Star } from 'lucide-react'
import { useState } from 'react'

const testimonials = [
  {
    content:
      "PulseRing has completely changed how I monitor my health. As someone who's always been health-conscious but hated wearing bulky watches, this ring is the perfect solution. The sleep tracking is incredibly accurate!",
    author: 'Sarah J.',
    role: 'Fitness Instructor',
    rating: 5,
  },
  {
    content:
      "I've tried several health wearables, but PulseRing stands out for its comfort and battery life. I barely notice I'm wearing it, and I only need to charge it once a week. The health insights have helped me make meaningful changes to my lifestyle.",
    author: 'Michael T.',
    role: 'Business Executive',
    rating: 5,
  },
  {
    content:
      "As someone with a heart condition, I wanted a discreet way to monitor my heart rate. PulseRing not only looks stylish but provides me with accurate readings and alerts. It's given both me and my family peace of mind.",
    author: 'Robert K.',
    role: 'Retired Teacher',
    rating: 5,
  },
  {
    content:
      "The sleep tracking on PulseRing is far more accurate than any other device I've tried. I've been able to identify patterns affecting my sleep quality and make adjustments that have significantly improved my rest.",
    author: 'Emma L.',
    role: 'Healthcare Professional',
    rating: 4,
  },
  {
    content:
      "I love that PulseRing doesn't look like a medical device. It's elegant enough to wear to business meetings but powerful enough to track all my health metrics. The app interface is intuitive and provides actionable insights.",
    author: 'David M.',
    role: 'Tech Entrepreneur',
    rating: 5,
  },
  {
    content:
      "After struggling with traditional fitness trackers that were uncomfortable to wear while sleeping, PulseRing has been a game-changer. The battery life is impressive, and the health insights are actually useful rather than overwhelming.",
    author: 'Jennifer P.',
    role: 'Yoga Instructor',
    rating: 5,
  },
]

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const visibleTestimonials = testimonials.slice(activeIndex, activeIndex + 3)

  const nextTestimonials = () => {
    setActiveIndex((prevIndex) =>
      prevIndex + 3 >= testimonials.length ? 0 : prevIndex + 3
    )
  }

  const prevTestimonials = () => {
    setActiveIndex((prevIndex) =>
      prevIndex - 3 < 0 ? testimonials.length - 3 : prevIndex - 3
    )
  }

  return (
    <section className="py-16 md:py-24 bg-[#0a0a0f]">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Our Customers Say
          </h2>
          <p className="text-white/70 text-lg">
            Don't just take our word for it. See what our customers have to say
            about their PulseRing experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {visibleTestimonials.map((testimonial, index) => (
            <div
              key={`${testimonial.author}-${index + activeIndex}`}
              className="bg-[#1a1a2e] rounded-2xl p-6 border border-white/10 hover:border-[#8b5cf6]/50 transition-all duration-300"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < testimonial.rating
                        ? 'text-yellow-400 fill-yellow-400'
                        : 'text-gray-400'
                    }`}
                  />
                ))}
              </div>
              <blockquote className="text-white/90 mb-6">
                "{testimonial.content}"
              </blockquote>
              <div className="flex items-center">
                <div
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white font-bold"
                  aria-hidden="true"
                >
                  {testimonial.author.charAt(0)}
                </div>
                <div className="ml-3">
                  <p className="text-white font-medium">{testimonial.author}</p>
                  <p className="text-white/60 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center space-x-4">
          <button
            onClick={prevTestimonials}
            className="p-2 rounded-full bg-[#1a1a2e] border border-white/10 hover:border-[#8b5cf6]/50 transition-colors"
            aria-label="Previous testimonials"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <div className="flex space-x-2">
            {Array.from({ length: Math.ceil(testimonials.length / 3) }).map(
              (_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index * 3)}
                  className={`w-2 h-2 rounded-full ${
                    Math.floor(activeIndex / 3) === index
                      ? 'bg-[#8b5cf6]'
                      : 'bg-white/30'
                  }`}
                  aria-label={`Go to testimonial group ${index + 1}`}
                />
              )
            )}
          </div>
          <button
            onClick={nextTestimonials}
            className="p-2 rounded-full bg-[#1a1a2e] border border-white/10 hover:border-[#8b5cf6]/50 transition-colors"
            aria-label="Next testimonials"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </Container>
    </section>
  )
} 