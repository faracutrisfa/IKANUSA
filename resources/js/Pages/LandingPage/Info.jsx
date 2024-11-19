import React from 'react'

const Info = () => {
    return (
        <section className='px-10 lg:px-16 xl:px-24 bg-white py-16'>
            <div className='flex flex-col lg:flex-row gap-9'>
                <div id='image'>
                    <img src="./build/assets/LandingPage/infoHero.webp" alt="" className='rounded-tl-[70px] rounded-br-[70px]' />
                </div>
                <div id='text-info' className='space-y-4'>
                    <h1 className='text-dark-blue-active font-bold text-3xl lg:text-4xl text-center lg:text-left'>Platform Layanan Ikan Terbaik sejak 2020</h1>
                    <p className='text-xs lg:text-base xl:text-lg text-center lg:text-justify'>Sejak didirikan pada tahun 2020, IkaNusa hadir sebagai solusi inovatif untuk mendukung kelangsungan ekonomi dan keberlanjutan perikanan di Indonesia. Kami melihat potensi besar dalam industri perikanan lokal, serta pentingnya memudahkan akses masyarakat terhadap produk ikan segar berkualitas. Dengan menggandeng nelayan lokal sebagai mitra, IkaNusa tidak hanya menyediakan ikan yang segar dan bernutrisi tinggi, tetapi juga berperan dalam menjaga kesejahteraan para nelayan dan komunitas pesisir.</p>
                    <ul className='text-xs lg:text-base xl:text-lg flex justify-between'>
                        <li className='flex items-center gap-3'><div className='rounded-full w-3 h-3 bg-blue-600'></div>Harga bersahabat</li>
                        <li className='flex items-center gap-3'><div className='rounded-full w-3 h-3 bg-blue-600'></div>Kualitas baik</li>
                        <li className='flex items-center gap-3'><div className='rounded-full w-3 h-3 bg-blue-600'></div>Aksesnya mudah</li>
                    </ul>
                    <ul className='flex gap-12 bg-darker-blue text-white justify-center py-4 px-12 w-3/4'>
                        <li className='flex flex-col items-center'><h1 className='font-bold text-3xl'>2020</h1>Berdiri</li>
                        <li className='border-2 border-white'></li>
                        <li className='flex flex-col items-center'><h1 className='font-bold text-3xl'>7000+</h1>Konsumen</li>
                        <li className='border-2 border-white'></li>
                        <li className='flex flex-col items-center'><h1 className='font-bold text-3xl'>300+</h1>Mitra</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Info
