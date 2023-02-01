import React from 'react'
import Navbar from './Navbar'
import SubscribeForm from './SubscribeForm'
import Footer from './Footer'
import danceParty from '../images/dance-party-group.jpg'

export default function About() {
    return(
        <div>
            <Navbar />
            <h1 className="text-3xl text-center p-[1rem] tablet:p-[2rem] mobile:text-4xl tablet:text-6xl">About</h1>
            <div className="flex flex-col tablet:flex-row tablet:justify-center">
                <img className="tablet:max-w-[50%] tablet:object-cover" src={danceParty} />
                <p className="p-[2rem] text-[0.75rem] border-solid border-2 border-black tablet:my-auto mobile:text-[1rem] tablet:text-[1.25rem]">When it comes to finding the right entertainment for your event, it's important to ensure that your needs are met and exceed your expectations. Greg Luce Music is a professional and experienced DJ  and solo musician that has a strong commitment to providing a customized experience for each client. Understanding what the crowd wants and playing music that will keep everyone engaged and on the dance floor is the utmost priority. With state-of-the-art sound and lighting equipment, Greg Luce Music guarantees that the music will sound incredible and the atmosphere will be set just right. Having an extensive music library, a wide range of genres and eras is covered, ensuring that any musical taste and preference is catered to. Greg Luce Music's top priority is customer satisfaction, and will work closely with you to create the perfect playlist and event atmosphere that meets your specific needs and preferences. You can be confident that your event will be a memorable and unforgettable experience that fulfills the vision for the event that you conceived.</p>
            </div>
            <SubscribeForm />
            <Footer />
        </div>
    )
}