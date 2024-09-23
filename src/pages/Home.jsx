import React from "react";
import Navigation from "../components/Navigation";
import HomeBanner from "../components/HomeBanner";
import HomeSteps from "../components/HomeSteps";
import HomeBooks from "../components/HomeBooks";
import HomeBookOfTheMonth from "../components/HomeBookOfTheMonth";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <HomeBanner />
      <HomeSteps />
      <HomeBookOfTheMonth />
      <HomeBooks />
    </div>
  );
}

export default Home;
