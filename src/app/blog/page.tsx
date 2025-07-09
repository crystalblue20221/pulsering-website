import { Container } from '@/components/ui/Container'
import Image from 'next/image'
import Link from 'next/link'

const blogPosts = [
  {
    id: 1,
    title: 'The Science Behind Sleep Tracking: How PulseRing Improves Your Rest',
    excerpt: 'Discover how our advanced sleep tracking technology helps you optimize your sleep cycles and wake up refreshed.',
    date: 'June 15, 2024',
    author: 'Dr. Sarah Johnson',
    category: 'Sleep Health',
    image: 'https://images.unsplash.com/photo-1585129819171-80b02d4c85b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    slug: 'science-behind-sleep-tracking',
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
  },
]

export default function BlogPage() {
  const featuredPost = blogPosts[0]
  const regularPosts = blogPosts.slice(1)

  return (
    <main className="pt-24 pb-16 bg-[#0a0a0f]">
      <Container>
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            PulseRing Blog
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Insights, tips, and the latest news about health tracking, wellness, and how to get the most from your PulseRing.
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <h2 className="text-xl font-semibold text-white/80 mb-6 border-b border-white/10 pb-2">
            Featured Article
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 bg-[#1a1a2e] rounded-2xl overflow-hidden border border-white/10">
            <div className="lg:col-span-3 relative aspect-video lg:aspect-auto">
              <Image
                src={featuredPost.image}
                alt={featuredPost.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="lg:col-span-2 p-6 lg:p-8 flex flex-col">
              <div className="mb-2">
                <span className="text-xs font-medium text-[#8b5cf6] bg-[#8b5cf6]/10 px-2 py-1 rounded-full">
                  {featuredPost.category}
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                <Link href={`/blog/${featuredPost.slug}`} className="hover:text-[#8b5cf6] transition-colors">
                  {featuredPost.title}
                </Link>
              </h3>
              <p className="text-white/70 mb-6 flex-grow">{featuredPost.excerpt}</p>
              <div className="flex items-center justify-between text-sm text-white/50">
                <span>{featuredPost.author}</span>
                <span>{featuredPost.date}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Regular Posts */}
        <div>
          <h2 className="text-xl font-semibold text-white/80 mb-6 border-b border-white/10 pb-2">
            Latest Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <div
                key={post.id}
                className="bg-[#1a1a2e] rounded-xl overflow-hidden border border-white/10 hover:border-[#8b5cf6]/50 transition-all duration-300"
              >
                <div className="aspect-[16/9] relative">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-2">
                    <span className="text-xs font-medium text-[#8b5cf6] bg-[#8b5cf6]/10 px-2 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    <Link href={`/blog/${post.slug}`} className="hover:text-[#8b5cf6] transition-colors">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-white/70 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-white/50">
                    <span>{post.author}</span>
                    <span>{post.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </main>
  )
} 