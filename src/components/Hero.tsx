"use client"
import Image from 'next/image';
import { useEffect, useState } from 'react';

const Hero: React.FC = () => {
    const [offsetY, setOffsetY] = useState(0);

    const handleScroll = () => {
        setOffsetY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className="relative w-full h-[80vh] flex flex-col justify-center items-center overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 w-full z-0"
                style={{
                    transform: `translateY(${offsetY * 0.5}px)`, // Parallax effect
                }}
            >
                <Image
                    src="/images/hero2.jpg" // replace with your image path
                    alt="Hero Image"
                    fill
                    className="object-cover h-full w-full"
                    priority
                />
            </div>

            <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark overlay */}

            {/* Text Content */}
            <div className="relative z-10">
                <div className="text-primary-500 flex">
                    <span className="border border-primary-500 border-b-2 w-[150px] me-6 max-h-0"></span>
                    <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold flex cursor typewriter-animation">
                        GIRLS JUST WANNA HAVE FUND$
                    </h1>
                    <span className="border border-primary-500 border-b-2 w-[150px] max-h-0"></span>
                </div>
                <div className="justify-center flex text-primary-500">
                    <h3 className="text-xl md:text-3xl lg:text-5xl">
                        Exploit all your potential with us
                    </h3>
                </div>
                <div className='flex justify-center mt-12'>
                    <button className="btn-1 relative font-bold text-primary-500 text-3xl py-3 md:py-4 px-4 md:px-6 rounded overflow-hidden group hover:bg-transparent transition-all duration-100 ease-in-out">
                        <span className="relative z-10 group-hover:tracking-wider transition-all duration-300">
                            JOIN NOW
                        </span>
                        {/* SVG Rectangle for Border Animation */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full" viewBox="0 0 110 45" preserveAspectRatio="none">
                            <rect x="2" y="2" width="106" height="41" className="stroke-current" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
