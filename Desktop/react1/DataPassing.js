"use client";
import React, { useState } from 'react'
import Header from '@/Components/Header'

const page = () => {
  const [Num, setNum] = useState(10)
  return (
    <div>
       <Header num={Num}/>
    </div>
  )
}

export default page
