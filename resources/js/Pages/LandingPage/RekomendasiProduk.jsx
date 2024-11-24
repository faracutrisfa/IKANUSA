import SecondaryButton from '@/Components/SecondaryButton';
import React from 'react';
import { Card } from "flowbite-react";
import { Link } from '@inertiajs/react';

const RekomendasiProduk = () => {
    const products = [
        {
            name: "Ikan Kakap",
            address: "Muara Angke, Jakarta",
            price: 80000,
            image: "./images/1732454970.jpeg",
        },
        {
            name: "Ikan Bawal",
            address: "Desa Srono, Banyuwangi",
            price: 45000,
            image: "./images/1732455507.jpg",
        },
    ];

    return (
        <section className='px-10 lg:px-16 xl:px-24 py-16'>
            <div className="flex flex-col lg:flex-row gap-10">
                <div id="info" className="flex-1">
                    <h1 className='text-dark-blue-active font-bold text-3xl lg:text-4xl text-left'>
                        Rekomendasi Produk Harga Terbaik dan Terlaris
                    </h1>
                    <p className='pt-6 pb-6 lg:pb-20 text-xs lg:text-base xl:text-lg text-justify'>
                        Sedang mencari ikan segar dengan harga terbaik? Di IkaNusa, kami punya berbagai pilihan ikan segar dengan kualitas premium yang siap memenuhi kebutuhan dapur Anda.
                    </p>
                    <Link href='/produk'>
                        <SecondaryButton className='hover:bg-[#2376CF] hover:text-white border-[#2376CF]'>
                            Cek Selengkapnya
                        </SecondaryButton>
                    </Link>
                </div>

                <div id="product" className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-10">
                    {products.map((product, index) => (
                        <Card
                            key={index}
                            className="max-w-sm object-cover"
                            imgAlt={product.name}
                            imgSrc={product.image}
                        >
                            <div className="flex flex-col items-start justify-start gap-y-2 p-4">
                                <h1 className="font-poppins font-medium text-lg">
                                    {product.name}
                                </h1>
                                <h2 className="font-poppins font-medium text-gray-400 text-sm">
                                    {product.address}
                                </h2>
                                <p className="font-poppins font-bold text-primary text-md">
                                    Rp. {product.price.toLocaleString()} / Kg
                                </p>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RekomendasiProduk;