import React, { useEffect, useRef,useState } from 'react';
import Cards from '../Components1/Cards';
import { motion, useScroll } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import Mycards from '../Components1/Mycards';
import { FaGithub } from "react-icons/fa";
import { MdMonochromePhotos } from "react-icons/md";
import { SiWebpack } from "react-icons/si";
import { DiAndroid } from "react-icons/di";
import { FaApple } from "react-icons/fa";
import { FaVideo } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { SiWeb3Dotjs } from "react-icons/si";
import { CiAlarmOn } from "react-icons/ci";
import Community from '../Components1/Community';
import { IoIosPlay } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";
import Footer from '../Components1/Footer';

const Services = () => {
  const [activeButton, setactiveButton] = useState(null)
  const [color, setcolor] = useState(null)
  const [Hovered, setHovered] = useState("Featuring")
  const [imagehovered, setimagehovered] = useState(false)
  const [imagehovered1, setimagehovered1] = useState(false)


  const handlehover = () => {
    setimagehovered(true)
  }

  const handleleave = () =>{
    setimagehovered(false)
  }

  const handlehover1 = () => {
    setimagehovered1(true)
  }

  const handleleave1 = () =>{
    setimagehovered1(false)
  }
  const card1 = {
     icons:<FaGithub />,
     para:"Web development is nothing but the designing of web pages frontend wht user saw",
     heading:"web development"
  }
  const card2 = {
    icons:<MdMonochromePhotos />,
    para:"photography is  one of the most beautiful thing for nature lovers and animal lovers",
    heading:"photography"
  }
  const card3 = {
    icons:<SiWebpack />,
    para:"web design is one wwhich includes frontend backend and evrything needed as we grow",
    heading:"Web design"
  }
  const card4 = {
    icons:<DiAndroid />,
    para:"Android refers to both an open-source operating system for mobile devices and a mobile device platform  ",
    heading:"anroid app design"
  }
  const card5 = {
    icons:<FaApple />,
    para:"iphone or apple refers to both an open-source operating system for mobile devices and a mobile device platform  ",
    heading:"iphone app design"
  }
  const card6 = {
    icons:<FaVideo />,
    para:" Video editing is the process of manipulating and rearranging video shots to create a new work. ",
    heading:"video editing"
  }
  const card7 = {
    icons:<FaCode />,
    para:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta non esse quidem accusamus, dignissimos quos",
    heading:"code reviewing"
  }
  const card8 = {
    icons:<SiWeb3Dotjs />,
    para:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta non esse quidem accusamus, dignissimos quos",
    heading:"web 3"
  }
  const card9 = {
    icons:<CiAlarmOn />,
    para:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta non esse quidem accusamus, dignissimos quos",
    heading:"time management"
  }
  

  const community = {
    image:"src/comp2.avif",
    title:"Communication",
    para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, tempora Lorem ipsum dolor sit amet",

    button:"More"
  }
  const com = {
    image1:"src/inspired.jpg",
    title:"Inspired Design",
    para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, tempora Lorem ipsum dolor sit amet",

    button:"More"
            
  }
  const community2 = {
    image:"src/client.jpg",
    title:"Happy Clients",
    para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, tempora Lorem ipsum dolor sit amet",
    button:"More"
  
  }

  return (

    <>
    <div className='w-full h-[237vh] bg-slate-100'>

    <div>
      
      <div className="flex items-center justify-center ">
      <h1>
        <span className="text-violet-600">My</span>
        <span className="text-slate-600">Sevices</span>
      </h1>
    </div>
      
      <div className='flex items-center justify-center'>
        <hr className="p-0.5 bg-blue-500 w-[35vw]" />
      </div>
      
      <div  className='p-5'>
        <div className='flex items-center justify-center gap-10 mt-[10rem] cursor-pointer'>
        <Mycards {...card1}/>
        <Mycards {...card2}/>
        <Mycards {...card3}/>


        </div>
        
        <div className='flex items-center justify-center gap-10 mt-[5rem] cursor-pointer'>
        <Mycards {...card4}/>
        <Mycards {...card5}/>
        <Mycards {...card6}/>


        </div>
        
        <div className='flex items-center justify-center gap-10 mt-[5rem] cursor-pointer'>
        <Mycards {...card7}/>
        <Mycards {...card8}/>
        <Mycards {...card9}/>


        </div>
        <div className='relative top-[5rem] font-semibold text-green-950 h-[2vw]'>
        <h2>{Hovered}</h2>
      </div>
      <div className='flex items-center justify-center gap-[5rem] -mb-[20rem] relative top-[7rem]'>
        <div
         onMouseEnter={() => setHovered("Best Community")}
         onMouseLeave={() => setHovered("Our Features")}
         className='transition-transform duration-300 ease-in-out transform cursor-pointer hover:scale-110'

        >

        <Community
         
          {...community}
          />
          </div>
      <div

        onMouseEnter={() => setHovered("Inspired By Vercel")}
        onMouseLeave={() => setHovered("Our Features")}
        className='transition-transform duration-300 ease-in-out transform cursor-pointer hover:scale-110'

       >

        <Community
            
            {...com}
            />

            </div>

            <div
        onMouseEnter={() => setHovered("Most Happy Clients")}
        onMouseLeave={() => setHovered("Our Features")}
        className='transition-transform duration-300 ease-in-out transform cursor-pointer hover:scale-110'

            >

        <Community
            
            {...community2}
            />
            </div>
      </div>


      </div>
    
  
 <div className="w-full h-[279vh]   bg-slate-300 relative top-[141rem] -mt-[103rem]">
  <div>
    
  <h1 className=" text-[8rem]   relative flex items-center justify-center uppercase text-slate-800 top-[25rem] development">What Is Development</h1>
  <p className="p-[26%] text-zinc-800 relative -top-[12rem] text-3xl font-semibold">
    The React is the Javascript Library introduce to craeate fast and interactive UI <span className=' -p-[1%] text-center'> page or websites it comes with best features of hooks and component based design</span>
  </p>

  <div className=' relative -top-[45rem] flex items-center justify-center gap-10'>
    <button className='p-5 text-2xl font-semibold transition-transform duration-300 ease-in-out transform rounded-lg cursor-pointer hover:scale-90 getstarted text-slate-100'>
      Get Started
      </button>
      <button className='flex items-center justify-center p-5 text-2xl font-semibold transition-transform duration-300 ease-in-out transform bg-white border-purple-800 rounded-lg border-1 hover:scale-90'>
      <IoIosPlay  /> Watch Videos
      </button>
  </div>
  
  <div className=' relative -top-[25rem] cursor-pointer w-[15vw]  left-[30rem]'>
  <hr className='relative  -top-[4rem]  w-[100vh]  -left-[25rem] h-0.5 bg-zinc-900' />
    
    <h2
    onMouseEnter={handlehover}
    onMouseLeave={handleleave}
    className='-ml-[40rem]  relative -top-[15rem]   '
   
    
    ><span className='text-[15rem]'>.</span>Frontend Design</h2>
    <p className=' relative -top-[15rem] -left-[20rem] text-left h-[2vh]'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat neque aliquid maxime, sit doloremque molestiae nobis sequi corrupti a fugiat sint, reiciendis libero! Quidem error sequi, facere rerum consequuntur aspernatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, dolorum?</p>

    <div  className='flex items-start justify-start '>
      <button className=' hover:scale-95 text-3xl relative -left-[20rem] top-[15rem] bg-slate-900 p-4 text-white font-semibold rounded-lg w-[8vw] transition-transform duration-300 ease-in-out transform'>Learn</button>
    </div>

  {imagehovered && (
    <>
      <div  className=' relative top-[5rem] h-[0.001vh] w-[40vw] -left-[10rem]'>
      <FaArrowRight className=' relative -top-[24rem]  left-[55rem]  text-[3rem]' />

      <img
      
      src='src/frontend.jfif'
      alt='Hovered'
      className=' rounded-2xl ml-[80rem]  relative -top-[35rem]  scale-110  h-[30vh] z-50  '
      
      />
      </div>
  </>

  )}

  </div>

  

  <div className=' relative top-[5rem] cursor-pointer w-[15vw]  left-[30rem]'>
  <hr className='relative  -top-[4rem]  w-[100vh]  -left-[25rem] h-0.5 bg-zinc-900' />
    
    <h2
    onMouseEnter={handlehover1}
    onMouseLeave={handleleave1}
    className='-ml-[40rem]  relative -top-[15rem]   '
   
    
    ><span className='text-[15rem]'>.</span>Backend Design</h2>
    <p className=' relative -top-[15rem] -left-[20rem] text-left h-[2vh]'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat neque aliquid maxime, sit doloremque molestiae nobis sequi corrupti a fugiat sint, reiciendis libero! Quidem error sequi, facere rerum consequuntur aspernatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, dolorum?</p>
    <div  className='flex items-start justify-start '>
      <button className=' hover:scale-95 text-3xl relative -left-[20rem] top-[15rem] bg-slate-900 p-4 text-white font-semibold rounded-lg w-[8vw] transition-transform duration-300 ease-in-out transform'>Learn</button>
    </div>

  {imagehovered1 && (
    <>
      <div  className=' relative top-[15rem] h-[2vh] w-[45vw] -left-[10rem]'>
      <FaArrowRight className=' relative -top-[24rem]  left-[55rem]  text-[3rem]' />

      <img
      
      src='src/backend.jfif'
      alt='Hovered'
      className=' rounded-2xl ml-[80rem]  relative -top-[35rem]  scale-110  h-[30vh] z-50  '
      
      />
      </div>
  </>

  )}

  </div>

 
 
  
  
  </div>
   
  

    </div>
    </div>
    
    <div className=' relative top-[111rem]'>
    <Footer/>
     </div>
   
    </div>
    
     </>
  );
};

export default Services;
