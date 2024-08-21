import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Items(props) {
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
        slidesPerView={2.3}
        spaceBetween={8}
        className="h-[700px]"
      >
        {props.data.map((item) => (
          <SwiperSlide className="relative">
            <img
              src={item.img}
              alt={item.desc}
              className="w-full object-cover object-center h-4/6"
            />
            <div className="h-2/6"> 
            <h3 className="font-medium text-base pt-6 text-orange-500">{item.desc}</h3>
            <h4 className="font-bold">{item.brand}</h4>
            <p className="font-light">{item.name}</p>
            <p className="font-light">{item.color}</p>
            <h4 className="font-bold">{item.value}</h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </div>
)
}
