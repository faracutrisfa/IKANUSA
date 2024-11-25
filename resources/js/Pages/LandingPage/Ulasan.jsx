import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import reviews from "../../Data/reviews";

const Ulasan = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2100,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <section className='px-10 lg:px-16 xl:px-24 bg-white py-16'>
            <div>
                <h1 className='text-dark-blue-active font-bold text-3xl lg:text-4xl underline underline-offset-[15px] text-center mb-16'>
                    Apa Kata Mereka?
                </h1>
                <Slider {...settings} id >
                    {reviews.map((review, index) => (
                        <div key={index}>
                            <div className='flex flex-col rounded-2xl bg-normal-blue mx-4'>
                                <div className='flex justify-center -mb-10 lg:-mb-20 pt-20'>
                                    <img src={review.image} alt="image" className='rounded-full w-24 lg:w-44 z-10' />
                                </div>
                                <div className='bg-white rounded-t-2xl flex flex-col gap-2 px-5 py-14 lg:py-28 min-h-80 md:min-h-80 lg:max-h-[450px] xl:max-h-96'>
                                    <h3 className='text-dark-blue-active text-xl lg:text-3xl font-bold text-center'>
                                        {review.name}
                                    </h3>
                                    <div className='flex justify-between items-start'>
                                        <img
                                            src="./assets/LandingPage/patternReviewBottom.webp"
                                            alt=""
                                            className='w-3 lg:w-12'
                                        />
                                    </div>
                                    <p className='text-ellipsis text-sm text-center'>
                                        {review.description}
                                    </p>
                                    <div className='flex justify-between items-end'>
                                        <div></div>
                                        <img
                                            src="./assets/LandingPage/patternReviewTop.webp"
                                            alt=""
                                            className='w-3 lg:w-12'
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default Ulasan;
