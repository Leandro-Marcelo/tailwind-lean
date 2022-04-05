import React from "react";
import About from "./About";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Support from "./Support";
import AllInOne from "./AllInOne";
import Pricing from "./Pricing";
import Footer from "./Footer";

const Page = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Support />
      <AllInOne />
      <Pricing />
      <Footer />
    </>
  );
};

export default Page;
