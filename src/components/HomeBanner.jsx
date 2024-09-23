import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function HomeBanner() {
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        className="h-[70vh] md:h-[75vh] lg:h-[85vh]"
      >
        {["cover1", "cover2", "cover3", "cover4"].map((cover, index) => (
          <SwiperSlide
            className="flex items-center justify-center h-full"
            key={index}
          >
            <img
              src={import.meta.env.BASE_URL + `assets/${cover}.png`}
              className="w-full h-full object-cover"
              alt=""
              srcset=""
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default HomeBanner;
