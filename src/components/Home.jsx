import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Services from './Services'
import SubscribeForm from './SubscribeForm'
import Footer from './Footer'

const Home = () => {
    return(
        <div>
            <Navbar />
            <Hero />
            <Services />
            <SubscribeForm />
            <Footer />
        </div>
    )
}

export default Home