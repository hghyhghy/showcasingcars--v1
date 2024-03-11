 

 import React, { useState } from 'react'
 
 const Mycards = ({icons,para,heading}) => {
   const [Hover, setHover] = useState(false)
   const handlehover = () => {
       setHover(true)
   }
   const handlehover1 = () => {
       setHover(false)
   }

   const cardstyle = {
       transition: 'transform 0.3s ease-in-out',
       transform: Hover ? 'scale(1.1)' : 'scale(1)',
   }
   return (
   <>
   <div   
    onMouseEnter={handlehover}
    onMouseLeave={handlehover1}
    style={cardstyle}
   
   
   >

    <div className=' w-[18vw] h-[30vh] border-2 border-violet-900 rounded-3xl mycards'>
     <div className='w-[5rem] h-[5rem]   bg-slate-600 rounded-full  mycards1 left-[10.5rem] relative top-5 border-2 border-violet-900'>
     <div className='relative flex items-center justify-center text-4xl top-3'>
      {icons}
     </div>
     <div>
        <div className='flex items-center justify-center w-[28rem] relative  -left-[11.5rem] top-[4rem] '>

        <h3 className='flex flex-row text-3xl font-semibold text-center text-white uppercase text-pretty'>{heading}</h3>
        </div>
     </div>

     <div className='flex  items-center justify-center w-[25rem]'>
        <p className='relative top-[5rem]   text-slate-100 -left-[10rem] text-center text-xl text-pretty font-semibold'>{para}</p>
     </div>

     </div>
     
    </div>


   </div>
   
   
   </>
   )
 }
 
 export default Mycards
 