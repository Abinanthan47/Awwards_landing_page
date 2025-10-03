import React from 'react'
import { BiArrowToBottom } from 'react-icons/bi'
import { TbArrowBadgeDownFilled } from 'react-icons/tb'

const Navbar = () => {
  return (
    <div className='absolute top-0 left-0 w-full z-50 px-10 py-3'>
        <div className='flex justify-between items-center'>
            <div className='flex items-center gap-2'>
                <img src="/img/logo.png" alt="logo" className='w-10 h-10' />
                <h1 className='text-2xl text-white uppercase font-zentry tracking-wide mix-blend-multiply '>Ze<b>n</b>try</h1>
                <button className='text-black bg-purple-200 p-1 rounded-xl uppercase font-robert-regular mix-blend-multiply font-semibold flex items-center gap-1 px-4 text-[10px] hover:bg-purple-300 transition-all duration-300 tracking-wide '>Products<TbArrowBadgeDownFilled  className='h-4 w-4'/></button>
                <button className='text-black bg-purple-200 p-1 rounded-xl uppercase font-robert-regular mix-blend-multiply font-semibold flex items-center gap-1 px-4 text-[10px] hover:bg-purple-300 transition-all duration-300 tracking-wide  '>Whitepaper <TbArrowBadgeDownFilled className='h-4 w-4'/></button>
            </div>
           <div className=' items-center gap-2 hidden md:flex'>
            <button className='text-white  uppercase font-robert-regular mix-blend-multiply font-semibold flex items-center gap-1 px-4 text-[12px]  '>Zterminal</button>
            <button className='text-white uppercase font-robert-regular mix-blend-multiply font-semibold flex items-center gap-1 px-4 text-[12px] tracking-wide '>About</button>
            <button className='text-white uppercase font-robert-regular mix-blend-multiply font-semibold flex items-center gap-1 px-4 text-[12px] tracking-wide '>Contact</button>
           </div>
        </div>
    </div>
  )
}

export default Navbar