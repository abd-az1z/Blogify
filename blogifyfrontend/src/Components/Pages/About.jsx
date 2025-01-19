import React from "react";

const About = () => {
  return (
    <div className=" text-white min-h-screen flex flex-col items-center py-10 px-5">
      <h1 className="text-4xl font-bold mb-6">About Blogify</h1>
      <p className="text-lg text-gray-300 text-center max-w-3xl mb-8">
        Welcome to <span className="text-blue-400">Blogify</span>, your go-to
        platform for sharing and exploring ideas, stories, and insights. We
        believe that every individual has a unique perspective to share, and
        Blogify is here to amplify your voice to a global audience.
      </p>
      <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-10">
        <div className="border p-6 rounded-lg shadow-lg max-w-sm">
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-300">
            Our mission is to provide a creative and inclusive space for
            bloggers, writers, and creators to express themselves and connect
            with like-minded individuals around the world.
          </p>
        </div>
        <div className="border p-6 rounded-lg shadow-lg max-w-sm">
          <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
          <p className="text-gray-300">
            We aim to build a community where knowledge, creativity, and
            collaboration thrive, inspiring people to share and learn in an
            ever-evolving digital landscape.
          </p>
        </div>
      </div>
      <div className="mt-10">
        <h3 className="text-xl text-center font-bold mb-4">Get in Touch</h3>
        <p className="text-gray-300 text-center max-w-xl">
          Have questions, feedback, or ideas? We'd love to hear from you!
          Contact us at{" "}
          <a
            href="mailto:support@blogify.com"
            className="text-blue-400 hover:underline"
          >
            support@blogify.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default About;
