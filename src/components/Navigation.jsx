import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogPanel,
  DialogTitle,
  DialogBackdrop,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Link } from "react-router-dom";

function Navigation() {
  let [isOpen, setIsOpen] = useState(false);

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  const categories = [
    "Art",
    "Biography",
    "Business",
    "Children's",
    "Christian",
    "Classics",
    "Comics",
    "Cookbooks",
    "Fantasy",
    "Fiction",
    "Graphic Novels",
    "Historical Fiction",
    "History",
    "Horror",
    "LGBT",
    "Memoir",
    "Music",
    "Mystery",
    "Nonfiction",
    "Poetry",
    "Psychology",
    "Romance",
    "Science",
    "Science Fiction",
    "Self Help",
    "Sports",
    "Thriller",
    "Travel",
    "Young Adult",
  ];

  function cutArrayToTen(array, size) {
    const chunks = [];
    for (let i = 0; i < array.length; i += size) {
      chunks.push(array.slice(i, i + size));
    }
    return chunks;
  }

  const categoriesCut = cutArrayToTen(categories, 10);
  const categoryListCount = categoriesCut.length;

  return (
    <>
      <nav className="navigation shadow-md py-3 px-10">
        <div className="flex flex-wrap items-center justify-between ">
          <div className="navigation-logo flex items-center md:mx-4">
            <span className="text-2xl tracking-wider uppercase">IsaBook</span>
          </div>

          <div className="lg:hidden">
            <button
              id="navbar-toggle"
              className="text-2xl"
              onClick={() => {
                const navbar = document.getElementById("navbar-default");
                navbar.classList.toggle("hidden");
              }}
            >
              ☰
            </button>
          </div>
          <div
            className="navigation-list hidden w-full lg:block lg:w-auto"
            id="navbar-default"
          >
            <ul className="font-extrabold lg:flex lg:flex-row lg:space-x-11 lg:space-y-0 ">
              <li className="sm:mt-6 md:mt-0 ">
                <a href="/" className="block my-3 md:py-2 md:px-3">
                  Home
                </a>
              </li>
              <li>
                <a href="/books" className="block my-3 md:py-2 md:px-3">
                  Books
                </a>
              </li>
              <li>
                <Menu>
                  <MenuButton className="block my-3 md:py-2 md:px-3">
                    Browse
                  </MenuButton>
                  <MenuItems
                    transition
                    anchor="bottom end"
                    className="w-auto origin-top-right rounded-md border m-2 border-black/1 shadow-lg bg-white p-3 text-sm transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0 z-20"
                  >
                    <div
                      className={`category grid grid-cols-${categoryListCount}`}
                    >
                      {categoriesCut.map((categoryList, listIndex) => (
                        <div className="mx-5">
                          <ul key={listIndex}>
                            {categoryList.map((category, categoryIndex) => (
                              <MenuItem key={categoryIndex}>
                                <a
                                  href={`/books?category=${category}`}
                                  className="dropdown-choice group flex w-full gap-2 p-2 hover:bg-gray-200 font-semibold"
                                >
                                  {category}
                                </a>
                              </MenuItem>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </MenuItems>
                </Menu>
              </li>
              <li>
                <a href="/about" className="block my-3 md:py-2 md:px-3">
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navigation;
