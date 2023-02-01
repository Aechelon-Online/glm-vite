import { Routes, Route } from 'react-router-dom'
import About from './components/About'
import Blog from './components/Blog'
import Pricing from './components/Pricing'
import Contact from './components/Contact'
import Home from './components/Home'


function App() {

  return (
    <div className="relative">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/blog" element={<Blog />} />
        <Route exact path="/pricing" element={<Pricing />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
