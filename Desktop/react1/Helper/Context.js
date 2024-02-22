 
 "use client";
 import React, { createContext } from 'react'

 export const Mycontext = createContext()
 
 const Context = ({children}) => {


   const userName = "Subham Sarkar" 
   return (
     <div>
        <Mycontext.Provider value={userName}>

           {children}
        </Mycontext.Provider>
       
     </div>
   )
 }
 
 export default Context
 