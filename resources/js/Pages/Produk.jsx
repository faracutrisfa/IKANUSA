import LandingPageLayout from "@/Layouts/LandingPageLayout";
import React, { useState } from "react";
import { Head } from "@inertiajs/react";
import Recommend from "./ProductClient/Recommend";
import Laut from "./ProductClient/Laut";
import Tawar from "./ProductClient/Tawar";
import { CiSearch } from "react-icons/ci";
import { CgShoppingBag } from "react-icons/cg";

const Produk = ({ products = [] }) => {
    const responsive = {
        superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 4 },
        desktop: { breakpoint: { max: 1024, min: 768 }, items: 3 },
        tablet: { breakpoint: { max: 768, min: 464 }, items: 2 },
        mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
    };
    const [searchQuery, setSearchQuery] = useState("");

    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <section>
            <Head title="Produk" />
            <LandingPageLayout>
                <div className="px-10 lg:px-16 xl:px-24 py-10 lg:py-20 flex flex-col justify-center space-y-12 md:space-y-20">
                    <div className="flex items-center justify-between relative">
                        <div className="flex items-center w-full relative">
                            <CiSearch
                                className="text-white absolute right-2 lg:right-6"
                                size={30}
                            />
                            <input
                                placeholder="Cari disini....."
                                onChange={(e) => setSearchQuery(e.target.value)}
                                value={searchQuery}
                                type="text"
                                className="border focus:border-none focus:outline-none rounded-2xl w-full p-3 lg:p-5 bg-dark-blue-hover text-white placeholder-white font-poppins font-large"
                            />
                        </div>

                        <CgShoppingBag
                            className="text-black ml-4 cursor-pointer"
                            size={35}
                        />
                    </div>

                    <h1 className="flex items-center justify-center font-poppins font-bold text-lg lg:text-3xl xl:text-4xl text-dark-blue-active">
                        Rekomendasi Produk Harga Terbaik dan Terlaris
                    </h1>
                    <Recommend
                        products={filteredProducts}
                        responsive={responsive}
                    />
                    <h1 className="flex items-center justify-start font-poppins font-bold text-lg lg:text-3xl xl:text-4xl text-dark-blue-active pl-4">
                        Produk Hasil Laut
                    </h1>
                    <Laut products={filteredProducts} responsive={responsive} />
                    <h1 className="flex items-center justify-start font-poppins font-bold text-lg lg:text-3xl xl:text-4xl text-dark-blue-active pl-4">
                        Produk Ikan Tawar
                    </h1>
                    <Tawar
                        products={filteredProducts}
                        responsive={responsive}
                    />
                </div>
            </LandingPageLayout>
        </section>
    );
};

export default Produk;
