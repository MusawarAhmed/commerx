"use client";

import Image from 'next/image';
import CTASection from '@/components/common/CTASection';
import { useState } from 'react';

// Dummy Data
const BLOG_POSTS = [
    {
        id: 1,
        title: "Integrating Marketing and IT: The Future of Intelligent Growth",
        description: "Our journey is guided by a clear vision - is to be at the forefront of transformative solutions that shape to the industries and enrich lives. This vision is deeply rooted in our core values: excellence, innovation, integrity, and collaboration.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
        category: "Marketing",
        link: "#"
    },
    {
        id: 2,
        title: "How IoT is Reshaping Enterprise Operations",
        description: "Our journey is guided by a clear vision - is to be at the forefront of transformative solutions that shape to the industries and enrich lives. This vision is deeply rooted in our core values: excellence, innovation, integrity, and collaboration.",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
        category: "IoT",
        link: "#"
    },
    {
        id: 3,
        title: "Integrating Marketing and IT: The Future of Intelligent Growth",
        description: "Our journey is guided by a clear vision - is to be at the forefront of transformative solutions that shape to the industries and enrich lives. This vision is deeply rooted in our core values: excellence, innovation, integrity, and collaboration.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
        category: "Telematics",
        link: "#"
    },
    {
        id: 4,
        title: "How IoT is Reshaping Enterprise Operations",
        description: "Our journey is guided by a clear vision - is to be at the forefront of transformative solutions that shape to the industries and enrich lives. This vision is deeply rooted in our core values: excellence, innovation, integrity, and collaboration.",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
        category: "Tech",
        link: "#"
    }
];

const CATEGORIES = ["All", "Design", "IoT", "Tech", "Telematics", "Marketing"];

export default function BlogPage() {
    const [activeCategory, setActiveCategory] = useState("All");

    return (
        <main className="min-h-screen bg-white relative overflow-hidden">
            {/* Top Background Pattern */}
            <div className="absolute -top-25 -left-125 w-[800px] h-[900px] z-0 pointer-events-none">
                <Image
                    src="/home-insight-sec-bg.svg"
                    alt="Background Pattern"
                    fill
                    className="object-contain object-top-left"
                />
            </div>

            {/* Hero Section */}
            <section className="site-container pt-32 pb-16 text-center relative z-10">

                <div className="inline-block px-4 py-1.5 rounded-full bg-[#FFEAEB] text-[#D02030] text-[12px] font-bold tracking-wider uppercase mb-6">
                    Blog
                </div>

                <h1 className="text-[48px] md:text-[64px] font-cal text-black leading-tight mb-6 max-w-4xl mx-auto">
                    Explore our blog for expert knowledge and inspiration
                </h1>

                <p className="text-[16px] font-sans text-gray-600 max-w-2xl mx-auto">
                    Stay connected with us by subscribing to our blog updates, by doing so, you&apos;ll receive notifications whenever we publish new articles.
                </p>

                {/* Categories Tab */}
                <div className="mt-12 flex flex-wrap justify-center gap-3">
                    {CATEGORIES.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-6 py-2 rounded-full border transition-all text-sm md:text-base font-medium ${activeCategory === cat
                                ? "bg-[#D02030] text-white border-[#D02030]"
                                : "bg-white text-gray-600 border-gray-300 hover:border-gray-400"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </section>

            {/* Blog Grid */}
            <section className="site-container pb-32">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {BLOG_POSTS.map((post) => (
                        <article key={post.id} className="group cursor-pointer">
                            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl mb-6">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>

                            <h2 className="text-2xl font-cal font-bold text-black mb-3 leading-tight group-hover:text-[#D02030] transition-colors">
                                {post.title}
                            </h2>

                            <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                                {post.description}
                            </p>

                            <button className="px-5 py-2 rounded-full border border-gray-300 text-black text-sm font-medium transition-all hover:border-[#D02030] hover:text-[#D02030]">
                                Read Article
                            </button>
                        </article>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <CTASection />
        </main>
    );
}
