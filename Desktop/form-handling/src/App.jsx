


import { useState } from "react";

import "./index.css";
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting},
  } = useForm();


  const delay =(d) =>{
    return new Promise((resolve,reject) => {
      setTimeout(() => {
        resolve()
      }, d*1000);
    })
  }

  const onSubmit  =async (data) => {

    let r = await fetch('http://localhost:3000/' ,{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(data)})
    let req=  await r.text()
    console.log(data ,req)
  
  }
  return (
    <>
    {isSubmitting && <div className="ml-[45vw]">Loading ...</div>}
      <div className="w-full -mr-[18vw]">
        <form
          className=" ml-[39vw] w-full h-full "
          action=""
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            className="w-[25vw] mb-5 h-[10vh] p-5 rounded-lg  border-none"
            placeholder="Anhel Delitte"
            {...register("username", {
              required: true,
              minLength: { value: 3, message: "Minlength is 3" },
              maxLength: { value: 10, message: "Maxlength is 10" },
            })}
            type="text"
          />
          {errors.username && (
            <span className="ml-2 font-bold text-red-600">
              {errors.username.message}
            </span>
          )}
          <br />
          <input
            className="w-[25vw] mb-5 h-[10vh] p-5  rounded-lg border-none"
            placeholder="@#$%&*!!@abc"
            {...register("password", {
              required: true,
              minLength: { value: 5, message: "Minlength of password is 5" },
              maxLength: { value: 10, message: "Maxlength of password is 10" },
            })}
            type="password"
          />
          {errors.password && (
            <span className="relative text-red-600  left-[.5vw] w-full font-bold">
              {errors.password.message}
            </span>
          )}
          <br />

          <input 
          disabled={isSubmitting}
          className="p-2 border-2 rounded-md border-slate-400 ml-[9vw] text-violet-400 cursor-pointer " type="submit" value="Submit" />
           {errors.myform && <span className="relative font-bold text-red-600 -ml-[8vw] top-11">
              {errors.myform.message}
            </span>
          }
           {errors.blocked && <span className="relative font-bold text-red-600 -ml-[8vw] top-11">
              {errors.blocked.message}
            </span>
          }
        </form>
      </div>
    </>
  );
}

export default App;
