"use client";


import axios from 'axios'
import React , {useState,useEffect} from 'react'

const page = ({params}) => {

  const {id} = params
  const [username, setusername] = useState([])

  const getUsers = async () =>{
    const {data} = await axios.get("https://jsonplaceholder.typicode.com/users/" + id)
    setusername(data)
  }

   //  to automatically call the function we use useeffect 

  useEffect(() => {
     getUsers()
   }, [])
      
  return (
   <>
   {JSON.stringify(username)}
   </>
  )
}

export default page
