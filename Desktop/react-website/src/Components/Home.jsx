import React, { useContext, useEffect, useRef } from 'react'
import Hero from "../Components1/Hero"
import { useGlobalContext } from '../Context'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import Services from './Services'
import Cards from '../Components1/Cards'
import Contact from "./Contact"
import Footer from '../Components1/Footer';

const Home = () => {
  const ref = useRef()
  useEffect(() => {
    const el = ref.current
    gsap.fromTo(el, { scale: 0.9 }, {
      scale: 1.1, duration: 1, scrollTrigger: {
          trigger: el,
          scrub:2,
      }
  })


  },[])
  
  const data1 = {

    mybtn:"Hire Me",
    to:"/contact",
   
  }
  const card1 = {
    image:"src/comp1.jpg",

  }
  
  const card2 = {
    image:"src/Styles/comp2.png",

  }
  const card3 = {
    image:"src/Styles/comp3.png",

  }




 

  const {updateHomePage} = useGlobalContext()
  useEffect(() => {
    updateHomePage()
  }, [])
  
  return (
    <>
    <div className="w-full h-screen bg-zinc-900 text-violet-300">
      <Hero {...data1}  />
     
    </div>
    <div  ref={ref} className="flex items-center justify-center ">
      <h1>
        <span className="text-violet-600">Feat</span>
        <span className="text-slate-600">uring</span>
      </h1>
    </div>
    <div className='flex items-center justify-center'>
        <hr className="p-0.5 bg-blue-500 w-[35vw]" />
      </div>
    <div className="flex items-center justify-center  gap-[5vw]" >
     <div className=' flex items-center justify-center gap-[5vw] bg-zinc-100 w-[80vw] p-8 rounded-xl mt-5'>
      <div ref={ref}    className=' flex items-center justify-center gap-[5vw] relative -top-[4.5rem]'>

    <Cards {...card1} />
    <Cards {...card2} />
    <Cards {...card3}/>
      </div>
      </div> 
    </div>
    
     <Contact/>
     <div className='  h-[90vh]'>

     <Footer/>
     </div>
    </>
  )
}

export default Home
