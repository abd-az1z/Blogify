import React from "react";
import logo from "../../assets/blogify.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="w-full p-10 h-16 flex items-center justify-between">
        <Link to={"/"} className="flex items-center">
          <img src={logo} alt="Blogify Logo" className="h-16 w-16" />
          <h1 className="text-white font-bold text-2xl">
            Blogify
          </h1>
        </Link>
        <ul className="flex font-mono items-center">
          <li className="mr-5">
            <Link to="/">Home</Link>
          </li>
          <li className="mr-5">
            <Link to="/about">About</Link>
          </li>
          <li className="mr-5">
            <Link to="/all-blogs">All Blogs</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
