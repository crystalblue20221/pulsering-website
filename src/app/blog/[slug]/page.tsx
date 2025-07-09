import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

// This would normally come from a database or CMS
const blogPosts = [
  {
    id: 1,
    title: 'The Science Behind Sleep Tracking: How PulseRing Improves Your Rest',
    excerpt: 'Discover how our advanced sleep tracking technology helps you optimize your sleep cycles and wake up refreshed.',
    date: 'June 15, 2024',
    author: 'Dr. Sarah Johnson',
    authorRole: 'Sleep Specialist',
    authorImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    category: 'Sleep Health',
    image: 'https://images.unsplash.com/photo-1585129819171-80b02d4c85b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    slug: 'science-behind-sleep-tracking',
    content: `
      <p>Sleep is fundamental to our health and wellbeing, yet many of us struggle to get the quality rest we need. Understanding your sleep patterns is the first step toward improving them, and that's where PulseRing's advanced sleep tracking technology comes in.</p>
      
      <h2>How PulseRing Tracks Your Sleep</h2>
      
      <p>Unlike traditional sleep trackers that only monitor movement, PulseRing uses a sophisticated combination of sensors to track multiple physiological signals:</p>
      
      <ul>
        <li><strong>Heart Rate Variability (HRV):</strong> Changes in your heart rhythm that indicate transitions between sleep stages</li>
        <li><strong>Blood Oxygen Levels:</strong> Detecting potential sleep apnea events</li>
        <li><strong>Body Temperature:</strong> Fluctuations that correlate with your circadian rhythm</li>
        <li><strong>Movement:</strong> Subtle changes in position throughout the night</li>
      </ul>
      
      <p>By analyzing these metrics together, PulseRing can identify your sleep stages with up to 95% accuracy compared to clinical sleep studies.</p>
      
      <h2>Understanding Your Sleep Cycles</h2>
      
      <p>A typical night's sleep consists of multiple cycles through different sleep stages:</p>
      
      <ol>
        <li><strong>Light Sleep:</strong> The transition stage where your body begins to relax</li>
        <li><strong>Deep Sleep:</strong> The physically restorative stage where your body repairs itself</li>
        <li><strong>REM Sleep:</strong> The mentally restorative stage where dreams occur and memories consolidate</li>
      </ol>
      
      <p>PulseRing's detailed sleep analysis shows you how much time you spend in each stage and identifies patterns that may be disrupting your rest.</p>
      
      <h2>Actionable Insights for Better Sleep</h2>
      
      <p>Data alone isn't enough—you need to know what to do with it. That's why PulseRing doesn't just track your sleep; it provides personalized recommendations based on your unique patterns:</p>
      
      <ul>
        <li>Optimal bedtime suggestions based on your circadian rhythm</li>
        <li>Environmental adjustments for your bedroom</li>
        <li>Activity recommendations to improve sleep quality</li>
        <li>Alerts for potential sleep disorders that may require medical attention</li>
      </ul>
      
      <p>Over time, PulseRing learns your patterns and refines its recommendations, helping you continuously improve your sleep quality.</p>
      
      <h2>The Long-Term Benefits</h2>
      
      <p>Users who follow PulseRing's sleep recommendations report significant improvements within just two weeks:</p>
      
      <ul>
        <li>22% increase in deep sleep duration</li>
        <li>34% reduction in nighttime awakenings</li>
        <li>27% improvement in morning alertness</li>
        <li>18% enhancement in daytime energy levels</li>
      </ul>
      
      <p>These improvements extend beyond just feeling better in the morning—quality sleep is linked to better immune function, improved cognitive performance, enhanced mood regulation, and even longevity.</p>
      
      <h2>Getting Started with Sleep Tracking</h2>
      
      <p>PulseRing makes sleep tracking effortless. Simply wear your ring to bed, and it automatically detects when you fall asleep and wake up. The data syncs to your app, where you can review your sleep metrics and receive your personalized recommendations.</p>
      
      <p>Ready to transform your sleep? Learn more about PulseRing's sleep tracking capabilities and start your journey to better rest tonight.</p>
    `,
    relatedPosts: [2, 3, 5],
  },
  {
    id: 2,
    title: '5 Ways PulseRing Helps Athletes Optimize Their Performance',
    excerpt: 'Learn how professional and amateur athletes are using PulseRing to track their vital metrics and improve their training regimens.',
    date: 'June 8, 2024',
    author: 'Michael Chen',
    category: 'Fitness',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    slug: 'pulsering-for-athletes',
    content: '<p>Placeholder content for this blog post.</p>',
    relatedPosts: [1, 3, 4],
  },
  {
    id: 3,
    title: 'Understanding Heart Rate Variability: Your Key to Better Health',
    excerpt: 'Why HRV is one of the most important metrics for your overall health and how PulseRing measures it with medical-grade accuracy.',
    date: 'May 29, 2024',
    author: 'Dr. Robert Williams',
    category: 'Heart Health',
    image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
    slug: 'understanding-heart-rate-variability',
    content: '<p>Placeholder content for this blog post.</p>',
    relatedPosts: [1, 2, 4],
  },
  {
    id: 4,
    title: 'The Future of Wearable Health Technology',
    excerpt: 'Explore the cutting-edge innovations in health wearables and how PulseRing is leading the revolution in personal health monitoring.',
    date: 'May 22, 2024',
    author: 'Emma Rodriguez',
    category: 'Technology',
    image: 'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    slug: 'future-of-wearable-health-tech',
    content: '<p>Placeholder content for this blog post.</p>',
    relatedPosts: [2, 3, 5],
  },
  {
    id: 5,
    title: 'Balancing Work and Wellness: How PulseRing Helps Busy Professionals',
    excerpt: 'Discover strategies for maintaining your health while managing a demanding career, with PulseRing as your wellness companion.',
    date: 'May 15, 2024',
    author: 'James Wilson',
    category: 'Lifestyle',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    slug: 'work-wellness-balance',
    content: '<p>Placeholder content for this blog post.</p>',
    relatedPosts: [1, 4, 6],
  },
  {
    id: 6,
    title: 'Nutrition Tips to Complement Your PulseRing Health Journey',
    excerpt: 'Expert advice on nutrition that works hand-in-hand with your PulseRing data to optimize your overall health and wellness.',
    date: 'May 8, 2024',
    author: 'Sophia Martinez, RD',
    category: 'Nutrition',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    slug: 'nutrition-tips-health-journey',
    content: '<p>Placeholder content for this blog post.</p>',
    relatedPosts: [3, 4, 5],
  },
]

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((post) => post.slug === params.slug)
  
  if (!post) {
    notFound()
  }

  const relatedPosts = post.relatedPosts.map(id => 
    blogPosts.find(post => post.id === id)
  ).filter(Boolean)

  return (
    <main className="pt-24 pb-16 bg-[#0a0a0f]">
      <Container>
        <div className="mb-8">
          <Link href="/blog" className="text-[#8b5cf6] hover:text-[#a78bfa] flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6"/>
            </svg>
            Back to Blog
          </Link>
        </div>

        <article className="max-w-4xl mx-auto">
          <header className="mb-8">
            <div className="mb-4">
              <span className="text-sm font-medium text-[#8b5cf6] bg-[#8b5cf6]/10 px-3 py-1 rounded-full">
                {post.category}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 rounded-full overflow-hidden relative">
                <Image 
                  src={post.authorImage || "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"} 
                  alt={post.author} 
                  fill 
                  className="object-cover" 
                />
              </div>
              <div>
                <div className="font-medium text-white">{post.author}</div>
                <div className="text-sm text-white/60">{post.authorRole || "Contributor"} • {post.date}</div>
              </div>
            </div>
            <div className="aspect-[21/9] relative rounded-xl overflow-hidden mb-8">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </header>

          <div 
            className="prose prose-invert prose-lg max-w-none mb-12"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="border-t border-white/10 pt-8 mt-12">
            <h2 className="text-2xl font-bold text-white mb-6">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => relatedPost && (
                <div
                  key={relatedPost.id}
                  className="bg-[#1a1a2e] rounded-xl overflow-hidden border border-white/10 hover:border-[#8b5cf6]/50 transition-all duration-300"
                >
                  <div className="aspect-[16/9] relative">
                    <Image
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <div className="mb-2">
                      <span className="text-xs font-medium text-[#8b5cf6] bg-[#8b5cf6]/10 px-2 py-1 rounded-full">
                        {relatedPost.category}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-white mb-2">
                      <Link href={`/blog/${relatedPost.slug}`} className="hover:text-[#8b5cf6] transition-colors">
                        {relatedPost.title}
                      </Link>
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 bg-[#1a1a2e] border border-white/10 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-3">Ready to transform your health?</h3>
            <p className="text-white/70 mb-6 max-w-2xl mx-auto">
              Experience the power of continuous health monitoring with PulseRing and start your journey to better wellness today.
            </p>
            <Button variant="primary" size="lg" asChild>
              <Link href="/#">
                Shop PulseRing
              </Link>
            </Button>
          </div>
        </article>
      </Container>
    </main>
  )
} 