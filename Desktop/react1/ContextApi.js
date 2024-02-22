  

         
       
       
        "use client"
        import React, { useContext } from 'react'
        import  {Mycontext}  from '@/Helper/Context'
        import Header from '@/Components/Header'
        const page = () => {
          

        const user = useContext(Mycontext)
        console.log(user)
          return (
            <div>  {user}
            
            <Header/>
             </div>
          )
        }
        
        export default page
        