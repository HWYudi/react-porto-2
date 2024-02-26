import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/section/Home'
import About from './components/section/About'
import Experience from './components/section/Experience'
import Service from './components/section/Service'
import Project from './components/section/Project'
import UpButton from './components/UpButton'

export default function App() {
  return (
    <div>
      <Navbar/>
      <section id='home'>
      <Home/>
      </section>
      <section id='about'>
        <About/>
      </section>
      <section id='experience'>
        <Experience/>
      </section>
      <section id='services'>
        <Service/>
      </section>
      <section id='project'>
        <Project/>
      </section>
      <UpButton/>
    </div>
  )
}
