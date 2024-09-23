import React from "react";

function HomeSteps() {
  return (
    <div>
      <div className="steps-div m-[0.5rem] p-[0.5rem] md:m-[1rem] md:p-[5rem] lg:m-[1rem]">
        <div className="steps-title mb-8 flex justify-center">
          <h1 className="text-center text-3xl md:text-4xl lg:text-5xl tracking-wider font-extrabold">
            Get Involved: Explore, Share, and Request
          </h1>
        </div>
        <div className="steps grid grid-cols-1 lg:grid-cols-3 ">
          <div className="steps-content mx-12 p-10">
            <img
              src={import.meta.env.BASE_URL + "src/assets/1.png"}
              className="w-36 md:w-52 lg:w-40"
              alt=""
            />
            <p className="text-3xl md:text-4xl font-bold my-2">Explore Books</p>
            <p className="my-1 text-xl lg:text-lg">
              Explore our collection or use the search bar to find your book.
            </p>
          </div>
          <div className="steps-content mx-12 p-10">
            <img
              src={import.meta.env.BASE_URL + "src/assets/2.png"}
              className="w-36 md:w-52 lg:w-40"
              alt=""
            />
            <p className="text-3xl md:text-4xl font-bold my-2">
              Request a Book
            </p>
            <p className="my-1 text-xl lg:text-lg">
              Can't find the book you're looking for? We’re here to help! Submit
              your request, and we’ll consider adding it to our collection.
            </p>
          </div>
          <div className="steps-content mx-12 p-10">
            <img
              src={import.meta.env.BASE_URL + "src/assets/3.png"}
              className="w-36 md:w-52 lg:w-40"
              alt=""
            />
            <p className="text-3xl md:text-4xl font-bold my-2">
              Send Us Feedback
            </p>
            <p className="my-1 text-xl lg:text-lg">
              Your thoughts matter to us! Help us improve by sharing your
              suggestions or experiences with our library.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSteps;
