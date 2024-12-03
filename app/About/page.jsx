"use client";
import React from "react";
import { motion } from "framer-motion";
import ModalImage from "react-modal-image";

const About = ({ menu }) => {
  const container = {
    visible: {
      transition: {
        delayChildren: 0.8,
        staggerChildren: 0.4,
      },
    },
  };
  const items = {
    hidden: { opacity: 0, translateY: -200 },
    visible: { opacity: 1, translateY: 0 },
  };
  return (
    <div className="w-full">
      <title>Oğuz Adıgüzel - About</title>
      <meta property="og:title" content="Oğuz Adıgüzel - About" key="title" />
      <div
        className={
          menu
            ? "w-full flex pt-0"
            : "w-full flex flex-col lg:flex-row lg:pt-14"
        }
      >
        <motion.div
          initial={{ opacity: 0, translateY: -200 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/2"
        >
          <p
            className={
              menu
                ? "text-2xl font-bold px-20 mt-10"
                : "text-3xl lg:text-6xl font-bold lg:px-36 mt-10 lg:mt-36 tracking-widest"
            }
          >
            My Certificate And Education
          </p>
          <p
            className={
              menu
                ? "text-xs mt-1 pl-20  "
                : "text-xs lg:text-sm mt-1 lg:px-36 tracking-widest"
            }
          >
            Hi! I'm Oğuz Adıgüzel, a Frontend Developer specializing in creating
            modern and user-friendly web interfaces using React, Next.js,
            Node.js.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/2"
        >
          <img className={menu ? "w-1/2" : ""} src="about-visual.png" />
        </motion.div>
      </div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={container}
        className={
          menu
            ? "w-full flex justify-around px-6"
            : "w-full grid grid-cols-2 gap-2 lg:flex lg:justify-around lg:px-20"
        }
      >
        <motion.div
          variants={items}
          className={
            menu
              ? "w-24 h-16 border-2 border-blue-500"
              : "lg:w-60 h-36 lg:h-44 border-8 border-blue-500"
          }
        >
          {/* <img className="w-full h-full" src="udemy.png" /> */}
          <ModalImage
            className="w-full h-full"
            small="udemy.png"
            large="udemy.png"
            alt="udemy"
            // hideDownload={true}
          />
        </motion.div>
        <motion.div
          variants={items}
          className={
            menu
              ? "w-24 h-16 border-2 border-blue-500"
              : "lg:w-60 h-36 lg:h-44 border-8 border-blue-500"
          }
        >
          {/* <img className="w-full h-full" src="bilgeadam1.jpeg" /> */}
          <ModalImage
            className="w-full h-full"
            small="bilgeadam1.jpeg"
            large="bilgeadam1.jpeg"
            alt="bilgeadam1"
            // hideDownload={true}
          />
        </motion.div>
        <motion.div
          variants={items}
          className={
            menu
              ? "w-24 h-16 border-2 border-blue-500"
              : "lg:w-60 h-36 lg:h-44 border-8 border-blue-500"
          }
        >
          {/* <img className="w-full h-full" src="bilgeadam2.jpeg" /> */}
          <ModalImage
            className="w-full h-full"
            small="bilgeadam2.jpeg"
            large="bilgeadam2.jpeg"
            alt="bilgeadam2"
            // hideDownload={true}
          />
        </motion.div>
        <motion.div
          variants={items}
          className={
            menu
              ? "w-24 h-16 border-2 border-blue-500"
              : "lg:w-60 h-36 lg:h-44 border-8 border-blue-500"
          }
        >
          {/* <img className='w-full h-full' src='diploma.png' /> */}
          <ModalImage
            className="w-full h-full"
            small="diploma.png"
            large="diploma.png"
            alt="diploma"
            // hideDownload={true}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
