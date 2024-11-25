import React from 'react'
import Hero from './Hero'
import Client from './Client'
import About from './About'
import Info from './Info'
import OurServices from './OurServices'

const Home = () => {
  return (
    <div>
        <Hero/>
        <Client/>
        <OurServices/>
        <About/>
        <Info/>
        </div>
  )
}

export default Home