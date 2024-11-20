'use client'
import React from 'react'
import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, EffectCube } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-cube';
import { useSelectIndex } from '../context/selectedIndex';

const Works = ({ menu, propIndex }) => {
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
  const { works, setWorks } = useSelectIndex();

  console.log('works', works);

  return (
    <div className='w-full'>
      <div className={menu ? 'w-full flex justify-center pt-0' : 'w-full flex justify-center pt-14'}>
        <motion.div initial={{ opacity: 0, translateY: -200 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1 }} className='w-1/2'>
          <p className={menu ? 'text-2xl font-bold px-20' : 'text-6xl font-bold px-36 mt-36 tracking-widest'}>My Works</p>
        </motion.div>
      </div>


      <Swiper
        className={menu ? 'mt-3' : 'mt-24'}
        spaceBetween={50}
        slidesPerView={1}
        modules={[Navigation, Pagination, Scrollbar, A11y, EffectCube]}
        navigation
        // pagination={{ clickable: true }}
        effect={'cube'}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        grabCursor={true}
        onRealIndexChange={(element) => setWorks(element.activeIndex)}
        initialSlide={menu ? propIndex : works}

      >
        <SwiperSlide>
          <div className='w-full flex flex-col items-center'>
            <div className={menu ? 'w-44 h-44 border-8 rounded-full border-blue-500' : 'w-80 h-80 border-8 rounded-full border-blue-500'}>
              <img className='w-full h-full rounded-full' src='bilgeadamLogo.jpg' />
            </div>
            <p className='mt-3 text-2xl font-bold'>BilgeAdam Teknoloji</p>
            <p className='text-sm  mt-2'>Frontend Developer Intern</p>
            <p className='text-sm text-gray-500'>Ocak/2022 - Ekim/2022</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-full flex flex-col items-center'>
            <div className={menu ? 'w-44 h-44 border-8 border-blue-500 rounded-full' : 'w-80 h-80 border-8 border-blue-500 rounded-full'}>
                <img className='w-full h-full rounded-full' src='movell.jpeg' />
            </div>
            <p className='mt-3 text-2xl font-bold'>Movell İleri Teknoloji Bilişim A.Ş</p>
            <p className='text-sm  mt-2'>Frontend Developer</p>
            <p className='text-sm text-gray-500'>Nisan/2023 - Aralık/2023</p>
          </div>
        </SwiperSlide>
       
        

      </Swiper>


    </div>
  )
}

export default Works