


import React, { useRef, useState } from "react";

const Navbar = () => {
   const [color, setcolor] = useState("white")
   const ref = useRef()
  
  const change = ()=>{
    ref.current.style.color="#dadada"
  }
  const change1 = () =>{
    setcolor("white")
    ref.current.style.color="white"

  }

  return (
    <>
    <div className="p-5 bg-slate-800">

      <ul
       
       ref={ref}

       style={{
        transition: "color 0.3s ease-in-out",
      }}
      
      className=" relative flex items-center justify-end gap-5 mt-2 mr-2 font-semibold uppercase top-[35px] text-zinc-100">
        <li 
        className="cursor-pointer myli1"  
        onMouseEnter={change}
        onMouseLeave={change1}
        >Home</li>
        <li 
        className="cursor-pointer myli2 "  
        onMouseEnter={change}
        onMouseLeave={change1}
        >About</li>
        <li
        className="cursor-pointer myli3 "  
        onMouseEnter={change}
        onMouseLeave={change1}
        >Your-Todo</li>
      </ul>
      <div className="flex items-center justify-end mr-[30%] relative h-[10vh]">
        <span className="absolute mb-[6%] text-2xl font-bold p-[10%] text-violet-500 productive"><h1
        className="mt-9"
        
        >Make Yourself<span className="mb-4 ml-3 mr-3 text-gray-500">Productive </span> Always</h1></span>
       
      </div>
    </div>
    </>
  );
};

export default Navbar;
