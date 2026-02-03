
import Image from 'next/image';
import Link from 'next/link';
import { ArrowIcon } from '../layout/Icons';

export default function InsightsSection() {
    return (
        <section className="relative py-20 bg-[#ffffff] overflow-hidden">
            {/* Background Pattern - Positioned in top-left corner and partially hidden */}
            <div className="absolute -top-50 -left-125 w-[800px] h-[900px] z-0  pointer-events-none">
                <Image
                    src="/home-insight-sec-bg.svg"
                    alt="Background Pattern"
                    fill
                    className="object-contain object-top-left"
                />
            </div>

            <div className="site-container relative z-10">
                <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
                    {/* Left side: Image */}
                    <div className="w-full md:w-1/2">
                        <div className="relative aspect-4/3 w-full">
                            <Image
                                src="/home-insight-sec-img.png"
                                alt="From Insight to Impact"
                                fill
                                className="object-cover rounded-xl shadow-2xl"
                            />
                        </div>
                    </div>

                    {/* Right side: Content */}
                    <div className="w-full md:w-1/2 space-y-8">
                        <h2 className="text-[32px] md:text-[48px] font-cal text-black leading-tight">
                            From Insight to Impact
                        </h2>

                        <div className="space-y-6 text-black text-[16px] font-sans leading-relaxed">
                            <p className="font-normal">
                                At Commerx, innovation means clarity, not complication. We unite strategy with infrastructure, marketing with data, and technology with outcomes.
                            </p>
                            <p className="font-bold text-black">
                                The result - smarter systems, stronger brands, and scalable impact.
                            </p>
                        </div>

                        <Link
                            href="/solutions"
                            className="inline-flex items-center gap-2 text-[#D02030] font-cal text-[12px]  tracking-wider hover:gap-3 transition-all"
                        >
                            See How Integration Works
                            <ArrowIcon color="#D02030" className="mt-0.5" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
