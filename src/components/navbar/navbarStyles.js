import { Link as LinkS } from 'react-scroll';
import styled from 'styled-components';

export const Navigation = styled.nav`
    background: ${({ $isTransparent }) =>
        $isTransparent ? 'rgba(0, 0, 0, 0.2)' : '#FF7043'};
    transition: all 0.3s;
    box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.3);
    z-index: 10;
    height: 8rem;
    margin-top: -8rem;
    padding-right: 4rem;
    position: sticky;
    top: 0;
    font-size: 2rem;
    display: grid;
    grid-column-gap: 5rem;
    justify-items: center;
    grid-template-columns: [hom-start] 1fr [hom-end] repeat(
            4,
            [col-start] min-content [col-end]
        );

    @media screen and (max-width: 50em) {
        grid-template-columns:
            [hom-start] minmax(min-content, 1fr) [hom-end mobIcon-start] minmax(
                min-content,
                1fr
            )
            [mobIcon-end];
        grid-column-gap: 0;
    }
`;

export const NavLogo = styled(LinkS)`
    display: grid;
    align-items: center;
    justify-self: flex-start;
    color: #fff;
    height: 8rem;
    cursor: pointer;
    font-size: 2.8rem;
    margin-left: 5rem;
    font-weight: 500;
    text-decoration: none;
    transition: all 0.2s;
    &:hover {
        transform: scale(1.1);
        padding-left: 0.5rem;
    }
`;

export const NavItem = styled(LinkS)`
    color: #fff;
    height: 8rem;
    display: grid;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
    font-weight: 400;
    transition: all 0.1s ease-in-out;

    &.active {
        padding-top: 1rem;
        border-bottom: 3px solid white;
    }

    &:hover {
        color: ${(props) => (props.$isTransparent ? '#FF7043' : '#4f4f4f')};
    }

    @media screen and (max-width: 50em) {
        display: none;
    }
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 50em) {
        display: grid;
        grid-column: mobIcon-start / mobIcon-end;
        align-items: center;
        justify-self: flex-end;
        font-size: 2.8rem;
        cursor: pointer;
    }
`;
