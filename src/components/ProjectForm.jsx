import React from 'react'

function ProjectForm() {
  return (
    <div className='bg-secondary text-black p-[1.5rem]'>
        

        <form className='flex items-start flex-col md:flex-row justify-around gap-2'>
           <div className='flex w-[100%] md:w-[500px] text-black flex-col gap-3' data-aos="fade-up">
           <h1 className='font-bold text-[45px]'>Ready to start your project?</h1>
        <input type="text"  placeholder='Name' className='w-[70%]'/>
        <input type="email"  placeholder='Email' className='w-[70%]'/>
        <input type="text"  placeholder='Message' className='w-[70%]'/>
           </div>

           {/* {} */}
           <div className='flex flex-col gap-2'  data-aos="fade-up">
            <p className='w-[300px]'>
                We carry out the process to achieve maximum growth of your business
            </p>
            <button className='bg-tertiary text-black w-fit p-[8px]'>Book a Call</button>
           </div>
        </form>
      
    </div>
  )
}

export default ProjectForm
