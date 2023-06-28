import { useState } from 'react';
import {logo, close, menu} from '../assets';
import { navLinks } from '../constants'

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)
    return (
        <nav className='w-full  p-5 lg:px-20 lg:py-10 fixed top-0 flex justify-between items-center 
        bg-blue-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 z-10'>
            <img src={logo} alt="logo" className='w-[124px] h-[32px]' />
            
            <ul className=' list-none sm:flex hidden justify-end items-center flex-1'>

            {navLinks.map((nav,index)=>(
                <li key={nav.id} 
                    className={`font-poppins list-none
                    font-normal cursor-pointer text-[16px] text-white  ${index ===navLinks.length-1 ? 'mr-0' : 'mr-10'}`}>
                        <a href={`#${nav.id}} navbar-hover`} >
                            {nav.title}
                        </a>
                </li>
            ))}
            </ul>

            <div className= "sm:hidden flex flex-1 justify-end items-center">
                <img src={showMenu ? close : menu} alt="menu" className='w-[28px] h-[28px] object-contain cursor-pointer' onClick={()=>setShowMenu((prevState) => !prevState)}
                />

                <div 
                    className={`${showMenu ? 'flex'
                    : 'hidden'} p-6 flex text-center items-center h-[180px] w-full bg-[#4d1fad] rounded-md border border-gray-100  absolute top-20 right-0 z-10 my-5`}
                >
                    <ul className=' list-none flex flex-col justify-end items-center flex-1'>
                        {navLinks.map((nav,index)=>(
                            <li key={nav.id} 
                                className={`font-poppins list-none
                                font-normal cursor-pointer text-[16px] text-white bg-transparent   ${index ===navLinks.length-1 ? 'mr-0' : 'mb-4'}`}>
                                    <a href={`#${nav.id}} navbar-hover`}>
                                        {nav.title}
                                    </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
};

export default Navbar;
