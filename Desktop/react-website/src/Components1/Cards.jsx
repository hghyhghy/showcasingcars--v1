 

 import React from 'react'
 
 const Cards = ({image}) => {
   return (
    
<div className="mt-[13vh] main">
    
  <div className="w-[20vw] h-[48vh] border-2 border-zinc-800 p-2 myblue bg-zinc-200 rounded-xl">
    <div className="bg-violet-800 w-full h-[20vh]  myblue1 rounded-3xl">
        <img src={image} alt="" />
    </div>
    <div className="w-full h-[13vh] mt-10">

        <p className="text-2xl text-gray-900"> consectetur adipisicing elit. Autem ut ipsum velit, voluptates maxime saepe explicabo exercitationem harum accusantium recusandae nihil dolorem!</p>
    </div>
    <div className="flex items-center justify-center mt-5">
        <button to="/" className="p-5 text-2xl rounded-lg btn">Learn More</button>
    </div>
  </div>
</div>
   )
 }
 
 export default Cards
 