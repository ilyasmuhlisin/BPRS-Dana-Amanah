import React from "react";
import "./Hero.css";
// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import { slideImg } from "../../../dummydata";
// Import Swiper styles

import "swiper/css";
import "swiper/css/pagination";


function Slide() {
  return (
    <Swiper
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
    >
      {slideImg.map((val) => {
        return (
          <SwiperSlide key={val.id}>
            <div className="img-slide">
              <img src={val.img} alt="" />
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default Slide;
