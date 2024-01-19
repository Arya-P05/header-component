// components/Header.js
import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  background-color: #333;
  color: #fff;
  padding: 1rem;
  text-align: center;
  font-family: 'YourChosenFont', sans-serif;
`;

const Navigation = styled.nav`
  margin-top: 10px;
`;

const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  margin: 0 15px;
  font-size: 1rem;
  transition: color 0.3s ease;

  &:hover {
    color: #ffcc00; /* Change the color on hover */
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <h1>My Reusable Header</h1>
      <Navigation>
        <NavLink href="#">Home</NavLink>
        <NavLink href="#">About</NavLink>
        <NavLink href="#">Services</NavLink>
        <NavLink href="#">Contact</NavLink>
      </Navigation>
    </StyledHeader>
  );
};

export default Header;
