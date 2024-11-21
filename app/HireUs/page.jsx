'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, EffectCube } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-cube';
import { useSelectIndex } from '../context/selectedIndex';


const HireUs = ({ menu , propIndex}) => {
  const { index, setIndex } = useSelectIndex();
  
  return (

    <div className={menu ? 'w-full h-full' : 'w-full h-full pt-10 lg:pt-32'}>
      <p className={menu ? 'text-lg text-center font-bold tracking-widest' : 'text-4xl text-center font-bold tracking-widest'}>My Project</p>
      <Swiper
        className={menu ? 'mt-10' : 'mt-24'}
        spaceBetween={50}
        slidesPerView={1}
        modules={[Navigation, Pagination, Scrollbar, A11y, EffectCube]}
        navigation
        pagination={{ clickable: true }}
        effect={'cube'}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        grabCursor={true}
        onRealIndexChange={(element)=>setIndex(element.activeIndex)}
        initialSlide={menu ? propIndex : index}

      >
        <SwiperSlide>
          <div className='w-full flex justify-center'>
            <div className={menu ? 'w-1/2 h-44 border-8 border-blue-500' : 'w-full lg:w-1/2 h-96 border-8 border-blue-500'}>
              <a href={menu ? '/HireUs' : 'https://damaskoholding.com'} target='_blanck'>
                <img className='w-full h-full' src='damasko.png' />
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-full flex justify-center'>
            <div className={menu ? 'w-1/2 h-44 border-8 border-blue-500' : 'w-full lg:w-1/2 h-96 border-8 border-blue-500'}>
              <a href={menu ? '/HireUs' : 'http://movellyazilim.com'} target='_blanck'>
                <img className='w-full h-full' src='movell.png' />
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-full flex justify-center'>
            <div className={menu ? 'w-1/2 h-44 border-8 border-blue-500' : 'w-full lg:w-1/2 h-96 border-8 border-blue-500'}>
              <a href={menu ? '/HireUs' : 'http://cqu.com.tr'} target='_blanck'>
                <img className='w-full h-full' src='cqu.png' />
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-full flex justify-center'>
            <div className={menu ? 'w-1/2 h-44 border-8 border-blue-500' : 'w-full lg:w-1/2 h-96 border-8 border-blue-500'}>
              <a href={menu ? '/HireUs' : 'https://www.movell.com.tr'} target='_blanck'>
                <img className='w-full h-full' src='movelland.png' />
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-full flex justify-center'>
            <div className={menu ? 'w-1/2 h-44 border-8 border-blue-500' : 'w-full lg:w-1/2 h-96 border-8 border-blue-500'}>
              <a href={menu ? '/HireUs' : 'https://satici.movell.com.tr/'} target='_blanck'>
                <img className='w-full h-full' src='merchant.png' />
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-full flex justify-center'>
            <div className={menu ? 'w-1/2 h-44 border-8 border-blue-500' : 'w-full lg:w-1/2 h-96 border-8 border-blue-500'}>
              <a href={menu ? '/HireUs' : 'https://admin.movell.com.tr/'} target='_blanck'>
                <img className='w-full h-full' src='admin.png' />
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-full flex justify-center'>
            <div className={menu ? 'w-1/2 h-44 border-8 border-blue-500' : 'w-full lg:w-1/2 h-96 border-8 border-blue-500'}>
              <a href={menu ? '/HireUs' : 'https://dental-appointment-api.onrender.com/'} target='_blanck'>
                <img className='w-full h-full' src='dental-api.png' />
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-full flex justify-center'>
            <div className={menu ? 'w-1/2 h-44 border-8 border-blue-500' : 'w-full lg:w-1/2 h-96 border-8 border-blue-500'}>
              <a href={menu ? '/HireUs' : 'https://dental-appointment-system-ten.vercel.app'} target='_blanck'>
                <img className='w-full h-full' src='dental-website.png' />
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-full flex justify-center'>
            <div className={menu ? 'w-1/2 h-44 border-8 border-blue-500' : 'w-full lg:w-1/2 h-96 border-8 border-blue-500'}>
              <a href={menu ? '/HireUs' : 'https://dental-appointment-system-ten.vercel.app/admin'} target='_blanck'>
                <img className='w-full h-full' src='dental-admin.png' />
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-full flex justify-center'>
            <div className={menu ? 'w-1/2 h-44 border-8 border-blue-500' : 'w-full lg:w-1/2 h-96 border-8 border-blue-500'}>
              <a href={menu ? '/HireUs' : 'https://github.com/oguz-adiguzel/Educal-Mobile-App'} target='_blanck'>
                <img className='w-full h-full' src='educal-app.png' />
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-full flex justify-center'>
            <div className={menu ? 'w-1/2 h-44 border-8 border-blue-500' : 'w-full lg:w-1/2 h-96 border-8 border-blue-500'}>
              <a href={menu ? '/HireUs' : 'https://educal-client.vercel.app/'} target='_blanck'>
                <img className='w-full h-full' src='educal-website.png' />
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-full flex justify-center'>
            <div className={menu ? 'w-1/2 h-44 border-8 border-blue-500' : 'w-full lg:w-1/2 h-96 border-8 border-blue-500'}>
              <a href={menu ? '/HireUs' : 'https://github.com/oguz-adiguzel/educal-api'} target='_blanck'>
                <img className='w-full h-full' src='educal-api.png' />
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-full flex justify-center'>
            <div className={menu ? 'w-1/2 h-44 border-8 border-blue-500' : 'w-full lg:w-1/2 h-96 border-8 border-blue-500'}>
              <a href={menu ? '/HireUs' : 'https://github.com/oguz-adiguzel/Angular-Nodejs-Login-Example'} target='_blanck'>
                <img className='w-full h-full' src='angular-login.png' />
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-full flex justify-center'>
            <div className={menu ? 'w-1/2 h-44 border-8 border-blue-500' : 'w-full lg:w-1/2 h-96 border-8 border-blue-500'}>
              <a href={menu ? '/HireUs' : 'https://github.com/oguz-adiguzel/Transport-ui'} target='_blanck'>
                <img className='w-full h-full' src='globeFarer.png' />
              </a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default HireUs