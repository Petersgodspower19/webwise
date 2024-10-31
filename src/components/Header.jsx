import React from 'react'
import { FaMagento } from "react-icons/fa";
import Links from './Links';
import Button from './Button';
import { IoMenu } from "react-icons/io5";

function Header({onMenuClick}) {
  return (
    <header className='flex items-center w-full justify-between p-[1.5rem]'>
        <div className='flex items-center gap-2'>
            <FaMagento size={32} color='black' />
            <h1 className='font-bold text-[20px] uppercase'>WebWise</h1>
        </div>
        <div className='md:flex items-center gap-4 hidden'>
        <div className='flex items-center gap-4'>
       <Links to="home" color="black">Home</Links>
       <Links to="projects" color="black">Projects</Links>
       <Links to="services" color="black">Services</Links>
       <Links to="contact" color="black">Contact</Links>
        </div>
        <Button to="contact">Contact</Button>
        </div>
      <IoMenu color='#000' size={30} className='md:hidden' onClick={onMenuClick} />
    </header>
  )
}

export default Header
