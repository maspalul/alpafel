"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";
import Banner from "./Banner";
import SwiperCore from "swiper/core";

SwiperCore.use([Pagination, Navigation]);

const datas = [
  {
    id: 1,
    nama: "Banner 1",
  },
  {
    id: 2,
    nama: "Banner 2",
  },
  {
    id: 3,
    nama: "Banner 3",
  },
];

export default function SliderBanner() {
  return (
    <Swiper
      navigation={true}
      slidesPerView={1}
      spaceBetween={10}
      loop={true}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        768: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Pagination, Navigation]}
    >
      {datas.map((data) => (
        <div key={data.id}>
          <SwiperSlide>
            <Banner data={data} />
          </SwiperSlide>
        </div>
      ))}
    </Swiper>
  );
}
