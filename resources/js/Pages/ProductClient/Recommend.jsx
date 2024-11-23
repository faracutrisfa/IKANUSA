import React from "react";
import { Card } from "flowbite-react";
import Carousel from "react-multi-carousel";
import images from "../../../../public/images/1731602382.png"
import "react-multi-carousel/lib/styles.css"; 
const Recommend = ({products, responsive}) => {
    return (
        <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            keyBoardControl={false}
            showDots={false}
            arrows={false}
            containerClass="carousel-container"
            itemClass="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4"
        >
            {products.map((product, index) => (
                <Card
                    key={index}
                    className="max-w-sm object-cover"
                    imgAlt={product.name}
                    imgSrc={images}
                >
                    <div className="flex flex-col items-start justify-start gap-y-1 p-4">
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
        </Carousel>
    );
};

export default Recommend;
