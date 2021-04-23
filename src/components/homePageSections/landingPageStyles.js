import styled from "styled-components";

export const LandingPageContainer = styled.div`
	display: grid;
	grid-template-rows: minmax(100vh, min-content);
	position: relative;
	justify-items: center;
	align-items: center;
`;

export const BackgroundImage = styled.img`
	display: ${(props) => (props.imageDisplay ? "inline" : "none")};
	width: 100%;
	height: 100%;
	object-fit: cover;
	position: fixed;
	z-index: -5;
`;

export const PlayerWrapper = styled.div`
	display: ${(props) => (props.videoDisplay ? "grid" : "none")};
	justify-self: center;
	align-self: flex-start;
	width: 100vw;
	height: 100vh;
	object-fit: cover;
	position: fixed;
	z-index: -5;
`;

export const LandingPageContent = styled.div`
	display: grid;
	width: 90vw;
	margin-top: 12rem;
	grid-gap: 0.75rem;
	align-self: flex-end;
	justify-self: center;
	align-items: center;
	justify-items: flex-start;
	background-color: rgba(200, 200, 200, 0.1);
	box-shadow: 0 0 0.5rem 0.25rem rgba(0, 0, 0, 0.3);
	border-top-left-radius: 0.25rem;
	border-top-right-radius: 0.25rem;
	padding-bottom: 2.5rem;
`;

export const Date = styled.div`
	color: #aaa;
	font-size: 3.5rem;
	padding-left: 3rem;
	padding-top: 1.2rem;
	text-shadow: 0rem 0rem 1.5rem rgba(0, 0, 0, 0.9);
`;

export const SubHeading = styled.div`
	color: #bbb;
	font-size: 2rem;
	padding-left: 3rem;
	padding-bottom: 1rem;
	text-shadow: 0rem 0rem 1.5rem rgba(0, 0, 0, 0.9);
`;

export const Title = styled.div`
	color: #bbb;
	font-size: 2.5rem;
	padding-left: 3rem;
	text-shadow: 0rem 0rem 1.5rem rgba(0, 0, 0, 0.9);

	@media screen and (max-width: 50rem) {
		font-size: 2.5rem;
	}
`;

export const DescriptionWrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr min-content;
	text-shadow: 0rem 0rem 1.5rem rgba(0, 0, 0, 0.9);
	overflow: hidden;
	padding: 0 3rem;
	height: ${(props) => (props.descWrapperOpen ? "min-content" : "3rem")};

	&:hover {
		cursor: pointer;
	}
`;

export const Description = styled.div`
	color: #bbb;
	font-size: 2rem;
	text-align: justify;
`;

export const ArrowWrapper = styled.div`
	display: ${(props) => (props.descWrapperOpen ? "grid" : "none")};
	align-self: flex-start;
	padding-top: 0.7rem;
	padding-left: 1rem;
	font-size: 2rem;
`;

// export const ArrowForward = styled(MdArrowForward)`
// 	color: #bbb;
// 	padding-left: 3rem;
// 	font-size: 6rem;
// `;

// export const VideoBg = styled.video`
// 	width: 100%;
// 	height: 100%;
// 	-o-object-fit: cover;
// 	object-fit: cover;
// 	background: #232a34;
// `;