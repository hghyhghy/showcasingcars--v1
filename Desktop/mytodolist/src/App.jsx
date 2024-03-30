


import { useState } from 'react'
import { FcTodoList } from "react-icons/fc";

import './index.css'
import Navbar from './Components/Navbar'
import Mytodo from './Components/Mytodo';
import { motion, useScroll, useSpring } from 'framer-motion';

function App() {
   
  const [count, setCount] = useState(0)

  return (
    
    <motion.div

    >
    <Navbar/>
    <div className=" mx-auto p-[2%] bg-zinc-900 w-full h-full mt-0">
      
      <div className="w-1/2 p-5 rounded-xl bg-violet-200 ml-[24%] flex gap-4 items-center mytodo"> 
      
       
      <h1 className=' ml-[41%] text-2xl text-zinc-900'>My to do list </h1>
      <FcTodoList  className="text-xl bg-violet-700 symbol" />



      </div>
      <Mytodo/>

    </div>
    </motion.div>
  )
}

export default App
