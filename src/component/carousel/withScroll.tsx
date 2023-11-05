import React, { useState, useRef } from "react";
import Carousel from "react-multi-carousel";
import "./WithScrollbar.css";
import img8 from "../../../public/img8.png";
import Image from "next/image";
import frame227 from "../../../public/frame227.png";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};

interface CarouselRef {
    transform: number;
    totalItems: number;
    slidesToShow: number;
    isAnimationAllowed: boolean;
    currentSlide: number;
    // Add other properties you need here
}


const WithScrollbar = ({images}:any) => {
    const [additionalTransform, setAdditionalTransform] = useState(0);
    // const carouselRef = useRef<CarouselState | null>(null);
    const carouselRef = useRef<CarouselRef | null>(null);

    const CustomSlider = ({ carouselState }: { carouselState: CarouselRef }) => {
        let value = 0;
        let carouselItemWidth = 0;
        if (carouselRef.current) {
            carouselItemWidth = carouselRef.current.transform;
            const maxTranslateX = Math.round(
                carouselItemWidth *
                (carouselRef.current.totalItems - carouselRef.current.slidesToShow) +
                150
            );
            value = maxTranslateX / 100;
        }

        const handleSliderChange = (e: any) => {
            if (carouselRef.current && carouselRef.current.isAnimationAllowed) {
                carouselRef.current.isAnimationAllowed = false;
            }
            const nextTransform = e.target.value * (value as number);

            const nextSlide = Math.round(nextTransform / carouselItemWidth);

            if (e.target.value === "0" && additionalTransform === 150) {
                if (carouselRef.current) {
                    carouselRef.current.isAnimationAllowed = true;
                }
                setAdditionalTransform(0);
            }

            if (carouselRef.current) {
                // You might need to adjust the properties below according to the Carousel component's state structure.
                carouselRef.current.transform = -nextTransform;
                carouselRef.current.currentSlide = nextSlide;
            }
        };

        return (
            <div className="custom-slider">
                <input
                    type="range"
                    value={Math.round(Math.abs(carouselState.transform) / value)}
                    defaultValue={0}
                    max={
                        (carouselItemWidth *
                            (carouselState.totalItems - carouselState.slidesToShow) +
                            (additionalTransform === 150 ? 0 : 150)) /
                        value
                    }
                    onChange={handleSliderChange}
                    className="custom-slider__input"
                />
            </div>
        );
    };

    return (
        <Carousel
            ssr={false}
            ref={(el) => {
                // Use type assertion to ensure compatibility
                carouselRef.current = el as unknown as CarouselRef;
            }}
            partialVisbile={false}
            customButtonGroup={<CustomSlider carouselState={carouselRef.current!} />}
            itemClass="slider-image-item md:w-150"
            responsive={responsive}
            containerClass="carousel-container-with-scrollbar"
            additionalTransfrom={-additionalTransform}
            beforeChange={(nextSlide) => {
                if (nextSlide !== 0 && additionalTransform !== 500) {
                    setAdditionalTransform(500);
                }
                if (nextSlide === 0 && additionalTransform === 500) {
                    setAdditionalTransform(0);
                }
            }}
        >
            {images.map((image:any, index:any) => {
                return (
                    <div key={index} className=" ">
                        <div
                            className="w-full md:right-0 flex justify-center items-center alignCenter h-125 "
                            style={{
                                backgroundImage: `url(${image})`, // Use the image variable here
                                backgroundPosition: 'center',
                                backgroundSize: 'cover',
                            }}
                        >
                        </div>
                    </div>
                );
            })}

        </Carousel>
    );
};

export default WithScrollbar;
