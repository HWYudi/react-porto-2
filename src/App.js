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
      <UpButton/>
      <section>
      <Home/>
      </section>
      <section>
        <About/>
      </section>
      <section>
        <Experience/>
      </section>
      <section>
        <Service/>
      </section>
      <section>
        <Project/>
      </section>
    </div>
  )
}
