import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Footer";
import { FaArrowLeft } from "react-icons/fa";

const DetailedBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editFormData, setEditFormData] = useState({
    title: "",
    miniDescription: "",
    authorName: "",
    content: "",
  });

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(`http://localhost:5001/api/blogs/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch the blog");
        }
        const data = await response.json();
        setBlog(data);
        setEditFormData({
          title: data.title,
          miniDescription: data.miniDescription,
          authorName: data.authorName,
          content: data.content,
        });
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blog:", error);
        setError(true);
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5001/api/blogs/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editFormData),
      });
      if (!response.ok) {
        throw new Error("Failed to update blog");
      }
      const updatedBlog = await response.json();
      setBlog(updatedBlog);
      setIsEditing(false);
      toast.success("Blog updated successfully!", {
        position: "top-right",
        theme: "dark",
      });
    } catch (error) {
      console.error("Error updating blog:", error);
      toast.error("Failed to update blog. Please try again.", {
        position: "top-right",
        theme: "dark",
      });
    }
  };

  // Handle delete blog
  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:5001/api/blogs/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Failed to delete blog");
      }
      toast.success("Blog deleted successfully!", {
        position: "top-right",
        theme: "dark",
      });
      navigate("/all-blogs");
    } catch (error) {
      console.error("Error deleting blog:", error);
      toast.error("Failed to delete blog. Please try again.", {
        position: "top-right",
        theme: "dark",
      });
    }
  };

  if (loading) {
    return <div>Loading blog...</div>;
  }

  if (error || !blog) {
    return <div>Error loading blog or blog not found.</div>;
  }

  return (
    <div className="w-full h-full">
      <div className="flex items-center justify-center">
        <div className="mt-10 w-[75%]">
          <Link
            to="/all-blogs"
            className="flex items-center font-mono text-gray-500 gap-2"
          >
            <FaArrowLeft />
            <p>Back to Blogs</p>
          </Link>
          {/* Blog Details or Edit Form */}
          {!isEditing ? (
            <>
              <div className="my-12 pb-8 border-b border-gray-400">
                <p className="font-mono mb-4 text-gray-500">
                  Date: {new Date(blog.createdAt).toLocaleDateString()}
                </p>
                <h1 className="text-6xl font-bold font-sans tracking-wider">
                  {blog.title}
                </h1>
                <p className="text-lg font-mono tracking-wide text-gray-500 mt-4">
                  {blog.miniDescription}
                </p>
                <div className="flex mt-4 justify-between">
                  <p>Author: {blog.authorName}</p>
                </div>
              </div>
              <div className="mt-12 text-gray-200">
                {blog.content.split("\n").map((paragraph, index) => (
                  <p key={index} className="mb-5">
                    {paragraph}
                  </p>
                ))}
              </div>
              {/* Action Buttons */}
              <div className="flex items-center justify-between gap-4 mt-6">
                <button
                  onClick={() => setIsEditing(true)}
                  className="px-6 py-2 border-b border-blue-600 text-white rounded-lg hover:bg-blue-500"
                >
                  Edit
                </button>
                <button
                  onClick={handleDelete}
                  className="px-4 py-2 border-b border-red-600 text-white rounded-lg hover:bg-red-500"
                >
                  Delete
                </button>
              </div>
            </>
          ) : (
            <form onSubmit={handleUpdate} className="mt-8">
              <div className="mb-4">
                <label className="block text-gray-300">Title</label>
                <input
                  type="text"
                  name="title"
                  value={editFormData.title}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-md text-black"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-300">Mini Description</label>
                <textarea
                  name="miniDescription"
                  value={editFormData.miniDescription}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-md text-black"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-300">Author Name</label>
                <input
                  type="text"
                  name="authorName"
                  value={editFormData.authorName}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-md text-black"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-300">Content</label>
                <textarea
                  name="content"
                  value={editFormData.content}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-md text-black"
                  rows="6"
                />
              </div>
              <div className="flex gap-4">
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-500"
                >
                  Save Changes
                </button>
                <button
                  onClick={() => setIsEditing(false)}
                  type="button"
                  className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-500"
                >
                  Cancel
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default DetailedBlog;
