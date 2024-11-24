import React, { useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from "@inertiajs/react";
import PrimaryButton from '@/Components/PrimaryButton';
import SecondaryButton from '@/Components/SecondaryButton';

const Hero = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth); 

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth); 
        };

        window.addEventListener('resize', handleResize); 

        return () => {
            window.removeEventListener('resize', handleResize); 
        };
    }, []);

    const sectionStyle =
        windowWidth >= 1024
            ? {
                  backgroundImage: `
                      url('./assets/LandingPage/ikan1.webp'),
                      url('./assets/LandingPage/ikan2.webp'),
                      url('./assets/LandingPage/ikan3.webp'),
                      url('./assets/LandingPage/ikan4.webp')
                  `,
                  backgroundPosition: 'top left, top right, bottom left, bottom right',
                  backgroundSize: '10%, 10%, 10%, 10%',
                  backgroundRepeat: 'no-repeat',
              }
            : {
                  backgroundImage: `url('./assets/LandingPage/ikan3.webp')`,
                  backgroundPosition: 'top right',
                  backgroundSize: '20%',
                  backgroundRepeat: 'no-repeat',
              };

    const images = [
        './assets/LandingPage/HeroPoster.webp',
        './assets/LandingPage/HeroPoster1.webp',
        './assets/LandingPage/HeroPoster2.webp',
        './assets/LandingPage/HeroPoster3.webp',
        './assets/LandingPage/HeroPoster4.webp',
        './assets/LandingPage/HeroPoster5.webp',
    ];

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 1024 },
            items: 1,
        },
        desktop: {
            breakpoint: { max: 1024, min: 768 },
            items: 1,
        },
        tablet: {
            breakpoint: { max: 768, min: 464 },
            items: 1,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    return (
        <section
            className="px-10 lg:px-16 xl:px-24 pt-10 pb-16 lg:py-16 "
            style={sectionStyle}
        >
            <div className="flex text-white flex-col lg:flex-row justify-between items-center lg:items-start gap-8">
                <div id="text" className="space-y-4 flex-1">
                    <h2 className="font-bold text-lg lg:text-2xl xl:text-4xl text-normal-blue-hover lg:text-white">
                        Penuhi Protein Hewanimu di IkaNusa!
                    </h2>
                    <p className="xl:text-2xl lg:text-lg text-xs">
                        IkaNusa menghadirkan ikan-ikan terbaik yang dipilih langsung dari sumber terpercaya, memastikan kamu dan keluarga mendapatkan gizi yang optimal setiap hari. Penuhi kebutuhan protein hewani-mu dengan cara yang mudah dan praktis di IkaNusa, tempat di mana kesegaran dan kualitas selalu menjadi prioritas.
                    </p>
                    <div className="flex gap-2 lg:gap-4">
                        <Link href='/produk'>
                            <PrimaryButton className="bg-[#E2E6DF] border-white lg:border-transparent rounded-xl lg:rounded-lg text-black lg:bg-dark-blue-active lg:text-white">
                                Beli Sekarang
                            </PrimaryButton>
                        </Link>
                        <Link>
                            <SecondaryButton className="bg-white rounded-xl lg:rounded-lg border-light-blue-active">
                                Jelajahi
                            </SecondaryButton>
                        </Link>
                    </div>
                    <div className="gap-2 items-center hidden lg:flex">
                        <img src="./assets/LandingPage/profilMitra.webp" className="w-20" alt="Profil Mitra" />
                        <p className="font-bold text-base">3,8 Juta Nelayan Terhubung dengan Kami</p>
                    </div>
                </div>

                <div id="poster" className="hidden lg:block flex-1 max-w-full overflow-hidden">
                    <Carousel
                        responsive={responsive}
                        infinite={true}
                        autoPlay={true}
                        autoPlaySpeed={2000}
                        showDots={false}
                        arrows={false}
                    >
                        {images.map((src, index) => (
                            <div key={index} className="flex justify-center">
                                <img
                                    src={src}
                                    alt={`Hero Slide ${index}`}
                                    className="w-full max-w-[629px] h-auto rounded-lg object-cover"
                                />
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>
        </section>
    );
};

export default Hero;