
import Image from 'next/image';

const stats = [
    {
        value: "25%",
        label: "lower IT operating costs in year one"
    },
    {
        value: "99.99%",
        label: "uptime to keep mission-critical systems online"
    },
    {
        value: "$1M+",
        label: "new revenue driven by GTM execution"
    }
];

export default function IntegrationSection() {
    return (
        <section className="relative py-24 bg-[#0A0A0A] overflow-hidden">
            {/* Background Image Placeholder - User will add the file later */}
            <div className="absolute inset-0 z-0 bg-linear-to-br from-[#381926] from-1% to-[#05060F] to-100%" />
            <div className="absolute inset-0 z-0">
                <Image
                    src="/integration-bg.png"
                    alt="Background Pattern"
                    fill
                    className="object-cover object-center"
                    priority
                />
            </div>

            <div className="site-container relative z-10 text-center flex flex-col gap-10">
                <div className="mx-auto space-y-6">
                    <h2 className="text-[28px] md:text-[48px] font-cal text-white leading-tight">
                        Integration That Delivers Results
                    </h2>
                    <p className="text-[16px] font-sans font-normal text-white/70 mx-auto">
                        Every Commerx solution is designed to connect data, systems, and strategy - transforming complexity into measurable performance.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="bg-white/20 border border-white/10 rounded-[4px] backdrop-blur-[20%] py-8 md:py-14 px-10 md:px-14 flex flex-col items-center justify-center space-y-4 transition-all duration-500 group"
                        >
                            <span className="text-[40px] md:text-[64px] font-cal font-normal text-white leading-none group-hover:scale-105 transition-transform duration-500">
                                {stat.value}
                            </span>
                            <p className="text-[14px] md:text-[16px] text-white leading-relaxed">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 z-1 bg-linear-to-b from-black/20 via-transparent to-black/20 pointer-events-none" />
        </section>
    );
}
