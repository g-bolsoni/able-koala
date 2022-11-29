import React from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper";

import Image from "next/image"
import banner1 from "../../../public/banners/p1_1.png"
import banner2 from "../../../public/banners/p2_2.png"
import banner3 from "../../../public/banners/p3_3.png"
import banner4 from "../../../public/banners/p4_4.png"

// Import Swiper styles
import 'swiper/css';

import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Carousel () {
  return (
    <>
        <Swiper
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={false}
            modules={[Autoplay, Pagination, Navigation]}
            className="banners"
        >
            <SwiperSlide>
              <Image
                src={banner3}
                alt="Able Koala"
                priority
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={banner2}
                alt="Able Koala"
                priority
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={banner4}
                alt="Able Koala"
                priority
              />
            </SwiperSlide>

        </Swiper>
    </>
  );
};