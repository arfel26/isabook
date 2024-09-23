import React, { useState } from "react";
import { books } from "../data/BookList";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

function BookListComponent() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const booksPerPage = 10;

  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const selectedCategory = query.get("category") || "";
  console.log(selectedCategory);

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;

  function findBooksByCategory(books, category) {
    if (!category) return books; // Return all books if no category is selected
    return books.filter((book) => book.genre.includes(category));
  }

  function findBooksBySearch(books, search) {
    if (!search) return books; // Return all books if no search query is provided
    return books.filter((book) =>
      book.title.toLowerCase().includes(search.toLowerCase())
    );
  }

  const booksCategoryList = findBooksByCategory(books, selectedCategory);
  const booksTitleList = findBooksBySearch(booksCategoryList, searchQuery);

  const filteredBooks = booksTitleList;

  const currentBooks = filteredBooks.slice(indexOfFirstBook, indexOfLastBook);
  const totalPages = Math.ceil(filteredBooks.length / booksPerPage);

  function handlePageChange(pageNumber) {
    setCurrentPage(pageNumber);
  }

  const container = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <div>
      <div className="content m-0 lg:mx-60 p-4 min-h-[105vh] h-[auto]">
        <div className="p-4">
          <div className="search mb-4">
            <div className="flex justify-center gap-3">
              <input
                type="search"
                name=""
                id=""
                placeholder="Search books"
                onChange={(e) => setSearchQuery(e.target.value)}
                className="border-1 bg-gray-300 w-full rounded-lg p-2 px-4 text-black"
              />
            </div>
          </div>
          <div className="lg:mx-20 lg:mt-10">
            <div className="w-full flex justify-center h-full">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                {currentBooks.map((book) => (
                  <motion.div
                    key={book.id} // Ensure the key is on the motion element
                    className="container"
                    variants={container}
                    initial="hidden"
                    animate="visible"
                  >
                    <Link to={`/book/${book.id}`}>
                      <motion.div
                        variants={item}
                        className="p-3 mx-1 flex justify-center flex-col items-center"
                      >
                        <img
                          src={import.meta.env.BASE_URL + book.img}
                          className="bg-stone-300 p-4 w-40 h-48 md:w-56 md:h-80"
                          alt={book.title}
                        />
                        <h1 className="text-sm md:text-md relative font-semibold text-center md:mx-2 md:p-1">
                          {book.title}
                        </h1>
                      </motion.div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-4">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => handlePageChange(index + 1)}
                className={`pagination-button mx-1 px-3 py-1 rounded ${
                  currentPage === index + 1 ? "selected" : "standby"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookListComponent;
