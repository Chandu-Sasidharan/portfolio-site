import React from 'react';
import {
  SidebarContainer,
  CloseIcon,
  SidebarMenu,
  SidebarLink
} from './sidebarStyles';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <SidebarContainer
      id="sidebarContainer"
      isOpen={isOpen}
      onClick={toggleSidebar}
    >
      <SidebarMenu id="sidebarMenu">
        <CloseIcon id="icon-test" onClick={toggleSidebar} />
        <SidebarLink
          to="about"
          onClick={toggleSidebar}
          smooth={true}
          duration={500}
          spy={true}
          offset={-80}
        >
          About
        </SidebarLink>
        <SidebarLink
          to="portfolio"
          onClick={toggleSidebar}
          smooth={true}
          duration={500}
          spy={true}
          offset={-80}
        >
          Portfolio
        </SidebarLink>
        <SidebarLink
          to="canvas"
          onClick={toggleSidebar}
          smooth={true}
          duration={500}
          spy={true}
          offset={-80}
        >
          Canvas
        </SidebarLink>
        <SidebarLink
          to="blog"
          onClick={toggleSidebar}
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
