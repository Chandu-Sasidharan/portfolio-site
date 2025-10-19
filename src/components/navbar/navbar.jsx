import { useState, useEffect } from 'react';
import { throttle } from 'lodash';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import { Navigation, NavLogo, NavItem, MobileIcon } from './navbarStyles';
import useScrollOffset from '../../hooks/useScrollOffset';

const Navbar = ({ toggleSidebar }) => {
    const [isTransparent, setIsTransparent] = useState(true);
    const offset = useScrollOffset();

    const goToHome = () => {
        scroll.scrollToTop();
    };

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setIsTransparent(false);
        } else {
            setIsTransparent(true);
        }
    };

    useEffect(() => {
        const throttledHandleScroll = throttle(handleScroll, 100);
        window.addEventListener('scroll', throttledHandleScroll);

        return () => {
            return () =>
                window.removeEventListener('scroll', throttledHandleScroll);
        };
    }, []);

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <Navigation id="navigation" $isTransparent={isTransparent}>
                    <NavLogo onClick={goToHome} to="/">
                        Home
                    </NavLogo>
                    <NavItem
                        $isTransparent={isTransparent}
                        to="about"
                        smooth={true}
                        duration={500}
                        spy={true}
                        offset={offset}
                    >
                        About
                    </NavItem>
                    <NavItem
                        $isTransparent={isTransparent}
                        to="portfolio"
                        smooth={true}
                        duration={500}
                        spy={true}
                        offset={offset}
                    >
                        Portfolio
                    </NavItem>
                    <NavItem
                        $isTransparent={isTransparent}
                        to="canvas"
                        smooth={true}
                        duration={500}
                        spy={true}
                        offset={offset}
                    >
                        Canvas
                    </NavItem>
                    <NavItem
                        $isTransparent={isTransparent}
                        to="blog"
                        smooth={true}
                        duration={500}
                        spy={true}
                        offset={offset}
                    >
                        Blog
                    </NavItem>
                    <MobileIcon onClick={toggleSidebar}>
                        <FaBars />
                    </MobileIcon>
                </Navigation>
            </IconContext.Provider>
        </>
    );
};

export default Navbar;
