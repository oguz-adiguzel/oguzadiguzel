'use client'
import { motion } from "framer-motion";


export default function Home({ menu }) {
  const container = {
    visible: {
      transition: {
        delayChildren:0.3,
        staggerChildren: 0.4,
      },
    },
  };
  const items = {
    hidden: { opacity: 0, translateY: 20 },
    visible: { opacity: 1, translateY: 0 },
  };

  return (
    <div className="w-full h-full">
      <div className={menu ? 'flex h-auto pt-0' : "flex flex-col lg:flex-row h-auto pt-5 lg:pt-40"}>
        <motion.div initial={{ opacity: 0, translateY: -200 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1 }} className={menu ? 'w-1/2 pt-3' : "w-full lg:w-1/2 pt-0 lg:pt-24"}>
          <p className={menu ? 'text-4xl font-bold ml-10 px-10' : "text-6xl font-bold px-5 lg:px-32 tracking-widest"}>I'm Frontend Developer</p>
          <a href="/cv/Oğuz-Adıgüzel.pdf" download="OĞUZ_ADIGÜZEL_CV.pdf" className={menu ? 'w-36 h-8 bg-blue-500 hover:w-32 duration-500 ease-in-out ml-20 cursor-pointer flex justify-end items-center mt-4' : "w-36 h-10 bg-blue-500 hover:w-32 duration-500 ease-in-out ml-5 lg:ml-32 flex justify-end items-center cursor-pointer mt-4"}>
            <p className="font-bold mr-1">Download CV</p>
          </a>
        </motion.div>
        <motion.div initial={{ opacity: 0, translateY: 100 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1 }} className="w-3/4 lg:w-1/2 mt-5 lg:mt-0 pr-20">
          <img className="w-full" src="home-image.png" />
        </motion.div>
      </div>
      <div className="w-full h-[.5px] bg-gray-600 mt-2">
        <div className="w-20 h-1 bg-blue-500 ml-10">

        </div>
      </div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={container} className={menu ? 'flex justify-around items-center mt-2 w-3/4 pl-24' : "flex justify-around space-x-5 items-center mt-5 w-full lg:w-3/4 lg:pl-10"}>
        <motion.div variants={items}>
          <img className={menu ? 'w-20' : "w-40"} src="React-icon.png" />
        </motion.div>
        <motion.div variants={items}>
          <img className={menu ? 'w-20' : "w-40"} src="nextjs.webp" />
        </motion.div>
        <motion.div variants={items}>
          <img className={menu ? 'w-20' : "w-56"} src="nodejs.png" />
        </motion.div>
        <motion.div variants={items}>
          <img className={menu ? 'w-20' : "w-40"} src="native.webp" />
        </motion.div>
        <motion.div variants={items}>
          <img className={menu ? 'w-20' : "w-40"} src="tailwind.png" />
        </motion.div>
        <motion.div variants={items}>
          <img className={menu ? 'w-20' : "w-40"} src="bootstrap.png" />
        </motion.div>
      </motion.div>
    </div>
  );
}
