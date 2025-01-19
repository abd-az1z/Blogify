import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("http://localhost:5001/api/blogs"); 
        if (!response.ok) {
          throw new Error("Couldn't fetch blogs");
        }
        const data = await response.json();
        setBlogs(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return <div>Loading blogs...</div>;
  }

  return (
    <div className="w-full h-full">
      <div className="flex mx-5 items-center justify-between">
        <h1 className="text-4xl font-semibold my-10">All Blogs</h1>
        <Link to={"/create-blog"}>
          <h2 className="border-b hover:border px-4 py-2 rounded-lg">
            Create your Blog
          </h2>
        </Link>
      </div>
      <div className="all-blog-container mx-10 gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <div
            key={blog._id}
            className="blog border w-full h-72 p-4 flex flex-col gap-3 bg-[#0C0C0C] border-gray-700 overflow-hidden hover:border-gray-300 shadow-2xl rounded-2xl"
          >
            <h2 className="text-2xl font-semibold">{blog.title}</h2>
            <h5 className="opacity-75  font-mono tracking-wide">
              {blog.miniDescription.slice(0, 50)}...{""}
            </h5>
            <p className=" opacity-50">
              {blog.content.slice(0, 100)}...{" "}
              <Link to={`/blog/${blog._id}`} className="text-blue-400 italic">
                Read more...
              </Link>
            </p>
            <div className="flex justify-between ">
              <span>{blog.authorName}</span>
              <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllBlogs;
