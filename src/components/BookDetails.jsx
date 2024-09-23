import React from "react";
import { useParams } from "react-router-dom";
import { books } from "../data/BookList";

function BookDetails() {
  const { id } = useParams();
  const selectedBook = books.filter((book) => book.id == id);
  const book = selectedBook[0];
  const bookImg = `${book.img}`;

  return (
    <div>
      <div className="m-[0.5rem] p-[0.5rem] md:m-[1rem] md:p-[1rem] lg:my-[4rem] lg:mx-[10rem] lg:p-[3rem] lg:min-h-[80%] lg:max-h-[100%] rounded-2xl">
        <div
          className="book grid grid-cols-1 lg:grid-cols-3 gap-1 lg:gap-5"
          key={id}
        >
          <div className="left book-img flex justify-center items-center p-5 md:p-10">
            <img
              src={import.meta.env.BASE_URL + bookImg}
              alt="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
              className="bg-[#1c4b47] p-5 w-full h-auto max-w-[250px] max-h-[400px] lg:max-w-[450px] lg:max-h-[950px]"
            />
          </div>
          <div className="right book-details col-span-1 lg:col-span-2 p-5 space-y-7 lg:space-y-7">
            <div className="book-title">
              <h1 className="title text-3xl lg:text-6xl text-center lg:text-left">
                {book.title}
              </h1>
              <h1 className="author text-base lg:text-lg text-center lg:text-left my-4 ">
                by: {book.author}
              </h1>
              <div class="flex justify-center lg:justify-start">
                {Array.from({ length: book.stars }, (_, index) => (
                  <svg
                    key={index}
                    className="w-4 h-4 text-yellow-400 ms-1"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                ))}
              </div>
            </div>
            <div className="book-description">
              <h1 className="uppercase font-semibold">Lorem ipsum</h1>
              <div className="description space-y-4">
                {book.description.map((paragraph, index) => (
                  <p key={index} className="text-justify">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
            <div className="category">
              <h1 className="uppercase font-semibold">Genre</h1>
              <h1>{book.genre.join(", ")}</h1>
            </div>
            <div className="di">
              <p className="">
                <span className="font-medium">Publish Date:</span>{" "}
                {book.publishDate}
              </p>
              <p className="">
                <span className="font-medium">Publisher:</span> {book.publisher}
              </p>
              <p className="">
                <span className="font-medium">Language:</span> {book.language}
              </p>
              <p className="">
                <span className="font-medium">Pages:</span> {book.pages}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookDetails;
