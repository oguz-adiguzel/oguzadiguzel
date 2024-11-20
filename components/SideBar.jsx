'use client'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'

const SideBar = ({menu}) => {
    const router = useRouter()
    const pathname = usePathname()
    return (
        <div className={menu ? 'w-full h-full flex py-5' : 'w-full h-full flex py-40'}>
            <div className={'flex flex-col items-end justify-around mr-3'}>
                <div className={pathname === '/' ? 'visible' : 'invisible'} >01</div>
                <div className={pathname === '/Works' ? 'visible' : 'invisible'} >02</div>
                <div className={pathname === '/About' ? 'visible' : 'invisible'}>03</div>
                <div className={pathname === '/Contact' ? 'visible' : 'invisible'}>04</div>
                <div className={pathname === '/HireUs' ? 'visible' : 'invisible'}>05</div>
            </div>
            <div className='w-[2px] h-full bg-gray-600 flex flex-col justify-around'>
                <div className={pathname === '/' ? 'w-full h-1 bg-blue-500' : 'w-full h-1 bg-white'}></div>
                <div className={pathname === '/Works' ? 'w-full h-1 bg-blue-500' : 'w-full h-1 bg-white'}></div>
                <div className={pathname === '/About' ? 'w-full h-1 bg-blue-500' : 'w-full h-1 bg-white'}></div>
                <div className={pathname === '/Contact' ? 'w-full h-1 bg-blue-500' : 'w-full h-1 bg-white'}></div>
                <div className={pathname === '/HireUs' ? 'w-full h-1 bg-blue-500' : 'w-full h-1 bg-white'}></div>
            </div>
            <div className='flex flex-col justify-around items-start ml-3'>
                <div className='flex'>
                    <div className={pathname === '/' ? 'block' : 'hidden'}>Home</div>
                    <div className={pathname === '/' ? 'invisible' : 'visible cursor-pointer text-gray-500'} onClick={() => router.push('/')}>01</div>
                </div>
                <div className='flex'>
                    <div className={pathname === '/Works' ? 'block' : 'hidden'}>Works</div>
                    <div className={pathname === '/Works' ? 'invisible' : 'visible cursor-pointer text-gray-500'} onClick={() => router.push('/Works')}>02</div>
                </div>
                <div className='flex'>
                    <div className={pathname === '/About' ? 'block' : 'hidden'}>About</div>
                    <div className={pathname === '/About' ? 'invisible' : 'visible cursor-pointer text-gray-500'} onClick={() => router.push('/About')}>03</div>
                </div>
                <div className='flex'>
                    <div className={pathname === '/Contact' ? 'block' : 'hidden'}>Contact</div>
                    <div className={pathname === '/Contact' ? 'invisible' : 'visible cursor-pointer text-gray-500'} onClick={() => router.push('/Contact')}>04</div>
                </div>
                <div className='flex'>
                    <div className={pathname === '/HireUs' ? 'block' : 'hidden'}>Project</div>
                    <div className={pathname === '/HireUs' ? 'invisible' : 'visible cursor-pointer text-gray-500'} onClick={() => router.push('/HireUs')}>05</div>
                </div>

            </div>
        </div>
    )
}

export default SideBar