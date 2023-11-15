import React from 'react'
import Header from '../components/Header'
import Featured from '../components/Featured'
import MetaData from '../components/Meta/MetaData'

const Home = () => {
  return (
    <section>
      <MetaData title={'Discover Movies and TV Shows'} />
      <Header />
      <Featured />
    </section>
  )
}

export default Home