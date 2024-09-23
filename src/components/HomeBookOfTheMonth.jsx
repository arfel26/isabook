import React from "react";
import cover from "../../src/assets/books/The Housemaid.jpg";

export default function HomeBookOfTheMonth() {
  return (
    <div className="book-of-the-month mb-10 md:mb-20 lg:my-30">
      <div className="m-[1rem] p-[1rem] lg:p-[2rem] lg:m-[2rem]">
        <div className="grid grid-cols-1 lg:grid-cols-3 space-x-4">
          <div className="left col-span-1 lg:col-span-2 m-3 p-3 lg:m-10 lg:p-10 space-y-7 text-white">
            <h1 className="book-of-the-month-title text-4xl md:text-5xl lg:text-6xl uppercase font-bold mt-auto mb-5 md:mb-10 lg:mb-14">
              Book of the month
            </h1>
            <h1 className="book-title text-xl md:text-3xl lg:text-4xl font-semibold m-0 p-0">
              The Housemaid
            </h1>
            <p className="book-summary text-base md:text-lg lg:text-2xl text-justify leading-relaxed">
              {" "}
              In The Housemaid by Freida McFadden, Millie is a young and
              beautiful woman who applies and is offered a job as a live-in
              housekeeper for a wealthy couple, Nina and Andrew Winchester. For
              Millie, who has a criminal record, a it's a fantastic job -- until
              it's not. Things go downhill quickly as Nina Winchester exhibits
              increasingly bizarre and frustrating behavior. Millie is also
              offered a room in the house in the attic ... that only locks from
              the outside. In this fun and quick-paced psychological thriller,
              Millie wonders what type of people she's really working for...
            </p>
          </div>
          <div className="right book-img flex justify-center items-center p-5 md:p-10">
            <img
              src={cover}
              alt="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
              className="w-full h-auto max-w-[400px] max-h-[1000px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
