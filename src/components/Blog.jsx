import React from 'react'
import Navbar from './Navbar'
import SubscribeForm from './SubscribeForm'
import Footer from './Footer'

export default function Blog() {
    return(
        <div>
            <Navbar />
            <h1 className="text-3xl text-center p-[1rem] tablet:p-[2rem] mobile:text-4xl tablet:text-6xl">Blog</h1>
            <p className="p-4">Articles coming soon...</p>
            <SubscribeForm />
            <Footer />
        </div>
    )
}