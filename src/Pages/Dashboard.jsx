import React from 'react'
import Sidebar from '../Components/Sidebar'
import MovieDetails from '../Components/MovieDetails'

const Dashboard = () => {
  return (
    <main className='flex'>
        <Sidebar />
        <MovieDetails />
    </main>
  )
}

export default Dashboard