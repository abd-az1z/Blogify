import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateBlog = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    title: "",
    miniDescription: "",
    authorName: "",
    content: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Add createdAt field
    const blogData = { ...formData, createdAt: new Date().toISOString() };

    try {
      // Send blogData to backend
      const response = await fetch("http://localhost:5001/api/blogs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(blogData),
      });

      if (response.ok) {
        toast.success("Blog created successfully!", {
          position: "top-right",
        });

        // Reset form fields
        setFormData({
          title: "",
          miniDescription: "",
          authorName: "",
          content: "",
        });
      } else {
        toast.error("Failed to create the blog. Try again.", {
          position: "top-right",
        });
      }
    } catch (error) {
      console.error("Error creating blog:", error);
      toast.error("An error occurred. Please try again.", {
        position: "top-right",
      });
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-8 p-6 border-gray-500 border hover:border-white shadow-md rounded-md">
      <h1 className="text-2xl font-bold mb-4">Create a New Blog</h1>
      <form onSubmit={handleSubmit}>
        {/* Title */}
        <div className="mb-4">
          <label htmlFor="title" className="block font-medium text-gray-200">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border font-mono text-black rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
            placeholder="Enter the blog title"
            required
          />
        </div>

        {/* Mini Description */}
        <div className="mb-4">
          <label
            htmlFor="miniDescription"
            className="block font-medium text-gray-200"
          >
            Mini Description
          </label>
          <textarea
            id="miniDescription"
            name="miniDescription"
            value={formData.miniDescription}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border font-mono text-black rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
            placeholder="Enter a short description of the blog"
            required
          />
        </div>

        {/* Author Name */}
        <div className="mb-4">
          <label
            htmlFor="authorName"
            className="block font-medium text-gray-200"
          >
            Author Name
          </label>
          <input
            type="text"
            id="authorName"
            name="authorName"
            value={formData.authorName}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border font-mono rounded-md text-black shadow-sm focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
            placeholder="Enter the author's name"
            required
          />
        </div>

        {/* Content */}
        <div className="mb-4">
          <label htmlFor="content" className="block font-medium text-gray-200">
            Content
          </label>
          <textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border text-black font-mono rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
            placeholder="Enter the blog content"
            rows="6"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="px-5 border-b hover:text-gray-800 font-semibold p-2 rounded-md hover:bg-gray-300 transition"
          >
            Create Blog
          </button>
        </div>
      </form>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default CreateBlog;
