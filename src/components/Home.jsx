import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Services from './Services'
import LandingArticle from './LandingArticle'
import SubscribeForm from './SubscribeForm'
import Footer from './Footer'

const Home = () => {
    return(
        <div>
            <Navbar />
            <Hero />
            <Services />
            <LandingArticle />
            <SubscribeForm />
            <Footer />
        </div>
    )
}

export default Home