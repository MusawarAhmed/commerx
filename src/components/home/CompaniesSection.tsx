
import Image from 'next/image';

const companies = [
    { name: 'Zeekeo', logo: '/Zeekeo.png' },
    { name: 'Launchpad', logo: '/Launchpad.png' },
    { name: 'CLAS', logo: '/CLAS.png' },
    { name: 'mi', logo: '/mi-Trail.png' },
    { name: 'FLEETBridge', logo: '/Fleet-Bridge.png' },
];

export default function CompaniesSection() {
    return (
        <section className="py-20 bg-white">
            <div className="site-container">
                <h2 className="text-center text-[28px] md:text-[48px] font-cal mb-16">
                    <span className="text-black">Commerx </span>
                    <span className="text-[#D02030]">Companies</span>
                </h2>

                <div className="flex flex-wrap items-center justify-center md:justify-between gap-10 md:gap-8">
                    {companies.map((company, index) => (
                        <div key={index} className="relative w-[180px] h-[60px] transition-all duration-300">
                            <Image
                                src={company.logo}
                                alt={company.name}
                                fill
                                className="object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
