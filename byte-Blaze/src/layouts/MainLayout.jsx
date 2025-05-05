import React from "react";
import Nav from "../Components/Nav";
import Blogs from "../Pages/Blogs";
import Bookmarks from "../Pages/Bookmarks";
import Home from "../Pages/Home";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
const MainLayout = () => {
  return (
    <div>
      <div className="h-16">
        <Nav />
      </div>

     {/* packege */}

     <Outlet />

    <Footer />
    </div>
  );
};

export default MainLayout;
