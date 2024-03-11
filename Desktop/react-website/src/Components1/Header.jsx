import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';
import styled from 'styled-components';

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        <img
          className="h-[11vh] logo sm:w-32 md:w-48 lg:w-64 xl:w-90 rounded-2xl"
          src="src/subham-sarkar-high-resolution-logo (1).png"
          alt="logo"
        />
      </NavLink>
      <Navbar />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media(max-width:768px) {
    .logo{
    position: relative;
    left: -42px;
    width: 20vw;
    max-width: 25vw;
    max-height: 6vh;
    
  }
  }
`;

export default Header;
