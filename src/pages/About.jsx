import React from "react";
import { motion } from "framer-motion";
import about from "../../public/assets/about.png";

function About() {
  const cont = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
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
        duration: 0.6,
      },
    },
  };
  return (
    <div>
      <div className="m-[0.5rem] p-[0.5rem] md:m-[1rem] md:p-[1rem] lg:my-[4rem] lg:mx-[10rem] lg:p-[3rem] lg:min-h-[80%] lg:max-h-[100%] rounded-2xl">
        <motion.div
          className="cont book grid grid-cols-1 lg:grid-cols-3 gap-1 lg:gap-5"
          variants={cont}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={item}
            className="left about-details col-span-1 lg:col-span-2 p-5 space-y-7 lg:space-y-7"
          >
            <div className="book-title">
              <h1 className="title text-3xl lg:text-6xl text-center lg:text-left">
                About
              </h1>
              <p className="author text-base lg:text-lg text-justify my-7">
                Welcome to IsaBook, where we’re dedicated to enhancing your
                reading experience and fostering a vibrant community around
                books. Our library features a user-friendly search function,
                allowing you to easily find your next favorite read. Explore our
                diverse categories, showcasing a wide range of genres from
                timeless classics to contemporary bestsellers.
              </p>
              <p className="author text-base lg:text-lg text-justify my-7">
                At IsaBook, we believe in the power of connection. Our About
                page provides insights into our mission and values, while our
                Book Club Announcements keep you informed about upcoming
                meetings where you can engage with fellow readers in lively
                discussions. We also host Story Time for Kids, designed to
                inspire the next generation of readers through interactive
                sessions.
              </p>
              <p className="author text-base lg:text-lg text-justify my-7">
                We invite you to contribute to our collection by using our
                Request a Book feature, helping us grow our offerings to better
                serve the community. Your feedback is invaluable to us, and our
                Send Feedback option allows you to share your thoughts and
                suggestions.
              </p>
              <p className="author text-base lg:text-lg text-justify my-7">
                Join us at IsaBook, where every page turned opens up new
                adventures and connections!
              </p>
            </div>
          </motion.div>
          <motion.div
            variants={item}
            className="right about-img lg:flex justify-center items-center p-5 md:p-10 hidden "
          >
            <img
              src={about}
              alt="lorem2"
              className="w-full h-auto max-w-[250px] max-h-[400px] lg:max-w-[450px] lg:max-h-[950px]"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
