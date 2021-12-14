import React from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const navbar = ({ toggle }) => {
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">euro</NavLogo>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLinks to="about">About</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="discover">discover</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="services">services</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="signup">signup</NavLinks>
          </NavItem>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/signin">Sign in</NavBtnLink>
        </NavBtn>
      </NavbarContainer>
    </Nav>
  );
};

export default navbar;
