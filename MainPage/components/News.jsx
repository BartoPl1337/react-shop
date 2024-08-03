import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";


export default function News(props) {
  const swiperRef = useRef(null);
  return (
    <div className="text-white bg-black py-8">
      <div className="flex mx-16 items-center">
        <div className="flex-1">
          <h2 className="font-medium text-2xl flex-1">{props.description}</h2>
        </div>
        <div className="flex gap-3">
          <button
            className="rounded-full bg-neutral-700 p-2"
            onClick={() => swiperRef.current.swiper.slidePrev()}
          >
            <ChevronLeft />
          </button>
          <button
            className="rounded-full bg-neutral-700 p-2"
            onClick={() => swiperRef.current.swiper.slideNext()}
          >
            <ChevronRight />
          </button>
        </div>
      </div>

      {/* Karty */}
      <div className="py-8 mx-16">
        <Swiper
          ref={swiperRef}
          slidesPerView={3.1}
          spaceBetween={8}
          className="h-[800px]"
        >
          {props.data.map((item) => (
            <SwiperSlide className="relative h-full">
              <img
                src={item.img}
                alt={item.desc}
                className="h-full w-full absolute inset-0 object-cover object-center"
              />
              <h3 className="font-medium text-xl pt-6">{item.desc}</h3>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
