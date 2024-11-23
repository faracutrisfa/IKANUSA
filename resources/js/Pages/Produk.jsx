import LandingPageLayout from "@/Layouts/LandingPageLayout";
import React from "react";
import { Head } from "@inertiajs/react";
import { Card } from "flowbite-react";
import images from "../../../public/images/1731602382.png";
import Carousel from "react-multi-carousel";

const Produk = ({ products = [] }) => {
    return (
        <section>
            <Head title="Produk" />
            <LandingPageLayout>
                <div className="px-10 lg:px-16 xl:px-24 py-10 lg:py-20">
                    <h1 className="flex items-center justify-center font-poppins font-bold text-3xl pb-16">
                        {" "}
                        Rekomendasi Produk Harga Terbaik dan Terlaris{" "}
                    </h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {products.map((product, index) => (
                            <Card
                                key={index}
                                className="max-w-sm"
                                imgSrc={images}
                            >
                                <div className="flex flex-col items-start justify-start gap-y-1">
                                    <h1 className="font-poppins font-medium text-lg">
                                        {product.name}
                                    </h1>
                                    <h2 className="font-poppins font-medium text-gray-400 text-sm">
                                        {product.address}
                                    </h2>
                                    <p className="font-poppins font-bold text-primary text-md">
                                        Rp. {product.price.toLocaleString()} /
                                        Kg
                                    </p>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </LandingPageLayout>
        </section>
    );
};

export default Produk;
