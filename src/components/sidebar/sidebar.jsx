import useScrollOffset from '../../utils/useScrollOffset';
import {
  SidebarContainer,
  CloseIcon,
  SidebarMenu,
  SidebarLink
} from './sidebarStyles';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const offset = useScrollOffset();

  return (
    <SidebarContainer
      id="sidebarContainer"
      $isOpen={isOpen}
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
          offset={offset}
        >
          About
        </SidebarLink>
        <SidebarLink
          to="portfolio"
          onClick={toggleSidebar}
          smooth={true}
          duration={500}
          spy={true}
          offset={offset}
        >
          Portfolio
        </SidebarLink>
        <SidebarLink
          to="canvas"
          onClick={toggleSidebar}
          smooth={true}
          duration={500}
          spy={true}
          offset={offset}
        >
          Canvas
        </SidebarLink>
        <SidebarLink
          to="blog"
          onClick={toggleSidebar}
          smooth={true}
          duration={500}
          spy={true}
          offset={offset}
        >
          Blog
        </SidebarLink>
      </SidebarMenu>
    </SidebarContainer>
  );
};

export default Sidebar;
