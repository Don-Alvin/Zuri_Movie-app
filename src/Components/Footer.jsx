import React from 'react'
import { AiFillFacebook, AiFillInstagram, AiFillTwitterSquare, AiFillYoutube } from 'react-icons/ai'

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className='px-14 my-14 flex flex-col items-center gap-4'>
      <div className='flex justify-center'>
        <AiFillFacebook className='text-2xl text-[#111827]' />
        <AiFillInstagram className='text-2xl text-[#111827]' />
        <AiFillTwitterSquare className='text-2xl text-[#111827]' />
        <AiFillYoutube className='text-2xl text-[#111827]' />
      </div>
      <div className='flex justify-center items-center gap-3 text-[#111827]'>
        <span>Conditions of Use</span>
        <span>Privacy & Policy</span>
        <span>Press Room</span>
      </div>
      <span className='text-gray-700'>&copy; {year} MovieBox </span>
    </footer>
  )
}

export default Footer