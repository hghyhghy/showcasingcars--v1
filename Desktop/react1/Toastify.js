 
   
  
  "use client"
  import React from 'react'
  import { ToastContainer, toast } from 'react-toastify';

  import 'react-toastify/dist/ReactToastify.css';
  
  const page = () => {
    const message = "Log in successful"
    const  notify = ()=>{
      toast.success(message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    }
    return (
      <div>
        <button onClick={notify}>Log In</button>
        <ToastContainer/>
      </div>
    )
  }
  
  export default page
  