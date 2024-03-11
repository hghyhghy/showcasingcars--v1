 

 import React from 'react'
 import { NavLink } from 'react-router-dom'
 import styled from 'styled-components'
 
 const Navbar = () => {
   return (
     <Nav>
        <div className="w-full h-full mt-2 menuIcon">
            <ul className="navbar-list ">
                <li>
                    <NavLink className="navbar-link " to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink className="navbar-link" to="/about">About</NavLink>
                </li>  <li>
                    <NavLink className="navbar-link" to="/service">Services</NavLink>
                </li>  <li>
                    <NavLink className="p-4 text-3xl font-semibold uppercase  hover:border-2 hover:bg-transparent navbar-link1 bg-violet-700 rounded-xl text-zinc-200 hover: hover:border-violet-700" to="/contact">Contact</NavLink>
                </li>
            </ul>
        </div>
     </Nav>
   )
 } 

 
const Nav = styled.nav`
.navbar-list {
  display: flex;
  gap: 3rem;

  li {
    list-style: none;

    .navbar-link {
      &:link,
      &:visited{
        display: inline-block;
        text-decoration: none;
        font-size: 1.8rem;
        font-weight: 500;
        text-transform: uppercase;
        /* color:${({theme}) => theme.colors.black}; */
        color: rgb(45 212 191);
        transition: color 0.3s linear;
      }
      &:hover,
      &:active {
        color: ${({ theme }) => theme.colors.helper};
      }
    }
  }
}
`;
 
 export default Navbar
 