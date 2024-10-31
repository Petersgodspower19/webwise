import React, { useState, useEffect } from 'react';

function HomeProjectCard({ title, heading, img, direction, color }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      className='flex items-start md:items-center flex-col md:flex-row justify-around gap-3 p-2 mt-4'
      style={{ flexDirection: isMobile ? 'column' : direction }}  data-aos="fade-up"
    >
      <div className='w-[100%] md:w-[500px] flex flex-col gap-3 p-1'>
        <h3
          style={{ backgroundColor: color }}
          className='w-fit text-black font-bold p-[10px] rounded-[20px]'
        >
          {title}
        </h3>
        <h1 className='font-bold text-[45px] text-black'>{heading}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur unde voluptatum cupiditate repudiandae aspernatur nesciunt dolore, rem, reprehenderit ipsam optio veritatis fugiat facere voluptatibus nobis pariatur.
          Dolorum aperiam alias ex.
        </p>
        <button className='border-2 border-black rounded-[20px] p-[5px] text-black projectBtn'>
          See Full Project
        </button>
      </div>
      <img src={img} alt='' className='w-[510px] hero img text-start' />
    </div>
  );
}

export default HomeProjectCard;
