import React from "react";
import { Routes, Route } from "react-router-dom";
import CreateBlog from "../Components/create/CreateBlog";
import AllBlogs from "../Components/Pages/AllBlogs";
import DetailedBlog from "../Components/Pages/DetailedBlog";
import HomePage from "../Components/Home/HeroPage";
import About from "../Components/Pages/About";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/create-blog" element={<CreateBlog />} />
      <Route path="/all-blogs" element={<AllBlogs />} />
      <Route path="/blog/:id" element={<DetailedBlog />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default AppRoutes;