import React from 'react'
import { FaUserCircle } from 'react-icons/fa'

const ResponsiveMenu = ({showMenu}) => {
  return (
    <div className={` ${showMenu ?   "left-0": "-left-[100%]"
    } h-screen w-[75%] bg-slate-950 fixed top-0 z-50 transition-all duration-500 pt-24 
    pb-6 px-8 flex flex-col justify-between text-white`}>
        <div>
            <div className='flex items-center justify-start gap-3'>
                <FaUserCircle size={50}/>
                <div>
                    <h1>TheopPleum</h1>
                    <h1 className='text-sm text-slate-500'>Premium users</h1>
                </div>
            </div>
            <nav className='mt-12'>
                <ul className='space-y-4 text-xl'>
                    <li>
                        <a href="#" className='mb-5 inline'>Home</a>
                    </li>
                    <li>
                        <a href="#" className='mb-5 inline'>Menu</a>
                    </li>
                    <li>
                        <a href="#" className='mb-5 inline'>About us</a>
                    </li>
                    
                </ul>
            </nav>
        </div>
        <div>
            <h1>2024 All Right Reserve</h1>
        </div>
    </div>
  )
}

export default ResponsiveMenu