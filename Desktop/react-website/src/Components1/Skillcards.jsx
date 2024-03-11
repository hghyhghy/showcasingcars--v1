import React, { useEffect, useState } from 'react'
import { FaArrowRight } from "react-icons/fa";
const Skillcards = ({heading,para,icons}) => {
  

  return (
 <>

<div className=' h-[8rem] w-[8rem]  rounded-full relative -top-[6rem] left-[11.2rem] bg-slate-300 z-50'>
  <div className='relative flex items-center justify-center text-5xl text-black top-8'>

 {icons}
  </div>
</div>
 
 <div className=' h-[40vh] w-[19vw] bg-zinc-100  relative skillcards -top-[10rem] z-0 rounded-md hover:scale-95  transition-transform duration-300 ease-in-out transform cursor-pointer'>
  <div>

  <h2 className='text-center text-white  relative top-[5rem] font-semibold'>{heading}</h2>
  <p className='relative text-white top-[4rem] text-center p-10 '>{para}</p>
  </div>

 
 </div>
 <div className='flex items-center justify-center transition-transform duration-300 ease-in-out transform '>
    <button id='mybutton' className=' flex items-center justify-center gap-2 bg-white p-4 relative -top-[8rem] w-[19vw] text-3xl  hover:bg-blue-300  hover:gap-5 cursor-pointer hover:rounded-md'>Learn
    <FaArrowRight />
    </button>
  </div>

 
 </>
  )
}

export default Skillcards
