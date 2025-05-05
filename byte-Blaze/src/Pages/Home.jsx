import React from "react";
import Nav from "../Components/Nav";
import Hero from "../Components/Hero";
import wave from '../assets/wave.svg'
const Home = () => {
  return (
    <div className="relative">
        <Hero />
    <img className="absolute bottom-0 w-full" src={wave} />
    </div>
  );
};

export default Home;
