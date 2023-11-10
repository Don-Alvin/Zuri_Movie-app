import Hero from './Hero'
import Navbar from './Navbar'

const Header = () => {
  
  return (
    <header className=' h-[90vh] lg:h-[100vh]'>
        <Navbar />
        <Hero />
    </header>
  )
}

export default Header