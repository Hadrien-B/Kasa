import React from 'react'
import './about.css'
import Header from '../../components/Header/Header'
import AboutBanner from '../../components/Banner/AboutBanner'
import Collapse from '../../components/Collapse/Collapse'

const About = () => {
  return (
    <div>
      <Header />
      <AboutBanner />
      <Collapse />
    </div>
  )
}

export default About
