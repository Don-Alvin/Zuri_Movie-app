import { AiOutlineHome } from 'react-icons/ai'
import { BsCameraVideo } from 'react-icons/bs'
import { MdOndemandVideo } from 'react-icons/md'
import { SlCalender } from 'react-icons/sl'
import { GrLogout } from 'react-icons/gr'

const Sidebar = () => {
  return (
    <section className='hidden lg:block w-[20%] border-r-2 border-t-2 rounded-tr-[50px] rounded-br-[50px] border-gray-400 h-full '>
        <div className='flex items-center gap-2 mb-12 mt-10 px-8'>
          <img src='/images/logo.png' alt='logo' />
          <h2 className='font-bold text-2xl text-[#111827]'>MovieBox</h2>
        </div>
        <div>
          <div className='flex items-center gap-2 text-2xl font-semibold text-gray-500 px-8 py-6 hover:bg-[#fde6ec] cursor-pointer'>
            <AiOutlineHome />
            <span className="hover:text-[#be123c]">Home</span>
          </div>
          <div className='flex items-center gap-2 text-2xl font-semibold text-gray-500 px-8 py-6 hover:bg-[#fde6ec] cursor-pointer'>
            <BsCameraVideo />
            <span className="hover:text-[#be123c]">Movies</span>
          </div>
          <div className='flex items-center gap-2 text-2xl font-semibold text-gray-500 px-8 py-6 hover:bg-[#fde6ec] cursor-pointer'>
            <MdOndemandVideo />
            <span className="hover:text-[#be123c]">TV Series</span>
          </div>
          <div className='flex items-center gap-2 text-2xl font-semibold text-gray-500 px-8 py-6 hover:bg-[#fde6ec] cursor-pointer'>
            <SlCalender />
            <span className="hover:text-[#be123c]">Upcoming</span>
          </div>
        </div>
        <div className='mx-8 mt-8 w-36 flex flex-col border p-4 rounded gap-2 bg-[#fcf1f4] border-[#be123c]'>
          <p className='text-gray-700 text-sm'>Play movie quizzes and earn free tickets</p>
          <span className='text-gray-700 text-sm'>50k people are playing now</span>
          <a className='text-sm text-[#be123c] bg-[#f7afc1] rounded-xl text-center p-1'>Start playing</a>
        </div>
        <div className='mx-8 mt-4 mb-10 flex gap-2 items-center'>
          <GrLogout />
          <span className='font-semibold text-gray-600'>Logout</span>
        </div>
    </section>
  )
}

export default Sidebar