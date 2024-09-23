import React, { useState } from "react";

function Sidebar() {
  return (
    <div>
      <aside className="sidebar absolute left-0 hidden lg:block lg:w-80 p-5 mx-4">
        <div className="h-full">
          <ul>
            <li className="my-5">
              <h1 className="category-title my-3">Category</h1>
              <ul className="space-y-2">
                <li className="category-text">Fiction</li>
                <li className="category-text">Non-Fiction</li>
                <li className="category-text">Mystery</li>
                <li className="category-text">Thriller</li>
                <li className="category-text">Science Fiction</li>
                <li className="category-text">Fantasy</li>
                <li className="category-text">Romance</li>
                <li className="category-text">Historical Fiction</li>
                <li className="category-text">Young Adult (YA)</li>
                <li className="category-text">Biographies & Autobiographies</li>
              </ul>
            </li>
            <li className="my-5">
              <h1 className="category-title my-3 ">Price Range</h1>
              <input type="range" name="" id="" className="w-full" />
            </li>
            <button className="bg-slate-500 rounded-md p-2 text-white">
              Apply
            </button>
          </ul>
        </div>
      </aside>
    </div>
  );
}

export default Sidebar;
