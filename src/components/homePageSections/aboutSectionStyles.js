import styled from "styled-components";

export const AboutContainer = styled.div`
	display: grid;
	background-color: #fff;
	align-items: center;
	justify-items: center;
`;

export const AboutContentWrapper = styled.div`
	width: 90vw;
	margin-bottom: 8vw;
	box-shadow: 0 0 0.25em 0.25rem rgba(0, 0, 0, 0.2);
	border-bottom-left-radius: 0.25rem;
	border-bottom-right-radius: 0.25rem;
	/* border-radius: 1rem; */
`;

export const AboutContentTopSection = styled.div`
	display: grid;
	grid-gap: 4rem;
	background-color: #eee;
	grid-template-columns: repeat(5, 1fr);

	@media screen and (max-width: 50em) {
		grid-template-columns: 1fr;
	}
`;

export const Image = styled.img`
	width: 20rem;
	border-radius: 50%;
	border: 0.4rem solid #fff;
	box-shadow: 0 0 1.5rem rgba(0, 0, 0, 0.2);
	grid-column: 1/3;
	align-self: center;
	justify-self: center;
	transform: translateY(7rem);
	z-index: 5;

	@media screen and (max-width: 50em) {
		grid-column: 1/2;
	}
`;

export const Name = styled.div`
	display: ${({ ontopsection }) => (ontopsection ? "grid" : "none")};
	font-size: 4.5rem;
	color: #777;
	grid-column: 3/7;
	align-self: flex-end;
	justify-self: flex-start;

	@media screen and (max-width: 50em) {
		display: ${({ ontopsection }) => (ontopsection ? "none" : "grid")};
		grid-column: 1/2;
		grid-row: 3/4;
		justify-self: center;
		font-size: 3.5rem;
	}
`;

export const AboutContentBottomSection = styled.div`
	display: grid;
	grid-gap: 4rem;
	background-color: #f7f7f7;
	grid-template-columns: repeat(5, 1fr);
	grid-template-rows: repeat(2, min-content);

	@media screen and (max-width: 50em) {
		grid-template-columns: 1fr;
		grid-gap: 3rem;
	}
`;

export const SocialMediaIcons = styled.div`
	display: grid;
	grid-gap: 4rem;
	padding: 3rem 1rem;
	grid-auto-flow: column;
	width: min-content;
	grid-row: 1/2;
	grid-column: 3/7;
	justify-self: flex-start;

	@media screen and (max-width: 50em) {
		grid-column: 1/2;
		grid-row: 2/3;
		justify-self: center;
		transform: translateY(3rem);
		padding-top: 5rem;
	}
`;

export const IconLink = styled.a`
	display: grid;
	align-self: center;
	justify-self: center;
	color: #777;
	font-size: 2.5rem;

	transition: all 0.1s ease-in-out;

	&:hover {
		transform: scale(1.2);
		cursor: pointer;
		color: #ff7043;
	}
`;

export const Description = styled.div`
	display: grid;
	text-align: justify;
	grid-column: 1/7;
	padding: 8vh 10vw;
	font-size: 2.5rem;
	color: #777;

	@media screen and (max-width: 50em) {
		grid-column: 1/2;
		grid-row: 4/5;
		padding: 0 8vw;
		margin-bottom: 5vw;
		align-self: flex-start;
	}
`;
