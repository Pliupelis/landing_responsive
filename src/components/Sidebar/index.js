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
          <SidebarLink to="about" onClick={toggle}>
            About
          </SidebarLink>
          <SidebarLink to="discover" onClick={toggle}>
            discover
          </SidebarLink>
          <SidebarLink to="service" onClick={toggle}>
            service
          </SidebarLink>
          <SidebarLink to="signup" onClick={toggle}>
            signup
          </SidebarLink>
        </SidebarMenu>
        <SidebtnWrap>
          <SidebarRoute to="/signin">Sign in</SidebarRoute>
        </SidebtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default sidebar;
