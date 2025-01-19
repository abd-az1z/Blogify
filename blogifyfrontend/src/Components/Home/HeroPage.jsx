import { easeIn, motion } from "framer-motion";
import React from "react";
import AllBlogs from "../Pages/AllBlogs";

const HeroPage = () => {
  const letters = ["B", "L", "O", "G", "I", "F", "Y"];
  const words = ["Share", "Your", "Stories", "with", "the", "World"];

  const letterVariants = {
    hidden: { x: "-100vw", opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };
  const wordVariants = {
    hidden: { x: "0", opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  const wordContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <>
      <div className="w-full h-[80vh] ">
        <div className="w-full h-[80%] flex flex-col items-center justify-center">
          <motion.div
            className="flex"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {letters.map((letter, index) => (
              <motion.h1
                key={index}
                variants={letterVariants}
                transition={{
                  type: "tween",
                  duration: 0.8,
                  ease: "easeOut",
                }}
                className="text-8xl font-semibold tracking-wider"
              >
                {letter}
              </motion.h1>
            ))}
          </motion.div>

          <motion.div
            className="flex"
            variants={wordContainerVariants}
            initial="hidden"
            animate="visible"
          >
            {words.map((word, index) => (
              <motion.p
                key={index}
                variants={wordVariants}
                transition={{ type: "tween", duration: "1", ease: "easeInOut" }}
                className="text-2xl mx-2 tracking-wider"
              >
                {word}
              </motion.p>
            ))}
          </motion.div>
        </div>
        <motion.div
          initial={{ y: "-100%", opacity: 0 }} // Fully visible, off-screen at the top
          animate={{ y: "0", opacity: 1 }} // Moves to on-screen position and fades out
          transition={{
            duration: 2, // Animation duration
            ease: "easeIn", // Smooth easing effect
          }}
          className="text-center"
        >
          <p className="text-lg text-gray-400">
            Write, edit, and share your blogs effortlessly on Blogify. A
            platform built for writers, creators, and dreamers.
          </p>
        </motion.div>
      </div>
      <div>
        <AllBlogs />
      </div>
    </>
  );
};

export default HeroPage;
