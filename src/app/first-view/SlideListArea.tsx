"use client";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import { cherryBombOne } from "../fonts";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { SlideList } from "./SlideList";
import Image from "next/image";
import { motion } from "motion/react";

export default function SlideListArea() {
  return (
    <div className="relative w-full h-screen">
      <motion.h1
        className={`absolute top-1/2 left-1/2 w-full transform -translate-x-1/2 -translate-y-1/2 text-white text-center font-bold z-50 px-4 ${cherryBombOne.className}`}
        style={{
          color: "#FBCFE8",
          textShadow: "4px 4px 4px rgba(0, 0, 0, 0.2)",
          fontSize: "clamp(2rem, 8vw, 100px)",
        }}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "linear" }}
      >
        saki&apos;s portfolio
      </motion.h1>

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
