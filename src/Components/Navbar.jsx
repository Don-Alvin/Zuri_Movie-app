import { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { HiMenuAlt4 } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'
import useSearch from '../hooks/useSearch'

const Navbar = () => {

  const [isActive, setIsActive] = useState(false)

  const { searchWord, setSearchWord } = useSearch()

  const handleSearchInputChange = (e) => {
    const inputText = e.target.value;
    setSearchWord(inputText)
  };

  const activeNavbar = () => {
    if(window.scrollY >= 80){
      setIsActive(true)
    }else setIsActive(false)
  }
  window.addEventListener("scroll", activeNavbar)

  return (
    <nav className={`h-80px fixed z-50 flex items-center justify-between px-6 lg:px-14 py-3 w-full ${isActive ? `bg-[#111827]`: `bg-transparent`}`}>
        <div className='hidden lg:flex items-center  gap-2 lg:gap-[24px]'>
          <img className='w-[50px] h-[50px]' src='/images/logo.png' alt="logo" />
          <h2 className='text-[24px] text-white font-bold'>MovieBox</h2>
        </div>
        <div className='flex w-[85%] lg:w-[40%] justify-between border border-white rounded'>
          <input 
            type="search" 
            className='outline-none p-1 w-[90%] bg-transparent text-white placeholder:text-white' 
            placeholder='What do you want to watch?'
            value={searchWord}
            onChange={handleSearchInputChange}
          />
          <button 
            type='button'
            className='w-6 p-1 mx-auto'
          >
            <AiOutlineSearch className='text-white flex items-center justify-center'/>
          </button>
        </div>
        <div className='flex items-center gap-2'>
          <span className='hidden lg:block text-white font-semibold'>Sign in</span>
          <HiMenuAlt4
            className={` bg-[#be123c] rounded-full w-8 h-8 shadow text-white`}
          />
        </div>
      </nav>
  )
}

export default Navbar