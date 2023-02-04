import React, { useState } from 'react'
import videoDance from '../images/wedding-dance-full-clip.mp4'
import FrontForm from './FrontForm'


const Hero = () => {
    
    return(
        <div className="w-[100%] h-[65vh] min-h-[450px] mobile:h-[65vh] tablet:h-[85vh] relative flex justify-center">
            
            <video className="w-[100%] h-[100%] md:h-[80%] object-cover" src={videoDance} autoPlay loop muted playsInline />
            <div className="absolute w-full h-[100%] md:h-[80%] bg-black/40 z-[0] overflow-hidden flex justify-center items-center">
            <h1 className="text-white absolute leading-[2rem] mobile:leading-[2.5rem] text-center text-[1.25rem] mobile:text-[1.625rem] smallTablet:text-[2.25rem] tablet:text-[2rem] laptop:text-[2.75rem] z-[10]">ELEVATE YOUR EVENT TO <span className="font-bold text-[1.75rem] mobile:text-[2.25rem] smallTablet:text-[2.75rem] tablet:text-[2.5rem] laptop:text-[3.25rem] text-transparent bg-clip-text bg-gradient-to-tr from-red-400 to-yellow-300">EXTRAORDINARY.</span></h1>
            </div>
            <FrontForm />
        </div>
        
    )
}

export default Hero