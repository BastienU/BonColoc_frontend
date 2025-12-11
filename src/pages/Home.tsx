import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Steps from "../components/Steps";
import Reviews from "../components/Reviews";
import Footer from "../components/Footer";

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Steps />
      <Reviews />
      <Footer />
    </>
  );
};

export default Home;