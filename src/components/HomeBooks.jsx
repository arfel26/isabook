import React from "react";
import { books } from "../data/BookList";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function HomeBooks() {
  return (
    <div className="books-component mb-10 md:mb-20 lg:mb-30 m-10 ">
      <h1 className="title text-2xl md:text-4xl lg:text-5xl uppercase tracking-wide">
        Trending Books
      </h1>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={10}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
        navigation
      >
        {books.map((book) => (
          <SwiperSlide className="mt-10 p-3">
            <Link to={`/book/${book.id}`} key={book.id}>
              <div className="book-card flex flex-col justify-center items-center text-center">
                <img
                  src={import.meta.env.BASE_URL + book.img}
                  className="bg-stone-300 p-4"
                  alt={book.title}
                />
                <div className="book-title m-2">
                  <h1 className="text-md lg:text-lg relative font-semibold">
                    {book.title}
                  </h1>
                </div>

                <div class="flex items-center">
                  {Array.from({ length: book.stars }, (_, index) => (
                    <svg
                      key={index}
                      className="w-4 h-4 text-yellow-400 ms-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                  ))}
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default HomeBooks;
