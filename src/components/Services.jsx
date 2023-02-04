import React from 'react'
import djLogo from '../images/dj-arms.png'
import guitarLogo from '../images/guitar-logo.png'
import micLogo from '../images/mic-logo.png'
import danceFloorLogo from '../images/dance-lights-logo.png'



const Services = () => {
    return(
        <div className="text-black w-full grid grid-cols-1 smallTablet:grid-cols-2 laptop:grid-cols-4 laptop:h-[375px]">
            <div className="bg-blue-200 min-h-[150px] flex justify-center items-center pl-2 smallTablet:min-h-[150px] h-[40vh] laptop:flex-col laptop:h-[375px] laptop:justify-start">
                <div className="w-[30%] h-[100%] flex justify-center items-center text-[2.25rem] smallTablet:flex-col smallMobile:text-[3rem] smallTablet:mb-2 laptop:flex-row laptop:mb-[-10px] laptop:w-[100%] laptop:h-[20vh]">DJ
                <img src={djLogo} className="w-[65px] smallMobile:w-[85px]" />
                </div>
                <p className="w-[60%] text-[0.75rem] px-4 smallMobile:text-[0.9rem] tablet:text-[1.125rem] laptop:w-[80%]">Creating a unique energetic atmosphere for you through a song list tailored to your specific desires.</p>
            </div>
            <div className="bg-blue-400 min-h-[150px] pl-2 flex justify-center items-center smallTablet:min-h-[150px] h-[40vh] laptop:flex-col laptop:h-[375px] laptop:justify-start">
                <div className="w-[30%]  h-[100%] flex justify-center items-center text-[2rem] smallTablet:flex-col smallMobile:text-[2.625rem] smallTablet:mb-3 laptop:flex-row laptop:mb-[-10px] laptop:w-[100%] laptop:h-[20vh] laptop:text-[3rem]">Live
                <img src={guitarLogo} className="w-[50px] smallMobile:w-[60px] smallTablet:w-[95px]" />
                </div>
                <p className="w-[60%] text-[0.75rem] px-4 smallMobile:text-[0.9rem] tablet:text-[1.125rem] laptop:w-[80%]">Performing to entertain you and your guests with a blend of acoustic and looping effects made to instill groove in your event.</p>
            </div>
            <div className="bg-blue-500 min-h-[150px] pl-2 flex justify-center items-center smallTablet:min-h-[150px] h-[40vh] laptop:flex-col laptop:h-[375px] laptop:justify-start">
                <div className="w-[30%] h-[100%] flex justify-center items-center text-[2.125rem] smallTablet:flex-col smallMobile:text-[2.75rem] smallTablet:mb-2 laptop:flex-row laptop:mb-[-10px] laptop:w-[100%] laptop:h-[20vh]">MC
                <img src={micLogo} className="w-[55px] smallMobile:w-[70px]" />
                </div>
                <p className="w-[60%] text-[0.75rem] px-4 smallMobile:text-[0.9rem] tablet:text-[1.125rem] laptop:w-[80%]">Guiding the event transitions and announcments and allowing your carefree enjoyment to be experienced to the fullest.</p>
            </div>
            <div className="bg-blue-300 min-h-[150px]  flex justify-center items-center smallTablet:min-h-[150px] h-[40vh] laptop:flex-col laptop:h-[375px] laptop:justify-start">
                <div className="w-[30%] h-[100%] flex justify-center items-center text-[2.5rem] smallTablet:flex-col smallMobile:text-[2.875rem] smallTablet:mb-2 laptop:flex-row laptop:mb-[-10px] laptop:w-[100%] laptop:h-[20vh]">FX
                <img src={danceFloorLogo} className="w-[65px] smallMobile:w-[90px]" />
                </div>
                <p className="w-[60%] text-[0.75rem] px-4 smallMobile:text-[0.9rem] tablet:text-[1.125rem] laptop:w-[80%]">Stepping up the ambience from laid-back to exciting and allowing you to relax share the experience.</p>
            </div>   
        </div>
    )
}

export default Services