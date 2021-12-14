import React from "react";
import {
  CloseIcon,
  Icon,
  SidebarWrapper,
  SidebarLink,
  SidebtnWrap,
  SidebarRoute,
  SidebarContainer,
  SidebarMenu,
} from "./SidebarElements";
const sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about">About</SidebarLink>
          <SidebarLink to="discover">discover</SidebarLink>
          <SidebarLink to="service">service</SidebarLink>
          <SidebarLink to="signup">signup</SidebarLink>
        </SidebarMenu>
        <SidebtnWrap>
          <SidebarRoute to="/signin">Sign in</SidebarRoute>
        </SidebtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default sidebar;
