import React from 'react'
import hero from "../assets/hero.jpg"
import Button from './Button'

function HomeFirstSection() {
  return (
    <div className='flex items-center flex-col md:flex-row justify-around gap-4 mt-5 mb-5'>
      <div className='w-[100%] md:w-[500px] flex flex-col gap-3 p-2'>
      <h1 className='font-bold text-[45px] text-black' data-aos="fade-up"
          data-aos-delay="600">Grow Your Business with Us</h1>
      <p data-aos="fade-up" data-aos-delay="800">Lorem ipsum dolor sit amet consecteturmolestiae itaque voluptates amet numquam eos vel consequuntur optio?</p>
      <Button to="services">Get Started</Button>
      </div>
      <img src={hero} alt="" className='w-[510px] hero' data-aos="zoom-in" />
      </div>
  )
}

export default HomeFirstSection
