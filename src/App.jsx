
// import { BrowserRouter as Route, Routes } from 'react-router-dom'
// import About from './components/About'
// import Blog from './components/Blog'
// import Pricing from './components/Pricing'
// import Contact from './components/Contact'
// import Home from './components/Home'
// import FrontFormSolo from './components/FrontFormSolo'


// function App() {

//   return (
//     <div>
      
//         <Routes>
//           <Route exact path="/" element={<Home />} />
//           <Route exact path="/about" element={<About />} />
//           <Route exact path="/blog" element={<Blog />} />
//           <Route exact path="/pricing" element={<Pricing />} />
//           <Route exact path="/contact" element={<Contact />} />
//           <Route exact path="/subscribe" element={<FrontFormSolo />} />
//         </Routes>
      
//     </div>
//   )
// }

// export default App








import { useRoutes } from 'react-router-dom'
import About from './components/About'
import Blog from './components/Blog'
import Pricing from './components/Pricing'
import Contact from './components/Contact'
import Home from './components/Home'
import FrontFormSolo from './components/FrontFormSolo'


function App() {


  const routes = useRoutes([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/about',
      element: <About />
    },
    {
      path: '/blog',
      element: <Blog />
    },
    {
      path: '/pricing',
      element: <Pricing />
    },
    {
      path: '/contact',
      element: <Contact />
    },
    {
      path: '/subscribe',
      element: <FrontFormSolo />
    }

])

  return (
    <div>
      {routes}
    </div>
  )
}

export default App


