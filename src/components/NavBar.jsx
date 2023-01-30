import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import glmLogoBlack from '../images/glm-black.png'

const NavBar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }

    return(
        <div className="navbar py-10">
            

            {
            nav ? (
            <div>
            <AiOutlineClose onClick={handleNav} className="text-3xl absolute tablet:hidden z-[99] top-6 right-5" />
                
            <div className="absolute top-[5rem] right-0 tablet:hidden w-[30%] bg-white flex flex-col items-center justify-around z-[20]">
                <a href="/" className="w-full flex justify-center p-2 cursor-pointer hover:underline">About</a>
                <a href="/" className="w-full flex justify-center p-2 cursor-pointer hover:underline">Blog</a>
                <a href="/" className="w-full flex justify-center p-2 cursor-pointer hover:underline">Contact</a>
            </div>
            </div>
            )
            :
            (
                <div>
                    <AiOutlineMenu onClick={handleNav} className="text-3xl absolute tablet:hidden z-[99] top-6 right-5" />
                </div>
            )
        }

            <div className="logo-title absolute left-5 top-6 flex items-center justify-between tablet:top-4">
                <a href="/"><img src={glmLogoBlack} className="w-[4rem] tablet:w-[6rem]" /></a>
                <h4 className="text-xl px-3 tablet:text-2xl">Greg Luce Music</h4>
            </div>
            <div className="absolute top-7 right-5  w-[35%] lg:max-w-sm">
                <ul className="hidden tablet:flex tablet:text-xl justify-between items-center">
                    <li><a href="/">About</a></li>
                    <li><a href="/">Blog</a></li>
                    <li><a href="/">Contact</a></li>
                </ul>
            </div>
            
        </div>
    )
}

export default NavBar