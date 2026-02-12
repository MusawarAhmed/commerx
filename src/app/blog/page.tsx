"use client";

import Link from 'next/link';
import Image from 'next/image';
import CTASection from '@/components/common/CTASection';
import { useState } from 'react';
import { BLOG_POSTS, CATEGORIES } from '@/lib/dummy-data';

export default function BlogPage() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredPosts = activeCategory === "All"
        ? BLOG_POSTS
        : BLOG_POSTS.filter(post => post.category === activeCategory);

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

            {/* Bottom Background Pattern */}
            <div className="absolute top-[35%] -right-116 w-[800px] h-[900px] z-0 pointer-events-none rotate-180">
                <Image
                    src="/home-insight-sec-bg.svg"
                    alt="Background Pattern"
                    fill
                    className="object-contain"
                />
            </div>

            {/* Hero Section */}
            <section className="site-container pt-40 pb-16 text-center relative z-10">

                <div className="inline-block px-4 py-1.5 rounded-full bg-[#FFEAEB] text-[#D02030] text-[12px] font-bold tracking-wider uppercase mb-6">
                    Blog
                </div>

                <h1 className="text-[48px] md:text-[64px] font-cal text-black leading-tight mb-6 max-w-4xl mx-auto">
                    Explore our blog for expert knowledge and inspiration
                </h1>

                <p className="text-[16px] font-sans text-black mx-auto">
                    Stay connected with us by subscribing to our blog updates, by doing so, you&apos;ll receive notifications whenever we publish new articles.
                </p>

                {/* Categories Tab */}
                <div className="mt-12 flex flex-wrap justify-center gap-3">
                    {CATEGORIES.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-6 py-2 rounded-full border transition-all text-[16px] md:text-[24px] cursor-pointer font-medium ${activeCategory === cat
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
            <section className="site-container pb-32 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
                    {filteredPosts.map((post) => (
                        <Link href={`/blog/${post.slug}`} key={post.id} className="block group cursor-pointer bg-[#F3F6FD] rounded-[8px] p-[24px]">
                            <div className="relative aspect-video w-full overflow-hidden rounded-[4px] mb-6">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>

                            <h2 className="text-2xl font-cal text-black mb-3 leading-tight group-hover:text-[#D02030] transition-colors">
                                {post.title}
                            </h2>

                            <p className="font-sans text-[14px] font-normal text-gray-600 mb-6 line-clamp-3">
                                {post.description}
                            </p>

                            <button className="px-5 py-2 rounded-full border border-[#D02030] text-black text-[12px] cursor-pointer font-sans font-medium transition-all hover:bg-[#D02030] hover:text-white">
                                Read Article
                            </button>
                        </Link>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <CTASection />
        </main>
    );
}
