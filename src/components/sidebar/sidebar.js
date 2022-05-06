import React from 'react';
import {
  SidebarContainer,
  CloseIcon,
  SidebarMenu,
  SidebarLink
} from './sidebarStyles';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer id="sidebarContainer" isOpen={isOpen} onClick={toggle}>
      <SidebarMenu id="sidebarMenu">
        <CloseIcon id="icon-test" onClick={toggle} />
        <SidebarLink
          to="about"
          onClick={toggle}
          smooth={true}
          duration={500}
          spy={true}
          offset={-80}
        >
          About
        </SidebarLink>
        <SidebarLink
          to="portfolio"
          onClick={toggle}
          smooth={true}
          duration={500}
          spy={true}
          offset={-80}
        >
          Portfolio
        </SidebarLink>
        <SidebarLink
          to="canvas"
          onClick={toggle}
          smooth={true}
          duration={500}
          spy={true}
          offset={-80}
        >
          Canvas
        </SidebarLink>
        <SidebarLink
          to="blog"
          onClick={toggle}
          smooth={true}
          duration={500}
          spy={true}
          offset={-80}
        >
          Blog
        </SidebarLink>
      </SidebarMenu>
    </SidebarContainer>
  );
};

export default Sidebar;
