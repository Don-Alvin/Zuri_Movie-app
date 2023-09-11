import {AiOutlineSearch} from 'react-icons/ai'
import {HiMenuAlt4} from 'react-icons/hi'
import Hero from './Hero'
import Navbar from './Navbar'

const Header = () => {
  
  return (
    <header className='lg:h-[100vh]'>
        <Navbar />
        <Hero />
    </header>
  )
}

export default Header