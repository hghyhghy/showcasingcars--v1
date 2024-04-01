import  { useState } from 'react'
import {useDispatch} from 'react-redux'
import { addTodo } from '../features/todo/todoslice'
import { IoIosAddCircle } from "react-icons/io";


const TaskInput = () => {
    const [input, setinput] = useState("")
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        // /preventdefault stops the form from auto submitting
        e.preventDefault()
        // calling the reducer inside the dispatch
        dispatch(addTodo(input))
        setinput(" ")

        }
    
  return (
    //  creating a form 
    <form onSubmit={addTodoHandler} className="flex items-center justify-center mt-12 space-x-3">
    <input
      type="text"
      className="px-3 py-1 text-base leading-8 text-gray-100 transition-colors duration-200 ease-in-out bg-gray-800 border border-gray-700 rounded outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900"
      placeholder="Enter a Todo..."
      value={input}
      onChange={(e) => setinput(e.target.value)}
    />
    <div className='relative flex items-center justify-center -top-1 left-[1rem]'>

    <button
      type="submit"
      className="w-[9rem] px-6 py-2 text-lg text-white bg-indigo-500 border-0 rounded focus:outline-none hover:bg-indigo-600"
      > 
      Add Todo
    </button>
    <IoIosAddCircle  className=' -left-[1.8rem] relative font-bold  text-2xl'/>
      </div>
  </form>
  )

  }
export default TaskInput
