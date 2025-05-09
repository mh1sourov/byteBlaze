import React from "react";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-xl">
          <h1 className="text-5xl font-bold">
            Welcome to{" "}
            <span className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text animate-gradient">
              ByteBlaze
            </span>
          </h1>
          <p className="py-6">
            ByteBlaze is the bridge between the complex world of technology and
            the curious minds eager to understand it
          </p>
          <div className="flex items-center gap-2 justify-center">
            <Link to="/blogs">
              <a
                href="#_"
                class="px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-purple-50 text-purple-600 inline-block"
              >
                <span class="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-purple-600 group-hover:h-full opacity-90"></span>
                <span class="relative group-hover:text-white text-lg bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient">Read Blogs</span>
              </a>
            </Link>

            <Link to="/bookmarks">
              <a
                href="#_"
                class="px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-purple-50 text-purple-600 inline-block"
              >
                <span class="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-purple-600 group-hover:h-full opacity-90"></span>
                <span class="relative group-hover:text-white text-lg bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient">Bookmarks</span>
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Hero;
