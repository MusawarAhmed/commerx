"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowIcon } from '../layout/Icons';

export interface Capability {
    id: string;
    tabLabel: string;
    title: string;
    titleAccent: string;
    tags: string[];
    descriptionHeading: string;
    description: string;
    image: string;
}

interface CapabilitiesSectionProps {
    capabilities: Capability[];
}

export default function CapabilitiesSection({ capabilities }: CapabilitiesSectionProps) {
    const [activeTab, setActiveTab] = useState(0);

    if (!capabilities || capabilities.length === 0) {
        return null;
    }

    return (
        <section className="py-20 bg-[#F3F6FD]">
            <div className="site-container flex flex-col gap-14">
                {/* Header */}
                <div className="text-center  space-y-4">
                    <h2 className="text-[28px] md:text-[48px] font-cal leading-tight">
                        <span className="text-[#D02030]">Integrated Capabilities.</span>
                        <br />
                        <span className="text-[#000000]">One Strategic Partner.</span>
                    </h2>
                    <p className="max-w-5xl mx-auto text-[#000000] font-sans text-[16px]">
                        Our expertise spans every layer of your enterprise - seamlessly connected to deliver intelligence, performance, and profitability.
                    </p>
                </div>

                {/* Tabs Navigation - Width matches the content div */}
                <div className="bg-white rounded-[8px] shadow-sm py-2 px-3  w-full overflow-x-auto">
                    <div className="flex flex-nowrap md:flex-row justify-between items-center min-w-max md:min-w-0">
                        {capabilities.map((cap, index) => (
                            <button
                                key={cap.id}
                                onClick={() => setActiveTab(index)}
                                className={`px-4 md:px-6 py-3 text-[16px] md:text-[24px] font-cal rounded-[34px] transition-all duration-300 flex-1 text-center whitespace-nowrap cursor-pointer ${activeTab === index
                                    ? 'bg-[#D02030] text-white shadow-md '
                                    : 'text-[#7D7D7D] hover:text-[#7D7D7D] hover:bg-black/5 '
                                    }`}
                            >
                                {cap.tabLabel}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Tab Content Card */}
                <div className="bg-white rounded-[16px] p-6 md:p-12 shadow-xl border border-black/5 animate-fade-in">
                    <div className="space-y-12">
                        {/* Content Title & Tags */}
                        <div className="space-y-6">
                            <h3 className="text-[32px] md:text-[56px] font-cal text-black">
                                {capabilities[activeTab].title} <span className="text-[#D02030]">{capabilities[activeTab].titleAccent}</span>
                            </h3>

                            <div className="flex flex-wrap gap-2 text-[14px] md:text-[16px] font-sans font-medium">
                                {capabilities[activeTab].tags.map(tag => (
                                    <span key={tag} className="px-4 py-1.5 rounded-full border border-[#D02030] text-black hover:border-[#D02030] transition-colors">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Content Split: Image & Text Area */}
                        <div className="flex flex-col lg:flex-row gap-8 items-stretch pt-4">
                            {/* Image Part */}
                            <div className="w-full lg:w-1/2">
                                <div className="relative aspect-4/3 w-full bg-[#F3F6FD] p-4 rounded-[8px] overflow-hidden shadow-sm h-full min-h-[300px]">
                                    <div className="relative w-full h-full">
                                        <Image
                                            src={capabilities[activeTab].image}
                                            alt={capabilities[activeTab].title}
                                            fill
                                            className="object-cover rounded-[4px] transition-opacity duration-500"
                                            onError={(e) => {
                                                const target = e.target as HTMLImageElement;
                                                target.src = 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800';
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Content Part with #F3F6FD background */}
                            <div className="w-full lg:w-1/2 bg-[#F3F6FD] rounded-[8px] p-4 md:p-6 flex flex-col justify-between">
                                <div className="space-y-6">
                                    <h4 className="text-[20px] md:text-[24px] font-bold font-sans text-black leading-snug">
                                        {capabilities[activeTab].descriptionHeading}
                                    </h4>
                                    <p className="text-[16px] text-[#000000] font-sans leading-relaxed">
                                        {capabilities[activeTab].description}
                                    </p>
                                </div>

                                <Link
                                    href={`/services/${capabilities[activeTab].id}`}
                                    className="inline-flex items-center gap-2 text-[#D02030] font-cal text-[16px] tracking-wide hover:gap-3 transition-all pt-8"
                                >
                                    Learn More
                                    <ArrowIcon color="#D02030" className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in {
                    animation: fade-in 0.5s ease-out forwards;
                }
            `}</style>
        </section>
    );
}
