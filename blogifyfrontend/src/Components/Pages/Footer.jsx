import React from "react";

const Footer = () => {
  return (
    <footer className=" text-white py-6 mt-10">
      <div className="container mx-auto flex flex-col items-center">
        <p className="text-sm text-center mb-2">
          © {new Date().getFullYear()} Blogify. All rights reserved.
        </p>
        <div className="flex space-x-4">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            Facebook
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            Twitter
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            Instagram
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            LinkedIn
          </a>
        </div>
        <p className="text-xs text-gray-500 mt-3">
          Built with ❤️ by Abdul Aziz
        </p>
      </div>
    </footer>
  );
};

export default Footer;
