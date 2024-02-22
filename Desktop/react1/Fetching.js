 
"use client"

import axios from 'axios'
import Link from 'next/link'
import React , {useState,useEffect} from 'react'
 
   const page = () => {
  //  link tag is used to stop reloading of our page 

   const [username, setusername] = useState([])

   const getUsers = async () =>{
     const {data} = await axios.get("https://jsonplaceholder.typicode.com/users")
     setusername(data)
   }

    //  to automatically call the function we use useeffect 

   useEffect(() => {
      getUsers()
    }, [])
       

   return (
    
    <>
     <button onClick={getUsers}  className="px-4 py-2 font-bold text-white rounded bg-zinc-800"> Get Data </button>
     <div className="p-8 mt-5 bg-slate-300">
     <ul>

      {username.map((item) => {
         return <li>
          {item.username}  ---- <a href={`/${item.id}`}>Explore</a>
         </li>
      })}
     </ul>
      
     </div>
     
    </>
   )
 }
 
 export default page
 