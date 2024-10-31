import React from 'react'
import { FaMagento } from "react-icons/fa";
import Links from './Links';
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className='flex md:items-center items-start flex-col md:flex-row gap-4 w-full justify-between p-[1.5rem] bg-black text-white'>
        <div className='flex flex-col gap-3  w-full md:w-[300px]'>
            <div className='flex items-center gap-2'>
            <FaMagento size={32} color='white' />
            <h1 className='font-bold text-[20px] uppercase'>WebWise</h1>
            </div>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime itaque, magnam officia harum excepturi nam aliquam dignissimos pariatur doloremque at tempora quidem, numquam ex. 
                Esse, quia? Numquam, id dolore. Doloremque.
            </p>
        </div>
        <div className='flex flex-col gap-2'>
        <Links to="home" color="white">Home</Links>
       <Links to="projects" color="white">Projects</Links>
       <Links to="services" color="white">Services</Links>
       <Links to="contact" color="white">Contact</Links>
        </div>
      <div className='flex items-center gap-2'>
      <FaFacebook size={32}  color='#fff'/>
            <FaInstagram size={32} color='#fff'/>
            <FaSquareXTwitter size={32} color='#fff'/>
      </div>
    </footer>
  )
}

export default Footer
