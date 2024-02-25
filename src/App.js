import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/section/Home'
import About from './components/section/About'
import Experience from './components/section/Experience'

export default function App() {
  return (
    <div>
      <Navbar/>
      <section>
      <Home/>
      </section>
      <section>
        <About/>
      </section>
      <section>
        <Experience/>
      </section>
    </div>
  )
}
