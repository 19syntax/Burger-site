import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import OrderCol from "./components/OrderCol";
import BestSection from "./components/BestSection";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="md:w-full w-[90%] mx-auto md:p-12.5 py-7">
      <Navbar />
      <Hero />
      <OrderCol />
      <BestSection />
      <Footer />
    </div>
  );
};

export default App;
