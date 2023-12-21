"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import Product from "./Product";

import produk1 from './../../public/assets/produk1.png'
import produk2 from './../../public/assets/produk2.png'
import produk3 from './../../public/assets/produk3.png'
import { title } from "process";

const datas = [
  {
    id: 1,
    src: produk1,
    title: "Produk 1",
    price: 90000,
  },
  {
    id: 2,
    src: produk2,
    title: "Produk 2",
    price: 90000,
  },
  {
    id: 3,
    src:produk3,
    title: "Produk 3",
    price: 90000,
  },
  {
    id: 4,
    src: produk1,
    title: "Produk 4",
    price: 90000,
  },
  {
    id: 5,
    src: produk2,
    title: "Produk 5",
    price: 90000,
  },
  {
    id: 6,
    src: produk3,
    title: "Produk 6",
    price: 90000,
  },
];

export default function SliderProducts({title}: {title: string}) {
  return (
    <div className="mt-5">
      <h1 className="text-center mb-3 text-2xl font-semibold">{title}</h1>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={{
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        }}
      >
        {datas.map((data) => (
          <div key={data.id}>
            <SwiperSlide>
              <Product data={data} />
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </div>
  );
}
