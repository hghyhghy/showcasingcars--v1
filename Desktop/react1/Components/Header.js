   
   import React, { useContext } from 'react'
   import Nav from './Nav'
import { Mycontext } from '@/Helper/Context'
   
   const Header = (props) => {
     const userName=  useContext(Mycontext)
     
     return (

       <div className="p-5 bg-green-400">
       {userName}
       </div>

       
     )
   }
   
   export default Header
   