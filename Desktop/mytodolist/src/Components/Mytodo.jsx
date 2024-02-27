  
  import React, { useEffect, useState } from 'react'
  import { CiEdit } from "react-icons/ci";
  import { v4 as uuidv4 } from 'uuid';
  import { MdDelete } from "react-icons/md";
  import { MdOutlineAddCircleOutline } from "react-icons/md";
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


  
  const Mytodo = () => {
    const [todo, settodo] = useState("")
    const [todos, settodos] = useState([])
    const [showFinished, setshowFinished] = useState(true)


    useEffect(() => {
      let mystring = localStorage.getItem("todos")
      if(mystring){
      let todos =JSON.parse(mystring)
      settodos(todos)}
    },[])

    const toggleFinished = (e) => {
      setshowFinished(!showFinished)
    }
    
  
     

    // function to save to localstorage 

    const savetols = () => {

      localStorage.setItem("todos", JSON.stringify(todos))
      
    }
    



    const handleedit =(e,id) =>{
    let t= todos.filter( item => item.id===id)

    settodo(t[0].todo)
    setTimeout(() => {
      
    
    let newTodos = todos.filter(item => {
      return item.id !== id
     })
     settodos(newTodos)
    }, 2000);
    savetols()

    }
  
    const handledelete =(e,id) =>{
       let newTodos = todos.filter(item => {
        return item.id !== id
       })
       settodos(newTodos)
       savetols()

    }
    const notify = () =>{
      toast.success('🦄 Added Successfully', {
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
    
    const handleadd=() =>{
      settodos([ ...todos ,{ id:uuidv4(), todo, iscompleted : false}])
      settodo("")
       savetols()

    }

    const both1 = () =>{
      notify()
      handleadd()
    }
    const handlechange = (e) => {
      settodo(e.target.value)

    }
    const handlecheck = (e) => {
      let id= e.target.name
      let index = todos.findIndex( item =>{
        return item.id === id
      })

      let newTodos = [...todos]
      newTodos[index].iscompleted = !newTodos[index].iscompleted
      settodos(newTodos)
       savetols()

    }
    
    return (



      <>
         <div className="w-[70vw] h-[90vh] p-5 add bg-violet-300 ml-[12%] mt-2 rounded-lg my-5 main">
           <div className="h1div">
            <h2 className="mb-2 font-bold addtodo">Add Todos</h2>
            </div>
             <input 
             
             onChange={handlechange}
             value={todo}
             type="text" className='w-1/2 p-5 rounded-lg hover:border-none textinput' />
             <button  
             disabled={todo.length <3}
             onClick={both1}
             style={{transition:"all ease-in-out 0.5s"}}
             
             className=" disabled:bg-violet-100  disabled:text-zinc-500 disabled:cursor-not-allowed w-[7vw] h-[7vh] p-3 mx-6 font-bold rounded-md text-zinc-200 bg-violet-800 hover:bg-violet-950 mysubmit"> 
             <span className="mt-5 ml- savespan">

             Save  
             </span>
             <MdOutlineAddCircleOutline  className="relative top-[-19px] left-[-5px] font-bold text-xlg  savelogo" />

             
             <ToastContainer/>
             </button>
             <input 
             className="relative"
             onChange={toggleFinished} type="checkbox" checked={showFinished}/> <h1  className=' absolute finished left-[61%]  top-[46.3%]'>Show Finished</h1>
             <div className="mydiv">
             <h2 className="mt-5 mb-3 text-lg font-bold yourtodos">Your Todos</h2>
             </div>
        <div className="todos">
          {todos.length === 0 &&  <div className="ml-[37%]"> <h1 className="text-2xl font-bold uppercase text-zinc-900 notodo">No Todos Available</h1></div>  }
         
        {todos.map(item => {

         
         
          return   (showFinished || !item.iscompleted ) && <div 
          
            key={item.id}
            className="flex items-center justify-between w-full mt-3 todo">
            <input 
            name={item.id}
            onChange={handlecheck}
            
            type="checkbox" checked={item.iscompleted}  id=""  />
        <div className={item.iscompleted ?" line-through text-xl font-bold" :" text-xl font-bold" }>{item.todo}</div>
        <div className="buttons">
            <button  
            
            onClick={(e) => handleedit(e,item.id)}
            className="w-[5vw] h-[6vh] p-2 mx-1 font-bold rounded-md text-zinc-100 bg-violet-800 hover:bg-violet-950 myedit">
            
            <span className="editspan">
             Edit   
             </span> 
              <CiEdit className="relative top-[-19px] left-[-5px] font-bold editlogo" />
           
            </button>
            <button 
            onClick={ (e) => {handledelete (e,item.id)}}
            className=" w-[6vw] h-[6vh] p-2 mx-1 font-bold rounded-md text-zinc-100 bg-violet-800 hover:bg-violet-950 mydelete">
               <span className="deletespan">

            Delete
            </span>
            <MdDelete className="relative top-[-19px] left-[-5px] font-bold deletelogo"  />
            </button  >
        </div>
        </div>
        }) }

      </div>
         </div>
      </>
    )
  }
  
  export default Mytodo
  