import React from 'react'
import image1 from "../assets/webDesign.jpg"
import image2 from "../assets/webDev.jpg"
import image3 from "../assets/ecomm.jpg"

import HomeProjectCard from '../components/HomeProjectCard'

function Projetcs() {
  return (
    <div className=''>
       <h1 className='text-center font-bold text-[35px] md:text-[40px] text-black mt-5 mb-6'>
        See Our Projects
      </h1>
      <p className='text-center text-black w-[90%] md:w-[80%] m-auto'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa consectetur ratione sit saepe. Quod a deleniti eaque asperiores sunt, modi cupiditate, ex odio, ut dicta tempora nihil id ab animi.
      </p>
      <div>
        <HomeProjectCard img={image1}
         title="Web Design"
         heading="Web design project title goes here"
         direction="row"
         color="#9ad3cf"
        />
        <HomeProjectCard img={image2} title="Development" heading="Development project title goes here"
        direction="row-reverse" color="#ffccb4" />

        <HomeProjectCard img={image3}
         title="Ecommerce"
         heading="Ecommerce project title goes here"
         direction="row"
         color="#9ad3cf"
        />
      </div>
    </div>
  )
}

export default Projetcs
