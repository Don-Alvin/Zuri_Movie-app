import { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { HiMenuAlt4 } from 'react-icons/hi'

const Navbar = () => {

  const [isActive, setIsActive] = useState(false)

  const activeNavbar = () => {
    if(window.scrollY >= 80){
      setIsActive(true)
    }else setIsActive(false)
  }
  window.addEventListener("scroll", activeNavbar)


  return (
    <nav className={`h-80px fixed z-50 flex items-center justify-between px-14 py-3 w-full ${isActive ? `bg-[#be123c]`: `bg-transparent`}`}>
        <div className='flex items-center gap-[24px]'>
          <img className='w-[50px] h-[50px]' src='/images/logo.png' alt="logo" />
          <h2 className='text-[24px] text-white font-bold'>MovieBox</h2>
        </div>
        <form className='border border-white rounded'>
          <input 
            type="text" 
            className='outline-none p-1 w-[400px] bg-transparent text-white placeholder:text-white placeholder:font-semibold' 
            placeholder='What do you want to watch?' 
          />
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
            className={`${isActive ? `bg-white` : `bg-[#BE123C]`} rounded-full w-8 h-8 shadow ${isActive ? `text-[#be123c]`: `text-white`}`}
          />
        </div>
      </nav>
  )
}

export default Navbar