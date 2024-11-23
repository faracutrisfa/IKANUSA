import React from 'react'

const Info = () => {
    return (
        <section className='px-10 lg:px-16 xl:px-24 bg-white py-16'>
            <div className='flex flex-col lg:flex-row gap-5 lg:gap-10'>
                <h1 className='text-dark-blue-active lg:hidden font-bold text-3xl lg:text-4xl text-center lg:text-left'>Platform Layanan Ikan Terbaik sejak 2020</h1>
                <div id='grid-1' className='mt-9 lg:mt-0 flex justify-center'>
                    <img src="./assets/LandingPage/infoHero.webp" alt="" className='w-60 lg:w-auto rounded-full lg:rounded-tl-[70px] lg:rounded-br-[70px] lg:rounded-tr-none lg:rounded-bl-none' />
                </div>
                <div id='info' className='space-y-4'>
                    <h1 className='hidden lg:block text-dark-blue-active font-bold text-3xl lg:text-4xl text-center lg:text-left'>Platform Layanan Ikan Terbaik sejak 2020</h1>
                    <p id='text' className='text-xs lg:text-base xl:text-lg text-center lg:text-justify'>Sejak didirikan pada tahun 2020, IkaNusa hadir sebagai solusi inovatif untuk mendukung kelangsungan ekonomi dan keberlanjutan perikanan di Indonesia. Kami melihat potensi besar dalam industri perikanan lokal, serta pentingnya memudahkan akses masyarakat terhadap produk ikan segar berkualitas. Dengan menggandeng nelayan lokal sebagai mitra, IkaNusa tidak hanya menyediakan ikan yang segar dan bernutrisi tinggi, tetapi juga berperan dalam menjaga kesejahteraan para nelayan dan komunitas pesisir.</p>
                    <ul id='why' className='text-[10px] lg:text-base xl:text-lg flex justify-between'>
                        <li className='flex items-center gap-3'><div className='rounded-full w-3 h-3 bg-blue-600'></div>Harga bersahabat</li>
                        <li className='flex items-center gap-3'><div className='rounded-full w-3 h-3 bg-blue-600'></div>Kualitas baik</li>
                        <li className='flex items-center gap-3'><div className='rounded-full w-3 h-3 bg-blue-600'></div>Aksesnya mudah</li>
                    </ul>
                    <ul id='total' className='flex gap-5 lg:gap-12 bg-darker-blue text-white justify-center py-4 px-12 lg:w-3/4'>
                        <li className='flex flex-col items-center text-xs md:text-base lg:text-2xl xl:text-3xl'><h1 className='font-bold'>2020</h1>Berdiri</li>
                        <li className='border-2 border-white'></li>
                        <li className='flex flex-col items-center text-xs md:text-base lg:text-2xl xl:text-3xl'><h1 className='font-bold'>7000+</h1>Konsumen</li>
                        <li className='border-2 border-white'></li>
                        <li className='flex flex-col items-center text-xs md:text-base lg:text-2xl xl:text-3xl'><h1 className='font-bold'>300+</h1>Mitra</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Info
