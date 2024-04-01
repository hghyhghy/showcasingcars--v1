import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, updateTodo } from '../features/todo/todoslice';

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [updatedTexts, setUpdatedTexts] = useState({});
  const [isTextFieldActive, setIsTextFieldActive] = useState(false);

  const handleEdit = (id, text) => {
    setUpdatedTexts({ ...updatedTexts, [id]: text });
    setIsTextFieldActive(true); // Set the text field active
  };

  const handleUpdate = (id) => {
    dispatch(updateTodo({ id, text: updatedTexts[id] }));
    setUpdatedTexts({ ...updatedTexts, [id]: '' });
    setIsTextFieldActive(false); // Set the text field inactive after updating
  };

  const handleDelete = (id) => {
    dispatch(removeTodo(id));
    setUpdatedTexts({ ...updatedTexts, [id]: '' });
    setIsTextFieldActive(false); // Set the text field inactive after deleting
  };

  return (
    <>
      <div className=' top-10 flex items-start justify-start  w-[50vw] mt-5 font-semibold uppercase relative left-[19rem]'>Previous Todos</div>
      <div className='flex items-start justify-start  w-[50vw] mt-5 font-semibold uppercase relative left-[3rem]'>updated Todos</div>
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="flex items-center justify-between px-4 py-2 mt-4 rounded bg-zinc-800"
            key={todo.id}
          > 
            <input
              type="text"
              value={updatedTexts[todo.id] || ''}
              onChange={(e) => setUpdatedTexts({ ...updatedTexts, [todo.id]: e.target.value })}
              className="font-bold text-white list-none bg-gray-700 border-b-2 border-transparent rounded md:inline-block focus:outline-none focus:border-yellow-500 lg:no-underline"
            />
            <div className='font-mono text-white '>{todo.text}</div>
            <div className="flex gap-5"> {/* Wrap buttons in a div for styling */}
              <button
                onClick={() => handleDelete(todo.id)}
                className="px-4 py-1 text-white bg-red-500 border-0 rounded focus:outline-none hover:bg-red-600 text-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </button>
              <button
                onClick={() => handleEdit(todo.id, todo.text)}
                className="px-4 py-1 text-white bg-blue-500 border-0 rounded focus:outline-none hover:bg-blue-600 text-md"
              >
                Edit
              </button>
              <button
                onClick={() => handleUpdate(todo.id)}
                className="px-4 py-1 text-white bg-green-500 border-0 rounded focus:outline-none hover:bg-green-600 text-md"
              >
                Update
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos;
