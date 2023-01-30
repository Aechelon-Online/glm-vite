import { useState } from 'react'
import Hero from './components/Hero'
import NavBar from './components/NavBar'
import Services from './components/Services'

function App() {

  return (
    <div className="relative">
      <NavBar />
      <Hero />
      <Services />
    </div>
  )
}

export default App
