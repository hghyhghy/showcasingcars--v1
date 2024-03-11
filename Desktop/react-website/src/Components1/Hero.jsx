import React from 'react'
import Hero from './Hero'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { Button } from '../Styles/Button'
import { AppContext, useGlobalContext } from '../Context'
const Services = ({mybtn,to}) => {
   
  const {name,image} = useGlobalContext()
  return <Wrapper>
  
   <div className="container grid grid-two-column">
    <div className="section-hero-data">

   <p className='hero-top-data text-slate-100'>This is Me</p>
   <h1 className='text-purple-600 hero-heading'>{name}</h1>
   <p className="text-gray-400 hero-para"> This is {name} , a learner  and a dreamer want to establish myself in tech sector</p>
   

    <button className='hireme-btn1'>
    <div className="relative w-full h-full hireme-container top-5">
      <NavLink  to={to}>{mybtn} </NavLink>
      </div>
    </button>
   
    </div>
    <div className="section-hero-image">
      <picture>

      <img src={image} alt=""  className='hero-img' />
      </picture>
    </div>

   </div>
  </Wrapper>
}
const Wrapper = styled.section`
padding: 9rem  0;
.section-hero-data{
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.btn{
  max-width: 16rem;
}

.hero-top-data{
  text-transform: uppercase;
  font-weight: 500;
  font-size: 1.5rem;
}
.hero-heading{
  text-transform: uppercase;
  font-size: 5.7rem;
  line-height: 6rem;
}
.hero-para{
  margin-top: 1.5rem;
  margin-bottom: 3.4rem;
  max-width: 60rem;
}
.section-hero-image{
  display: flex;
  justify-content: center;
  align-items: center;
}
.picture{
  text-align: center;
}
.hero-img{
  max-width: 80%;
}

`
export default Services
