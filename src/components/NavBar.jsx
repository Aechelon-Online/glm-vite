import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import glmLogoBlack from '../images/glm-black.png'
import { Link } from 'react-router-dom'


const NavBar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }

    return(
        <div className="relative h-[100px] smallMobile:h-[115px] tablet:h-[140px]">
            <div className="navbar fixed z-[999] w-full h-[100px] bg-white smallMobile:h-[115px] tablet:h-[140px]">
                <div className="h-[2.5rem] absolute top-0 w-[100%] bg-blue-900 tablet:h-[3rem]">
                    <p className="text-blue-100 absolute right-0 p-2 pr-[20px] tablet:text-[1.25rem] tablet:top-[3px] tablet:pr-[15px]"><a href="tel:8174870886">817.487.0886</a></p>
                </div>

                {
                nav ? (
                <div>
                    <AiOutlineClose onClick={handleNav} className="text-3xl absolute tablet:hidden z-[99] top-[3.375rem] right-5" />
                        
                    <div className="absolute top-[7rem] right-0 tablet:hidden w-[30%] bg-white flex flex-col items-center justify-around z-[20]">
                        <Link to="/about" className="w-full flex justify-center p-2 cursor-pointer hover:underline">About</Link>
                        <Link to="/blog" className="w-full flex justify-center p-2 cursor-pointer hover:underline">Blog</Link>
                        <Link to="/pricing" className="w-full flex justify-center p-2 cursor-pointer hover:underline">Pricing</Link>
                        <Link to="/contact" className="w-full flex justify-center p-2 cursor-pointer hover:underline">Contact</Link>
                    </div>
                    <Link to="/subscribe" className="hidden">Subscribe</Link>
                </div>
                )
                :
                (
                    <div>
                        <AiOutlineMenu onClick={handleNav} className="text-3xl absolute top-[3.375rem] tablet:hidden z-[99] smallMobile:top-[3.75rem] right-5" />
                    </div>
                )
            }

                <div className="logo-title absolute left-5 top-[3.75rem] flex items-center justify-between tablet:top-[4.25rem]">
                    <a href="/"><img src={glmLogoBlack} className="w-[3rem] smallMobile:w-[4rem] tablet:w-[6rem]" /></a>
                    <h4 className="text-[0.875rem] smallMobile:text-xl px-3 tablet:text-2xl">Greg Luce Music</h4>
                </div>
                <div className="absolute top-7 right-5 w-[40%] lg:max-w-sm tablet:top-[4.875rem]">
                    <ul className="hidden tablet:flex tablet:text-xl justify-between items-center">
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/pricing">Pricing</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                    <Link to="/subscribe" className="hidden">Subscribe</Link>
                </div>
            </div>
        </div>
    )
}

export default NavBar