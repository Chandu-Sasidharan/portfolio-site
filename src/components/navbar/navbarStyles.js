import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";
import styled from "styled-components";

export const Navigation = styled.nav`
	background: ${({ $iftransparent }) =>
		$iftransparent ? "rgba(0, 0, 0, 0.2)" : "#FF7043"}; //FF7043 previous color
	transition: all 0.3s;
	box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.3);
	z-index: 10;
	height: 8rem;
	margin-top: -8rem;
	position: sticky;
	top: 0;
	font-size: 2rem;
	display: grid;
	grid-column-gap: 5rem;
	justify-items: center;
	/* align-items: center; */
	grid-template-columns:
		[hom-start] 1fr [hom-end] repeat(4, [col-start] min-content [col-end])
		[ mor-start] 1.5fr [mor-end];

	@media screen and (max-width: 50rem) {
		grid-template-columns:
			[hom-start] minmax(min-content, 1fr) [hom-end mor-start] minmax(
				min-content,
				1fr
			)
			[mor-end];
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
	font-weight: bold;
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
	transition: all 0.1s ease-in-out;

	&.active {
		padding-top: 1rem;
		border-bottom: 3px solid white;
	}

	&:hover {
		color: ${(props) => (props.$iftransparent ? "#FF7043" : "#4f4f4f")};
		font-weight: bold;
	}

	@media screen and (max-width: 50rem) {
		display: none;
	}
`;

export const NavBtnWrapper = styled.div`
	display: grid;
	height: 8rem;
	align-items: center;
	justify-self: flex-end;
	margin-right: 2rem;

	@media screen and (max-width: 50rem) {
		display: none;
	}
`;

export const NavBtn = styled(LinkR)`
	background: transparent;
	border-radius: 1rem;
	padding: 0.5rem 3rem;
	color: #fff;
	font-size: 2.5rem;
	cursor: pointer;
	text-decoration: none;
	transition: all 0.3s;

	&:hover {
		border-bottom: 1px solid white;
		border-top: 1px solid white;
		background: rgba(0, 0, 0, 0.2);
		border-radius: 0.8rem;
	}
`;

export const MobileIcon = styled.div`
	display: none;

	@media screen and (max-width: 50rem) {
		display: grid;
		grid-column: mor-start / mor-end;
		height: 8rem;
		align-items: center;
		justify-self: flex-end;
		padding-right: 4rem;
		font-size: 2.8rem;
		cursor: pointer;
	}
`;
