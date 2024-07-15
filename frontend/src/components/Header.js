import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { FaCircleUser } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";

const Header = () => {
  return (
    <header className='fixed shadow-md w-full h-20 px-2 md:px-4 z-50 bg-black'>
      {/* desktop */}
      <div className='flex items-center h-full justify-between'>
        <Link to={""}>
            <div className='h-20'>
                <img src={logo} className='h-full' />
            </div>
        </Link>

        <div className='flex items-center gap-4 md:gap-7'>
            <nav className='flex gap-4 md:gap-6 text-base md:text-lg'>
                <Link to={""}>Home</Link>
                <Link to={"menu"}>Menu</Link>
                <Link to={"about"}>About</Link>
                <Link to={"contact"}>Contact</Link>
            </nav>
            <div className='text-2xl text-white relative'>
                <FaCartShopping />
                <div className='absolute -top-1 -right-1 text-black bg-white h-4 w-4 rounded-full m-0 p-0 text-sm text-center'>0</div>
            </div>
            <div className='text-2xl text-white'>
                <FaCircleUser />
            </div>
        </div>
      </div>


      {/* mobile */}
    </header>
  )
}

export default Header;
