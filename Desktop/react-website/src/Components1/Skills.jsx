 
 import React, { useEffect, useState } from 'react'
import Skillcards from './Skillcards'
import { BsPersonSquare } from "react-icons/bs";
import { CiBoxList } from "react-icons/ci"; 
import { MdEmojiEmotions } from "react-icons/md";
import { RiCalendarTodoLine } from "react-icons/ri";
 const Skills = () => {
  const [hovered, sethovered] = useState(false)
  

  const handlehover = () =>{
    sethovered(true)
  }

  const handleleave = () => {
    sethovered(false)
  }
  const skill1 = {
    icons:<BsPersonSquare />,
    heading:"Next.js",
    para: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit adipisci vero ipsam, optio molestias obcaecati"
  }
  const skill2 = {
    icons:<CiBoxList />,
    heading:"React.js",
    para: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit adipisci vero ipsam, optio molestias obcaecati"
  }
  const skill3 = {
    icons:<MdEmojiEmotions />,
    heading:"Javascript",
    para: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit adipisci vero ipsam, optio molestias obcaecati"
  }
  const skill4 = {
    icons:<RiCalendarTodoLine />,
    heading:"Tailwind css",
    para: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit adipisci vero ipsam, optio molestias obcaecati"
  }
   return (
     <>
     <div className='h-[259vh] skills'>

     <h1 className='relative z-50 flex items-center justify-center font-light tracking-tighter uppercase bg-transparent text-7xl top-11 text-slate-700 '>Meet The Developer</h1>
     <div className='z-50 flex items-center justify-center w-screen'>
        <h2 className='w-1/2 mt-[2rem]  rounded-full uppercase text-violet-800 font-medium z-50'>Build Your Own creation</h2>
       
     </div>
     <div className='relative z-50 '>

     <p className='flex items-center justify-center px-[45rem] text-white text-center'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis alias harum, officia saepe cupiditate ratione Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
     </div>
    <div className='z-50 flex items-center justify-center font-medium text-zinc-200'>
     <button className='z-50 p-5 mt-6 text-3xl uppercase transition-transform duration-300 ease-in-out transform skillbutton hover:scale-95'>Get in touch</button>


    </div>
    <div className='z-0 flex items-center justify-center w-full p-5 h-1/2'>
      <img 
      className='w-[100vw] rounded-lg z-0 mb-[66rem]'
      
      src="src/newearth.avif" alt="" srcset="" />

    </div>

    <div>
     <h2 className='font-sans font-medium uppercase text-zinc-100  relative -top-[30rem] skills1'>When and how it get started?</h2>

     <p className='flex items-center justify-center text-white relative -top-[30rem] px-[40rem] text-center'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ab ratione, reprehenderit facere ut ex possimus exercitationem nobis! Facilis, suscipit?</p>

    </div>

    <div className=' relative -top-[20rem]'>
      <h2 className='font-semibold text-blue-600 uppercase'>{hovered}</h2>
    </div>

    <div className='relative z-50 flex items-center  justify-center -top-[9rem] gap-10'>
      <div
      onMouseEnter={() => sethovered("Proficient in Next.js")}
      onMouseLeave={()=> sethovered("Used Technologies")}
      
      >
      <Skillcards {...skill1}/>

      </div>
      <div
      
      onMouseEnter={() => sethovered("Proficient in React.js")}
      onMouseLeave={()=> sethovered("Used Technologies")}
      
      >

      <Skillcards {...skill2}/>
      </div>
      <div
      
       
      onMouseEnter={() => sethovered("Proficient in JavaScript")}
      onMouseLeave={()=> sethovered("Used Technologies")}
      
      >

      <Skillcards {...skill3}/>
      </div>
      <div
       onMouseEnter={() => sethovered("Proficient in Tailwind Css")}
       onMouseLeave={()=> sethovered("Used Technologies")}
       
      
      >

      <Skillcards {...skill4}/>
      
      </div>

    </div>
     
     </div>
     </>
   )
 }
 
 export default Skills
 