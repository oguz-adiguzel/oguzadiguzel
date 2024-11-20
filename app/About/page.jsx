'use client'
import React from 'react'
import { motion } from "framer-motion";


const About = ({ menu }) => {
  const container = {
    visible: {
      transition: {
        delayChildren:0.8,
        staggerChildren: 0.4,
      },
    },
  };
  const items = {
    hidden: { opacity: 0, translateY: -200 },
    visible: { opacity: 1, translateY: 0 },
  };
  return (
    <div className='w-full'>
      <div className={menu ? 'w-full flex pt-0' : 'w-full flex pt-14'}>
        <motion.div initial={{ opacity: 0, translateY: -200 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1 }} className='w-1/2'>
          <p className={menu ? 'text-2xl font-bold px-20 mt-10' : 'text-6xl font-bold px-36 mt-36 tracking-widest'}>My Certificate And Education</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }} className='w-1/2'>
          <img className={menu ? 'w-1/2' : ''} src='about-visual.png' />
        </motion.div>
      </div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={container} className={menu ? 'w-full flex justify-around px-6' : 'w-full flex justify-around px-20'}>
        <motion.div variants={items} className={menu ? 'w-24 h-16 border-2 border-blue-500' : 'w-60 h-40 border-8 border-blue-500'}>
          <img className='w-full h-full' src='udemy.png' />
        </motion.div>
        <motion.div variants={items} className={menu ? 'w-24 h-16 border-2 border-blue-500' : 'w-60 h-40 border-8 border-blue-500'}>
          <img className='w-full h-full' src='bilgeadam1.jpeg' />
        </motion.div>
        <motion.div variants={items} className={menu ? 'w-24 h-16 border-2 border-blue-500' : 'w-60 h-40 border-8 border-blue-500'}>
          <img className='w-full h-full' src='bilgeadam2.jpeg' />
        </motion.div>
        <motion.div variants={items} className={menu ? 'w-24 h-16 border-2 border-blue-500' : 'w-60 h-40 border-8 border-blue-500'}>
          <img className='w-full h-full' src='diploma.png' />
        </motion.div>
      </motion.div>
    </div>

  )
}

export default About