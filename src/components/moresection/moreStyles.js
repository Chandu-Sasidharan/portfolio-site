import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
	display: grid;
	min-height: 100vh;
	padding: 5rem 0;
	justify-items: center;
	align-items: center;
	background: white;
`;

export const MoreContentWrapper = styled.div`
	display: grid;
	background-color: #eee;
	color: #777;
	max-width: 80vw;
	align-items: center;
	justify-items: center;
	box-shadow: 0 0 0.3em 0.2rem rgba(0, 0, 0, 0.2);
	border-radius: 0.25em;

	grid-template-columns: [col1-start] 1fr [col1-end col2-start] 1fr [col2-end];

	@media screen and (max-width: 1200px) {
		grid-template-columns: [col1-start] 1fr [col1-end];
	}
`;

export const MoreContent = styled.div`
	display: grid;
	height: 100%;
	grid-gap: 2rem;
	padding: 5rem;
	justify-items: left;
	align-items: center;
	grid-column: col1-start / col1-end;
	@media screen and (max-width: 1200px) {
		grid-gap: 3rem;
	}
`;

export const MoreTitle = styled.div`
	display: grid;
	place-content: start;
	font-size: 2.4rem;
`;

export const MoreTitleElement = styled.div`
	display: grid;
	place-content: start;
	width: fit-content;
	height: fit-content;
	font-weight: bold;
`;

export const MoreTitleElementSmall = styled.div`
	display: grid;
	place-content: start;
	width: fit-content;
	height: fit-content;
	font-size: 1.8rem;
`;

export const MoreText = styled.div`
	display: grid;
	font-size: 2rem;
`;

export const Homebutton = styled(Link)`
	background: transparent;
	width: fit-content;
	height: fit-content;
	padding: 1rem 2.8rem;
	font-size: 1.6rem;
	font-weight: bold;
	border: 2px solid #bbb;
	border-radius: 0.3rem;
	text-decoration: none;
	color: #777;
	cursor: pointer;
	transition: all 0.2s;

	&:hover {
		background: #bbb;
	}
`;

export const MoreImageWrapper = styled.div`
	display: ${({ leftside }) => (leftside ? "none" : "grid")};
	padding: 6rem 6rem;
	align-self: center;

	@media screen and (max-width: 1200px) {
		display: ${({ leftside }) => (leftside ? "grid" : "none")};
		padding: 0;
	}
`;

export const MoreImage = styled.img`
	box-shadow: 0 0 0.25em 0.15rem rgba(0, 0, 0, 0.4);
	width: 100%;
	border-radius: 0.5rem;
`;
