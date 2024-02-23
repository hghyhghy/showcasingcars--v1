  
  
  "use client"
  import React, { useState } from 'react'
  import { ToastContainer, toast } from 'react-toastify';

  import 'react-toastify/dist/ReactToastify.css';
 
   const page = () => {

     
  const notify = () => {
    toast.success('Added Sucessfully', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    });
  }

  const deleteNotify = () => {
    toast.success('Deleted Successfully', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  } 

   
    
    const [title, settitle] = useState("")
    const [desc, setdesc] = useState("")
    const [main, setmain] = useState([])

    const submit = (e) => {
      e.preventDefault()
      // spread operator to save the future task 
      setmain([...main, {title,desc}]);  
      settitle("")
      setdesc("")
      console.log(main)
    }

    const deleteHandler = (i) => {
      let copytask = [...main]
      copytask.splice(i)
      setmain(copytask)
    }

    const allHandler = () =>{
      deleteHandler()
      deleteNotify()

    }

    let renderTask = <h2 className="font-semibold text-zinc-700">No Task Available</h2>
    if(main.length>0) {
    renderTask = main.map((item,index) => {

      return ( 
        <li className="flex items-center justify-between mb-5 ">
      <div className="flex items-center justify-between w-2/3"> 
        <h5 className="text-xl font-medium uppercase text-zinc-900">{item.title}</h5>
        <h6 className="text-lg font-medium uppercase text-zinc-900">{item.desc}</h6>
      </div> 
        <button
        
        onClick={() =>{
         allHandler()
        }}

       

        className="px-4 py-2 font-bold bg-red-400 rounded-lg"> Delete</button>
        </li>
     
      )
    })
  } 
    
  


    return (
      <div>
      <h1 className="p-5 text-2xl font-bold text-center bg-zinc-600 text-zinc-200">Subham's Todolist</h1>

      <form onSubmit={submit}>
        <input type="text" className=" ml-[2.5%] px-4 py-2 m-8 text-2xl text-black rounded-lg border-5 border-zinc-500"
        placeholder="Enter your task"
        
        value={title}
        onChange={ (item) =>{

          settitle(item.target.value)
        }}
        
        />

        <input type="text" className=" ml-[11%] px-4 py-2 m-8 text-2xl text-black rounded-lg border-5 border-zinc-500"
        placeholder="Enter Description Here"
        
        value={desc}
        onChange={ (item) =>{
          setdesc(item.target.value)
        }}
        
        />

        <button 
        
        onClick={notify}
        className="px-4 py-3 m-5 mt-0 text-2xl font-medium rounded-lg ml-[25%] bg-sky-500 text-zinc-900">Add Task</button>

        <ToastContainer/>
        
      </form>

      <hr className="w-1/2 ml-[25%] mt-3"/>
      <div className="p-8 mt-[3%] bg-slate-200 text-zinc-900">
       <ul>
        <div className="flex items-center gap-[52%] mb-7">
          <h1 className="px-4 py-3 font-medium bg-black rounded-lg text-zinc-200">TASK</h1>
          <h2 className="px-4 py-3 font-medium bg-black rounded-lg text-zinc-200">DESCRIPTION</h2>
        </div>
     
        {renderTask}
       </ul>
      </div>
      </div>
     
    )
  }
  
  export default page
  
