import React from 'react'
import layananKami from "../../Data/layananKami"

const Layanan = () => {
    return (
        <section className='px-10 lg:px-16 xl:px-24 bg-light-blue-active py-16'>
            <div className='flex flex-col items-center'>
                <h1 className='text-dark-blue-active font-bold text-3xl lg:text-4xl'>Layanan Kami</h1>
                <p className='mt-2 mb-12 lg:text-base text-center text-xs'>Kami hadir dengan beragam layanan yang dirancang untuk memudahkan kebutuhan kamu akan produk ikan segar berkualitas.</p>
                <div className='grid md:grid-cols-2 gap-6 lg:gap-10 xl:gap-12'>
                    {layananKami.map((layanan, index) => (
                        <div key={index} className='transition duration-300 ease-in-out transform hover:scale-105 flex items-center border rounded-2xl bg-light-blue p-4 lg:p-5 xl:p-8 gap-4 xl:gap-16 shadow-lg w-[320px] lg:w-[400px] xl:w-[561px] xl:h-[216px]'>
                            <img src={layanan.icon} alt="icon" className='w-14 h-14 lg:w-24 lg:h-24' />
                            <div className='flex flex-col gap-2'>
                                <h1 className='font-bold text-base xl:text-2xl text-darker-blue'>{layanan.title}</h1>
                                <p className='text-dark-blue-active text-[10px] lg:text-xs xl:text-sm '>{layanan.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Layanan