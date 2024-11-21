import React from 'react'

const Contact = ({ menu }) => {
  return (
    <div className={menu ? 'bg-contact-bg w-full h-[300px] bg-cover' : 'w-full h-[650px] mt-10 lg:mt-40 bg-contact-bg bg-cover'}>
      <div className='w-full h-full bg-[#000000e8] flex justify-center lg:justify-end lg:pr-20 items-center'>
        <div className={menu ? 'w-1/3 bg-black py-4' : 'w-3/4 lg:w-1/4 py-16 bg-black'}>
          <p className={menu ? 'text-center text-sm' : 'text-center text-xl'}>Oğuz Adıgüzel</p>
          <p className={menu ? 'text-center text-xs mt-1' : 'text-center text-xl mt-1'}>Eskişehir</p>
          <p className={menu ? 'text-center text-xs mt-1' : 'text-center text-xl mt-2'}>oguz_adiguzel@outlook.com</p>
          <p className={menu ? 'text-center text-xs mt-1' : 'text-center text-xl mt-2'}>+90 552 428 9743</p>
          <div className={menu ? 'flex w-full justify-around mt-5' : 'flex w-full justify-around mt-8 px-10'}>
            <a href='https://www.linkedin.com/in/oğuz-adıgüzel/' target='_blanck'>
              <img className={menu ? 'w-10 h-10' : 'w-14'} src='linkedin.png' />
            </a>
            <a href='https://github.com/oguz-adiguzel' target='_blanck'>
              <img className={menu ? 'w-10 h-10' : 'w-14'} src='github.png' />
            </a>
            <a href="mailto:oguz_adiguzel@outlook.com">
              <img className={menu ? 'w-10 h-10' : 'w-14'} src='outlook.png' />
            </a>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Contact