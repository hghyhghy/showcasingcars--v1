import React, { useEffect, useState } from 'react';
import Hero from '../Components1/Hero.jsx';
import Footer from '../Components1/Footer.jsx';
import { useGlobalContext } from '../Context'
import { NavLink } from 'react-router-dom';
import Skills from '../Components1/Skills.jsx';
import Skillcards from '../Components1/Skillcards.jsx';


const Services = () => {
  const [activeButton, setactiveButton] = useState(null)
  const [color, setcolor] = useState(null)
  const data = {
    mybtn:"Projects",
    to:"https://github.com/hghyhghy",
    
  };
  
  const {updateAboutPage} = useGlobalContext()
  useEffect(() => {
    updateAboutPage()
  }, [])
  return <>
  
  <div className='w-full h-screen about'>

  <div>


    <Skills/>
  </div>

   

   
   <div  className=' relative -top-[29rem]'>

  <Footer/>
   </div>
  </div>
  </> 
};

export default Services;
