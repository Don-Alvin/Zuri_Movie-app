import { Outlet } from 'react-router-dom'
import Footer from '../Footer'
import Navbar from '../Navbar'

const Layout = () => {
  return (
    <main className='flex flex-col min-h-screen'>
        <Navbar />
        <section className='flex-grow'>
            <Outlet />
        </section>
        <Footer />
    </main>
  )
}

export default Layout