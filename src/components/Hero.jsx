import React, { useState } from 'react'
import videoDance from '../images/wedding-dance-full-clip.mp4'

const Hero = () => {
    
    return(
        <div className="w-[100%] h-[50vh] tablet:h-[80vh] relative flex justify-center">
            
            <video className="w-[100%] h-[100%] md:h-[80%] object-cover" src={videoDance} autoPlay loop muted/>
            <div className="absolute w-full h-[100%] md:h-[80%] bg-black/40 z-[0] overflow-hidden flex justify-center items-center">
            <p className="text-white absolute text-[0.8rem] smallMobile:text-[1.1rem] mobile:text-[1.4rem] smallTablet:text-[1.75rem] tablet:text-[2.25rem] laptop:text-[3rem] z-[10]">ELEVATE YOUR EVENT TO EXTRAORDINARY.</p>
            </div>

        </div>
    )
}

export default Hero