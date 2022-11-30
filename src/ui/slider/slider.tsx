import React from "react";
import {Swiper, SwiperRef, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper";
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import "./slider.scss";

export interface ISlider {
    sliderItems: JSX.Element[]
    desktopCount: number
    tabletCount: number
    mobileCount: number
    reference: React.RefObject<SwiperRef>
}

export default function Slider({sliderItems, desktopCount, tabletCount, mobileCount, reference}: ISlider) {
    return (
        <>
            <Swiper
                ref={reference}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true
                }}
                modules={[Pagination, Navigation]}

                className="mySwiper"
                breakpoints={{
                    640: {
                        slidesPerView: mobileCount,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: tabletCount,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: desktopCount,
                        spaceBetween: 50,
                    },
                }}
                style={{paddingBottom: "80px"}}
            >
                {
                    sliderItems.map((item, index) => {
                        return <SwiperSlide key={index}>{item}</SwiperSlide>
                    })
                }
            </Swiper>
        </>
    );
}
