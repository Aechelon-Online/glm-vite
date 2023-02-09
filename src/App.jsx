import { Routes, Route } from 'react-router-dom'
import About from './components/About'
import Blog from './components/Blog'
import Pricing from './components/Pricing'
import Contact from './components/Contact'
import Home from './components/Home'
import FrontFormSolo from './components/FrontFormSolo'


function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
