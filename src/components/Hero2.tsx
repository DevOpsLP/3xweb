// "use client";
// // import Image from 'next/image';
// import { useEffect, useState } from 'react';

const Hero2: React.FC = () => {
    // const [offsetY, setOffsetY] = useState(0);

    // const handleScroll = () => {
    //     setOffsetY(window.scrollY);
    // };

    // useEffect(() => {
    //     window.addEventListener('scroll', handleScroll);
    //     return () => window.removeEventListener('scroll', handleScroll);
    // }, []);

    return (
        <section className="relative w-full h-[60vh] flex flex-col justify-center items-center overflow-hidden parallax">
            {/* Parallax Container */}
            {/* <div
                className="absolute inset-0 w-full h-full  z-0"
            >
                <Image
                    src="/images/hero.jpg" // Replace with your image path
                    alt="Hero Image"
                    fill
                    className="object-cover "
                    priority
                />
            </div> */}

            <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark overlay */}

            {/* Text Content */}
            <div className="relative z-10">
                <div className="text-primary-500 flex items-center mb-6">
                    <span className="border border-primary-500 border-b-2 w-[150px] me-6 max-h-0"></span>
                    <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold flex">
                        BE SAVAGE NOT AVERAGE
                    </h1>
                    <span className="border border-primary-500 border-b-2 w-[150px] ms-6 max-h-0"></span>
                </div>
                <div className="justify-center flex text-primary-500">
                    <h3 className="text-xl md:text-3xl lg:text-5xl">
                        Exploit all your potential with us
                    </h3>
                </div>
            </div>
        </section>
    );
};

export default Hero2;
