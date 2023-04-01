import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <StyledNav>
      <h1>
        <NavLink className="logo" to="/">
          Capture
        </NavLink>
      </h1>
      <ul>
        <li>
          <NavLink to="/about">About Us</NavLink>
        </li>
        <li>
          <NavLink to="/work">Our Work</NavLink>
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5rem;
  background: #282828;
  .logo {
    font-size: 1.8rem;
    font-family: "Lobster", cursive;
    font-weight: lighter;
  }
  ul {
    list-style: none;
    display: flex;
    li {
      margin-left: 5rem;
      @media screen and (max-width: 600px) {
        margin-left: 2rem;
        a {
          font-size: 0.8rem;
        }
      }
    }
  }
  a {
    color: white;
    text-decoration: none;
  }
`;

export default Nav;
