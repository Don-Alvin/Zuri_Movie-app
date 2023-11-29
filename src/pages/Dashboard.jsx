import React from 'react'
import Sidebar from '../components/Sidebar'
import { useParams } from 'react-router-dom'

const Dashboard = () => {

  const{ params } = useParams()
  
  return (
    <main className='flex'>
        <Sidebar />
    </main>
  )
}

export default Dashboard