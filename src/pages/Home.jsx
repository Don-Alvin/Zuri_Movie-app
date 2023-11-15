import React from 'react'
import Header from '../components/Header'
import Featured from '../components/Featured'
import Footer from '../components/Footer'
import MetaData from '../components/Meta/MetaData'

const Home = () => {
  return (
    <section>
      <MetaData title={'Discover Movies and TV Shows'} />
      <Header />
      <Featured />
      <Footer />
    </section>
  )
}

export default Home