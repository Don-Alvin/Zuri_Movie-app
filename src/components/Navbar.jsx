import { useEffect, useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { HiMenuAlt4 } from 'react-icons/hi'
import { Link, useNavigate } from 'react-router-dom'
import useSearch from '../hooks/useSearch'
import { toast } from 'react-toastify'
import { doc, updateDoc } from 'firebase/firestore'
import { signOut } from 'firebase/auth'
import useAuth from '../hooks/useAuth'
import { auth, db } from '../api/firebase'
import MenuModal from './Modal/MenuModal'
import Search from './Search'

const Navbar = () => {

  const [isActive, setIsActive] = useState(false)
  const [isAuthMenuOpen, setIsAuthMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isSearchResults, setIsSearchResults] = useState(false)

  const { searchWord, setSearchWord } = useSearch()
  const { setUser, user } = useAuth()

  const navigate = useNavigate();

 const handleAuthMenu = () => {
    setIsAuthMenuOpen(!isAuthMenuOpen)
  }

  useEffect(() => {
    if(searchWord) setIsSearchOpen(true)
    if(!searchWord) setIsSearchOpen(false)
  }, [searchWord])

  const activeNavbar = () => {
    if(window.scrollY >= 80){
      setIsActive(true)
    }else setIsActive(false)
  }
  window.addEventListener("scroll", activeNavbar)

  const handleLogout = async () => {
    handleAuthMenu()
    const docRef = doc(db, "users", user.uid)
    try {
       await updateDoc(docRef, {
        online: false,
      })
        signOut(auth)
        setUser(null)
        navigate('/') 
    } catch (error) {
       throw new Error("Logout failed")
       toast.error("error.message") 
    }
    
  };

  const clearSearch = () => {
    setSearchWord('')
    setIsSearchOpen(false)
  }

  return (
    <nav className={`h-80px sticky top-0 bg-[#111827] z-10 flex items-center justify-between px-2 lg:px-14 py-3 w-full`}>
      {isSearchOpen && <div className='bg-black opacity-70 absolute inset-0 h-screen' onClick={clearSearch}></div>}
        <div className='flex items-center gap-2 lg:gap-[24px]'>
          <img className='w-[30px] h-[30px] lg:w-[50px] lg:h-[50px]' src='/images/logo.png' alt="logo" />
          <Link to='/' className='hidden lg:block lg:text-[24px] text-white font-bold'>MovieBox</Link>
        </div>
        <div className='flex flex-col w-[75%] lg:w-[40%] justify-between rounded relative'>
          <div className='flex w-full justify-between rounded border border-white'>
            <input 
              type="search" 
              className='outline-none p-1 w-[90%] bg-transparent text-white placeholder:text-white' 
              placeholder='What do you want to watch?'
              value={searchWord}
              onChange={(e) => setSearchWord(e.target.value)}
            />
            <button 
              type='button'
              className='w-6 p-1 mx-auto'
            >
              <AiOutlineSearch className='text-white flex items-center justify-center'/>
            </button>
          </div>
          {isSearchOpen && (
            <Search clearSearch={clearSearch} />
          )}
        </div>
        <div className='lg:flex gap-6 hidden'>
          <Link to='/movies' className='text-white font-semibold text-[18px]'>Movies</Link>
          <Link to='/tv' className='text-white font-semibold text-[18px]'>TV Shows</Link>
        </div>
        
        <div>
          <HiMenuAlt4
            className={` bg-[#be123c] rounded-full w-8 h-8 shadow text-white cursor-pointer`}
            onClick={() => handleAuthMenu()}
          />
        </div>
        {isAuthMenuOpen && ( 
          <MenuModal handleAuthMenu={handleAuthMenu} handleLogout={handleLogout}/>              
          )}
      </nav>
  )
}

export default Navbar