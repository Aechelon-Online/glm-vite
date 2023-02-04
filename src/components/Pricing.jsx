import React from 'react'
import Navbar from './Navbar'
import SubscribeForm from './SubscribeForm'
import Footer from './Footer'

export default function Pricing() {
    return(
        <div>
            <Navbar />
            <div className="h-[3px] w-[95%] mx-auto bg-black"></div>
            <h1 className="text-4xl text-center font-bold p-[1rem] mobile:p-[1.5rem] tablet:p-[2rem] mobile:text-5xl tablet:text-6xl">Pricing</h1>
            <div className="grid grid-cols-1 tablet:grid-cols-3 gap-y-5 tablet:gap-x-5 w-[95%] mx-auto pb-5">
                <div className="h-fit tablet:h-[450px] bg-red-500 rounded-2xl drop-shadow-xl flex flex-col justify-around tablet:justify-start items-center p-4">
                    <p className="text-3xl mobile:text-4xl text-center text-gray-100 text-shadow-sm shadow-gray-900 laptop:mt-5">Bronze<sub className="text-sm p-[2px]">1</sub></p>
                    <div className="p-2">
                        <p className="text-4xl mobile:text-5xl tablet:text-4xl laptop:text-5xl text-center text-black-100 text-shadow-sm shadow-gray-400"><sup className="text-sm p-[2px] align-super">†</sup>Wedding - $1750</p>
                        <p className="text-2xl mobile:text-3xl tablet:text-2xl laptop:text-3xl text-center text-black-100 text-shadow-sm shadow-gray-400"><span className="align-text-top text-[18px]">*</span>Private Party - $875</p>
                    </div>
                    <div>
                        <p className="text-[10px] px-2 text-center pb-1">Wedding includes Solo Musician performance and DJ for reception</p>
                        <p className="text-[10px] px-2 text-center">Private party is either Solo Musician performance or DJ</p>
                    </div>
                </div>
                <div className="h-fit tablet:h-[450px] bg-yellow-500 rounded-2xl drop-shadow-xl flex flex-col justify-around tablet:justify-start items-center p-4">
                    <p className="text-3xl mobile:text-4xl text-center text-gray-100 text-shadow-sm shadow-gray-900 laptop:mt-5">Gold<sub className="text-sm p-[2px]">2</sub></p>
                    <div className="p-2">
                        <p className="text-4xl mobile:text-5xl tablet:text-4xl laptop:text-5xl text-center text-black-100 text-shadow-sm shadow-gray-400"><sup className="text-sm p-[2px] align-super">†</sup>Wedding - $2500</p>
                        <p className="text-2xl mobile:text-3xl tablet:text-2xl laptop:text-3xl text-center text-black-100 text-shadow-sm shadow-gray-400"><span className="align-text-top text-[18px]">*</span>Private Party - $1250</p>
                    </div>
                    <div>
                        <p className="text-[10px] px-2 text-center pb-1">Wedding includes Solo Musician performance and DJ for both the ceremony and reception with reception uplighting.</p>
                        <p className="text-[10px] px-2 text-center">Private party includes both Solo Musician performance and DJ along with LED glow tubes and DJ lighting.</p>
                    </div>
                </div>
                <div className="h-fit tablet:h-[450px] bg-zinc-400 rounded-2xl drop-shadow-xl flex flex-col justify-around tablet:justify-start items-center p-4">
                    <p className="text-3xl mobile:text-4xl text-center text-gray-100 text-shadow-sm shadow-gray-900 laptop:mt-5">Platinum<sub className="text-sm p-[2px]">3</sub></p>
                    <div className="p-2">
                        <p className="text-4xl mobile:text-5xl tablet:text-4xl laptop:text-5xl text-center text-black-100 text-shadow-sm shadow-gray-400"><sup className="text-sm p-[2px] align-super">†</sup>Wedding - $3250</p>
                        <p className="text-2xl mobile:text-3xl tablet:text-2xl laptop:text-3xl text-center text-black-100 text-shadow-sm shadow-gray-400"><span className="align-text-top text-[18px]">*</span>Private Party - $1875</p>
                    </div>
                    <div>
                        <p className="text-[10px] px-2 text-center pb-1">Wedding includes Solo Musician performance and DJ for ceremony and reception. Included also is reception uplighting, moving head spotlights, LED glow tubes, and choice of: cryo gun, "dancing on clouds", or glow-sticks/glow-glasses.</p>
                        <p className="text-[10px] px-2 text-center">Private party is Solo Musician performance and DJ. Includes DJ lighting, LED glow tubes, moving head spotlights, uplighting, and choice of: glow-sticks/glow-glasses or LED-"microphones".  </p>
                    </div>
                </div>
            </div>
            <div className="p-5 laptop:ml-[1%]">
                <p className="text-[0.625rem]">1 - Up to 3 hours for wedding reception. Up to 3 hours for private party.</p>
                <p className="text-[0.625rem]">2 - Up to 4.5 hours for ceremony and wedding reception. Up to 4 hours for private party.</p>
                <p className="text-[0.625rem]">3 - Up to 6 hours for ceremony and wedding reception. Up to 5 hours for private party.</p>
                <p className="text-[0.625rem]">† - All weddings include wireless mic for reception and wireless headset for ceremony moderator.</p>
                <p className="text-[0.625rem]">* - Includes wireless mic in Platinum package only. DJ basic lighting is included for all packages.</p>
            </div>
            <SubscribeForm />
            <Footer />
        </div>
    )
}