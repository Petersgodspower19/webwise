import React from 'react';
import { FaCode } from "react-icons/fa";
import { MdOutlineWeb, MdOutlineLocalGroceryStore } from "react-icons/md";
import FeatureCard from './FeatureCard';

function HomeFeatures() {
  return (
    <div className='md:text-center mt-10 p-[1.5rem]'>
      <h1 className='font-bold text-[35px] md:text-[40px] text-black'  data-aos="fade-up">
        Save time managing your business with our services
      </h1>
      <p data-aos="fade-up">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores enim nostrum iusto facere. Cum architecto labore illum accusamus? At ipsam accusantium temporibus omnis voluptates ab excepturi accusamus ullam in cumque.
      </p>
      <div className='flex items-center flex-wrap gap-3 justify-center text-start mt-6' data-aos="fade-up">
        <FeatureCard icon={<MdOutlineWeb color='#000' className='icon' size={35} />} heading="Web Design" color="#9ad3cf"/>
        <FeatureCard icon={<FaCode color='#000' className='icon' size={35} />} heading="Development" color="#ffccb4" c />
        <FeatureCard icon={<MdOutlineLocalGroceryStore color='#000' className='icon' size={35} />} heading="Ecommerce" color="#fec447"  />
      </div>
    </div>
  );
}

export default HomeFeatures;