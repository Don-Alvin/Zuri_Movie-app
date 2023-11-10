import React from 'react'
import Sidebar from '../components/Sidebar'
import MovieDetails from '../components/MovieDetails'

const Dashboard = () => {
  return (
    <main className='flex'>
        <Sidebar />
        <MovieDetails />
    </main>
  )
}

export default Dashboard