import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { HiMenuAlt4 } from 'react-icons/hi'

const Navbar = () => {
  return (
    <nav className='h-80px bg-transparent fixed z-50 flex items-center justify-between px-14 py-3 w-full'>
        <div className='flex items-center gap-[24px]'>
          <img className='w-[50px] h-[50px]' src='/images/logo.png' alt="logo" />
          <h2 className='text-[24px] text-white font-bold'>MovieBox</h2>
        </div>
        <form className='border border-white rounded'>
          <input type="text" className='p-1 w-[400px] bg-transparent text-white placeholder:text-white placeholder:font-semibold' placeholder='What do you want to watch?' />
          <button 
            type='submit'
            className='w-6 p-1 mx-auto'
          >
            <AiOutlineSearch className='text-white flex items-center justify-center'/>
          </button>
        </form>
        <div className='flex items-center gap-2'>
          <span className='text-white font-semibold'>Sign in</span>
          <HiMenuAlt4
            className='bg-[#BE123C] rounded-full w-8 h-8 shadow text-white'
          />
        </div>
      </nav>
  )
}

export default Navbar