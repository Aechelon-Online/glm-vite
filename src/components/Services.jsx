import React from 'react'
import djLogo from '../images/dj-arms.png'
import guitarLogo from '../images/guitar-logo.png'
import micLogo from '../images/mic-logo.png'
import danceFloorLogo from '../images/dance-lights-logo.png'



const Services = () => {
    return(
        <div className="text-black w-full grid grid-cols-1 smallTablet:grid-cols-2 laptop:grid-cols-4">
            <div className="bg-blue-200 h-[20vh] flex justify-center items-center smallTablet:h-[40vh] laptop:flex-col laptop:h-[50vh] laptop:justify-start">
                <div className="w-[30%] h-[100%] flex justify-center items-center text-[2rem] mobile:text-[2.625rem] smallTablet:flex-col smallTablet:text-[3rem] smallTablet:mb-2 laptop:flex-row laptop:mb-[-10px] laptop:w-[100%] laptop:h-[20vh]">DJ
                <img src={djLogo} className="w-[50px] mobile:w-[75px] smallTablet:w-[95px]" />
                </div>
                <p className="w-[60%] text-[0.75rem] px-2 mobile:text-[0.9rem] tablet:text-[1.125rem] laptop:w-[80%]">Creating a unique energetic atmosphere for you through a song list tailored to your specific desires.</p>
            </div>
            <div className="bg-blue-400 h-[20vh] flex justify-center items-center smallTablet:h-[40vh] laptop:flex-col laptop:h-[50vh] laptop:justify-start">
                <div className="w-[30%]  h-[100%] flex justify-center items-center text-[1.625rem] mobile:text-[2.25rem] smallTablet:flex-col smallTablet:text-[2.625rem] smallTablet:mb-3 laptop:flex-row laptop:mb-[-10px] laptop:w-[100%] laptop:h-[20vh] laptop:text-[3rem]">Live
                <img src={guitarLogo} className="w-[50px] mobile:w-[60px] smallTablet:w-[95px]" />
                </div>
                <p className="w-[60%] text-[0.75rem] px-2 mobile:text-[0.9rem] tablet:text-[1.125rem] laptop:w-[80%]">Performing to entertain you and your guests with a blend of acoustic and looping effects made to instill groove in your event.</p>
            </div>
            <div className="bg-blue-500 h-[20vh] flex justify-center items-center smallTablet:h-[40vh] laptop:flex-col laptop:h-[50vh] laptop:justify-start">
                <div className="w-[30%] h-[100%] flex justify-center items-center text-[1.75rem] mobile:text-[2.5rem] smallTablet:flex-col smallTablet:text-[3rem] smallTablet:mb-2 laptop:flex-row laptop:mb-[-10px] laptop:w-[100%] laptop:h-[20vh]">MC
                <img src={micLogo} className="w-[50px] mobile:w-[65px] smallTablet:w-[85px]" />
                </div>
                <p className="w-[60%] text-[0.75rem] px-2 mobile:text-[0.9rem] tablet:text-[1.125rem] laptop:w-[80%]">Guiding the event transitions and announcments and allowing your carefree enjoyment to be experienced to the fullest.</p>
            </div>
            <div className="bg-blue-300 h-[20vh] flex justify-center items-center smallTablet:h-[40vh] laptop:flex-col laptop:h-[50vh] laptop:justify-start">
                <div className="w-[30%] h-[100%] flex justify-center items-center text-[2rem] mobile:text-[2.625rem] smallTablet:flex-col smallTablet:text-[3rem] smallTablet:mb-2 laptop:flex-row laptop:mb-[-10px] laptop:w-[100%] laptop:h-[20vh]">FX
                <img src={danceFloorLogo} className="w-[60px] mobile:w-[75px] smallTablet:w-[100px]" />
                </div>
                <p className="w-[60%] text-[0.75rem] px-2 mobile:text-[0.9rem] tablet:text-[1.125rem] laptop:w-[80%]">Stepping up the ambience from laid-back to exciting and allowing you to relax share the experience.</p>
            </div>   
        </div>
    )
}

export default Services