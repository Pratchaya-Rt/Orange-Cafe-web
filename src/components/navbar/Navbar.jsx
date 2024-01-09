import React, { useState, useEffect } from 'react'
import { BiPhoneCall, BiSolidSun,BiSolidMoon } from "react-icons/bi";
import {FaCaretDown} from "react-icons/fa"
import { HiMenuAlt1,HiMenuAlt3} from "react-icons/hi"
import ResponsiveMenu from './ResponsiveMenu';
const Navbar = () => {

    const [theme, setTheme] = useState(localStorage.getItem("theme")? localStorage.getItem("theme") : "light");
    const [showMenu, setShowMenu] =useState(false)
    const element = document.documentElement;

    useEffect(() => {
      if(theme === "dark"){
        element.classList.add("dark");
        localStorage.setItem("theme","dark");
      }
      else{
        element.classList.remove("dark");
        localStorage.removeItem("theme");
      }

    }, [theme])
    
    const toggleMenu = () =>{
        setShowMenu(!showMenu);
    }

    return (
        <>
        <header className="fixed top-0 left-0 right-0 z-[99] bg-navbar text-white">
            <nav className='container flex items-center justify-between h-[70px] py-2 px-2'>
                {/* Logo section */}
                <div className='text-2xl md:text-3xl text-white'>
                    <a href="#">ORANGE <span className='inline-block font-bold text-secondary'>WEB</span></a>
                </div>

                {/* Desktop menu section */}
                <div className='hidden md:block'>
                    <ul className='flex items-center gap-10'>
                        <li className='group relative cursor-pointer'>
                            <a href="#" className='flex items-center gap-[2px] h-[72px]'>
                                Home {" "}
                                <span>
                                    <FaCaretDown className='transition-all duration-200 group-hover:rotate-180'/>
                                </span>
                            </a>
                            {/* DropDown Section */}
                            <div className='absolute -left-9 z-[99999] hidden w-[150px] bg-white shadow-md p-2 
                            text-black rounded-md group-hover:block'>
                                <ul className='space-y-3'>
                                    <li className='p-2 hover:bg-orange-100'>Services</li>
                                    <li className='p-2 hover:bg-orange-100'>About us</li>
                                    <li className='p-2 hover:bg-orange-100'>Privacy policy</li>
                                </ul>
                            </div>

                        </li>
                        <li className='group cursor-pointer'>
                            <a href="#" className='flex items-center gap-[2px] h-[72px]'>
                                Menu {" "}
                                <span>
                                    <FaCaretDown className='transition-all duration-200 group-hover:rotate-180'/>
                                </span>
                            </a>
                            {/* DropDown full width Section */}
                            <div className='absolute left-0 z-[99999] hidden  w-full rounded-b-3xl bg-white
                            shadow-md p-2 text-black group-hover:block'>
                                <div className='grid grid-cols-3 lg:grid-cols-4 gap-5'>
                                    <div className='overflow-hidden'>
                                        <img src="https://i.pinimg.com/564x/83/78/d1/8378d16ddb073f4a26c04ccb5b849dc6.jpg" 
                                        alt="not found" 
                                        className='max-h-[300px] w-full rounded-b-3xl object-fill'/>
                                    </div>
                                    <div className='col-span-2'>
                                        <h1 className='text-xl font-semibold pb-3'>
                                            Best Selling
                                        </h1>
                                        <p className='text-sm text-slate-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ipsa 
                                            temporibus minus ullam beatae odit consequatur saepe tempore tenetur 
                                            iusto, eaque aspernatur dolor. Expedita quam vero architecto 
                                            consectetur velit et.
                                        <div className='grid grid-cols-3 mt-6'>
                                            <div>
                                                <h1 className='pb-1 text-xl font-semibold'>Coffee</h1>  
                                                <ul className='space-y-2'>
                                                    <li className='cursor-pointer text-black/80 hover:text-secondary'>Americano</li>
                                                    <li className='cursor-pointer text-black/80 hover:text-secondary'>Cappuccino</li>
                                                    <li className='cursor-pointer text-black/80 hover:text-secondary'>Macchiato</li>
                                                    <li className='cursor-pointer text-black/80 hover:text-secondary'>Mocha</li>
                                                </ul>  
                                            </div>    
                                            <div>
                                            <h1 className='pb-1 text-xl font-semibold'>Fresh juice</h1>  
                                                <ul className='space-y-2'>
                                                    <li className='cursor-pointer text-black/80 hover:text-secondary'>Orange juice</li>
                                                    <li className='cursor-pointer text-black/80 hover:text-secondary'>Apple juice</li>
                                                    <li className='cursor-pointer text-black/80 hover:text-secondary'>Watermelon juice</li>
                                                    <li className='cursor-pointer text-black/80 hover:text-secondary'>Blueberry Lime juice</li>
                                                </ul>
                                            </div>    
                                            <div>
                                                <img 
                                                    src="https://i.pinimg.com/236x/c7/8d/95/c78d95dfb0aeefaaa38649dd99f8301d.jpg"
                                                    alt="not found"
                                                    className='max-h-40'
                                                    />    
                                            </div>    
                                        </div>    
                                            
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>About Us</li>
                        <li>
                            <div className='flex items-center gap-4'>
                                <div>
                                    <BiPhoneCall className="text-2xl h-[40px] w-[40px] rounded-md p-2 bg-secondary hover:bg-secondary/90"/>
                                </div>
                                <div>
                                    <p>Call us on</p>
                                    <p>
                                        <a href="tel:0992402883">0992402883</a>
                                    </p>
                                </div>
                            </div>  
                        </li>

                        {/* Light and DArk Mode */}
                        {
                            theme ==="dark" ? (
                                <BiSolidSun 
                                className='text-2xl'
                                onClick={() => setTheme("light")}
                                />
                            ) : (
                                <BiSolidMoon
                                className='text-2xl'
                                onClick={()=> setTheme("dark")}
                                />
                            )
                        }
                    </ul>
                </div>

                {/* Mobile menu header */}
                <div className='flex items-center gap-4 md:hidden'>
                {
                            theme ==="dark" ? (
                                <BiSolidSun 
                                className='text-2xl'
                                onClick={() => setTheme("light")}
                                />
                            ) : (
                                <BiSolidMoon
                                className='text-2xl'
                                onClick={()=> setTheme("dark")}
                                />
                            )
                        }

                        {
                            showMenu ?(<HiMenuAlt1 
                            onClick={toggleMenu}
                            className='cursor-pointer transition-all' size={30}/>) : 
                            (<HiMenuAlt3
                            onClick={toggleMenu}
                            className='cursor-pointer transition-all' size={30}/>)    
                        }
                </div>
            </nav>
        </header>
    {/* Mobile menu section */}
    <ResponsiveMenu showMenu={showMenu}/>
    </>
    )
    }

export default Navbar