 

 import React, { useState } from 'react'
 
 const Community = ({image,title,image1,para,button}) => {
    
   return (
    <>
    
    <div>


        <div 
        
        
        className=' h-[70vh] w-[20vw]   relative top-[10rem] bg-white rounded-3xl'>

            <div className='p-[2rem] flex items-center justify-center relative -left-3 -top-[14px] '>
                <img src={image} alt="" />
                <img
                className='h-[18rem] '
                
                src={image1} alt="" />
            </div>

            <div className='relative flex items-center justify-center mt-5 text-3xl font-semibold tracking-tighter text-green-700 -top-[2rem]'>
                <h4>{title}</h4>
            </div>

            <div className='flex items-center justify-center p-2 text-2xl font-medium text-center text-green-950'>
                <p>{para}</p>
            </div>

            <div className='flex items-center justify-center mt-[7rem] text-2xl'>
                <button
                className=' relative -top-[5.5rem] p-6 font-semibold text-blue-100 uppercase bg-zinc-700 rounded-3xl h-[5rem] w-[15rem]'
                
                >{button}</button>
            </div>


        </div>
    </div>
    
    </>
   )
 }
 
 export default Community
 