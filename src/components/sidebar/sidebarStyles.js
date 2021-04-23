import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

export const SidebarContainer = styled.div`
	display: ${({ isOpen }) => (isOpen ? "grid" : "none")};
	position: fixed;
	top: 0;
	z-index: 99;
	background: #f9f9f9;
	width: 100vw;
	min-height: 100vh;
	transition: 0.3s ease-in-out;
	opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
	/* top: ${({ isOpen }) => (isOpen ? "0" : "-100%")}; */
`;

export const SidebarMenu = styled.div`
	display: grid;
	/* width: 100%; */
	align-items: center;
	justify-items: center;
	grid-template-columns: 1fr;
	grid-template-rows: 8rem repeat(5, minmax(min-content, calc(70vh / 6)));
`;

export const CloseIcon = styled(FaTimes)`
	display: grid;
	justify-self: flex-end;
	/* margin-right: calc(80vh / 12); */
	margin-right: 4rem;
	color: #777;
	font-size: 2.5rem;
	&:hover {
		transform: scale(1.2);
		cursor: pointer;
		color: #ff7043;
	}
`;

export const SidebarLink = styled(LinkS)`
	display: grid;
	font-size: 2.5rem;
	font-weight: bold;
	transition: 0.2s ease-in-out;
	text-decoration: none;
	color: #777;

	&:hover {
		cursor: pointer;
		color: #ff7043;
	}
`;

export const MoreLink = styled(LinkR)`
	display: grid;
	font-size: 2.5rem;
	font-weight: bold;
	transition: 0.2s ease-in-out;
	text-decoration: none;
	color: #777;

	&:hover {
		cursor: pointer;
		color: #ff7043;
	}
`;
