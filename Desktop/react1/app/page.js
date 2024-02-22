  
  "use client"
  
  import axios from 'axios' 
  import React, { useState } from 'react'
  
  const page = () => {
    const [username, setusername] = useState("")

    const getData = async () =>{
      const response = await axios.get("https://picsum.photos/v2/list")
      setusername(JSON.stringify(response.data))
    }
    return (
      <div>
        <button onClick={getData}>Click{username}</button>
      </div>
    )
  }
  
  export default page
  