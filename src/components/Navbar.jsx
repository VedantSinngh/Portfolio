import React from 'react';
import logo from '../assets/VS.png';
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

const Navbar = () => {
    return (
        <nav className='mb-20 flex items-center justify-between py-6'>
            <div className='flex flex-shrink-0 items-center'>
                <img className='mx-3 w-12' src={logo} alt="logo" />
            </div>
            <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
                <FaGithub />
                <FaInstagram />
                <FaLinkedin />
                <FaTwitter />
            </div>
        </nav>
    );
}

export default Navbar;
