
"use client"
 
import React, { useState } from "react";

  
  const page = () => {
    const [Username, setUsername] = useState("")
    return (
      <>
        <h1 className="mb-5 ml-5 text-2xl"> Enter Your Name:</h1>
        <form>
          <input type="text" className="px-4 py-2 ml-5 text-xl border-2 rounded-lg border-zinc-900"
          
          
          value={Username}
           onChange ={ (e) => {
            setUsername(e.target.value)
            console.log(Username)
           } }

           

          
          />
        </form>
      </>
    )
  }
  
  export default page
  