"use client";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { SlideList } from "./SlideList";
import Image from "next/image";

export default function SlideListArea() {
  return (
    <div className="relative">
      <h1
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold z-50 animate-fadeInSlide"
        style={{
          fontFamily: "Cherry Bomb One",
          fontWeight: 400,
          fontStyle: "normal",
          color: "#FBCFE8",
          textShadow: "4px 4px 4px rgba(0, 0, 0, 0.2)",
          fontSize: "100px",
        }}
      >
        saki&apos;s portfolio
      </h1>
      <Swiper
        className="w-full h-screen"
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        loop
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        {SlideList.map((picture, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-screen relative">
              <Image
                src={picture.src}
                alt={picture.alt}
                fill
                style={{ objectFit: "cover" }}
                priority
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black/60" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
