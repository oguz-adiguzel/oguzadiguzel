'use client'
import React, { useState } from 'react'
import SideBar from './SideBar';
import { useParams, usePathname, useRouter } from 'next/navigation'
import Home from '@/app/page';
import About from '@/app/About/page';
import Contact from '@/app/Contact/page';
import Works from '@/app/Works/page';
import HireUs from '@/app/HireUs/page';
import { AnimatePresence, motion } from 'framer-motion';
import { useSelectIndex } from '@/app/context/selectedIndex';


const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  const router = useRouter()
  const pathname = usePathname()

  const { index, setIndex , works} = useSelectIndex();

  return (
    <div className='w-full'>
      <AnimatePresence >

        {
          toggleMenu && <motion.tr
            // style={{ backgroundColor: "#f8f8f8" }}
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 0, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className='w-full absolute left-0 h-screen bg-black z-10'>
            <div className='w-full lg:container mx-auto h-screen flex flex-col lg:flex-row'>
              <div className='w-1/2 hidden lg:flex h-full justify-center items-center'>
                <div onClick={() => setToggleMenu(!toggleMenu)} className='w-full h-[450px] transform skew-y-3 border-8 border-blue-500 cursor-pointer'>
                  <div className='w-full px-2'>
                    <Header />
                  </div>
                  <div className='w-full flex h-80 px-2'>
                    <div className='w-full lg:w-1/6'>
                      <SideBar menu={true} />
                    </div>
                    <div className='w-5/6'>
                      {
                        pathname === '/' && <Home menu={toggleMenu} />
                      }
                      {
                        pathname === '/About' && <About menu={toggleMenu} />
                      }
                      {
                        pathname === '/Contact' && <Contact menu={toggleMenu} />
                      }
                      {
                        pathname === '/Works' && <Works menu={toggleMenu} propIndex={works} />
                      }
                      {
                        pathname === '/HireUs' && <HireUs menu={toggleMenu} propIndex={index}/>
                      }
                    </div>
                  </div>
                </div>
              </div>
              <div className='w-full lg:w-1/2 flex flex-col space-y-10 h-full justify-center items-center'>
                <p onClick={() => {
                  router.push('/')
                  setToggleMenu(!toggleMenu)
                }} className={pathname === '/' ? 'cursor-pointer text-6xl font-bold line-through decoration-blue-500 decoration-8' : 'cursor-pointer text-6xl font-bold'}>Home</p>
                <p onClick={() => {
                  router.push('/Works')
                  setToggleMenu(!toggleMenu)
                }} className={pathname === '/Works' ? 'cursor-pointer text-6xl font-bold line-through decoration-blue-500 decoration-8' : 'cursor-pointer text-6xl font-bold'}>Works</p>
                <p onClick={() => {
                  router.push('/About')
                  setToggleMenu(!toggleMenu)
                }} className={pathname === '/About' ? 'cursor-pointer text-6xl font-bold line-through decoration-blue-500 decoration-8' : 'cursor-pointer text-6xl font-bold'}>About</p>
                <p onClick={() => {
                  router.push('/Contact')
                  setToggleMenu(!toggleMenu)
                }} className={pathname === '/Contact' ? 'cursor-pointer text-6xl font-bold line-through decoration-blue-500 decoration-8' : 'cursor-pointer text-6xl font-bold'}>Contact</p>
                <p onClick={() => {
                  router.push('/HireUs')
                  setToggleMenu(!toggleMenu)
                }} className={pathname === '/HireUs' ? 'cursor-pointer text-6xl font-bold line-through decoration-blue-500 decoration-8' : 'cursor-pointer text-6xl font-bold'}>Project</p>
              </div>
            </div>
          </motion.tr>
        }
      </AnimatePresence>
      <div className='w-full flex justify-between items-center py-3'>
        <img className='w-24' src='logo-yeni.png' />
        <div onClick={() => setToggleMenu(!toggleMenu)} className='w-8 flex flex-col items-center cursor-pointer pr-5 lg:pr-0'>
          <div className='w-7 h-[2px] bg-white rounded-full'></div>
          <div className='w-6 h-[2px] bg-white rounded-full mt-1'></div>
          <div className='w-7 h-[2px] bg-white rounded-full mt-1'></div>
        </div>
      </div>
    </div>

  )
}

export default Header