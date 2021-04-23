import styled from "styled-components";

let breakpoint1 = "60em";
let breakpoint2 = "40em";
let breakpoint3 = "30em";

let referencewidth1 = "40vw";
let referencewidth2 = "50vw";
let referencewidth3 = "60vw";

//Just for trial, not using at the moment////////////////////////////
//The other method with vw reference width was found more effective
let card_height_base = "35rem";
let card_width_base = "25rem";
let image_size_base = "16rem";
let small_heading_font_size_base = "1.7rem";
let small_heading_letter_spacing_base = "0.2rem";
let paragraph_font_size_base = "1.5rem";
let paragraph_margin_base = "3rem";
/////////////////////////////////////////////////////////////////////

export const PortfolioContainer = styled.div`
	display: grid;
	color: #fff;
	background-color: #a5d6a7;
	align-items: center;
	justify-items: center;
`;

export const PortfolioContentWrapper = styled.div`
	display: grid;
	grid-gap: 4rem;
	margin: 8vh 0;
	max-width: 80vw;
	align-items: center;
	justify-items: center;
	grid-template-columns: 1fr;

	@media screen and (max-width: ${breakpoint1}) {
		margin: 15vw 0;
	}
`;

export const Heading = styled.div`
	font-size: 4rem;
	letter-spacing: 2rem;
	color: #fff;
	justify-self: center;
	margin-left: 2rem;

	@media screen and (max-width: ${breakpoint3}) {
		font-size: 3rem;
		letter-spacing: 1.5rem;
	}
`;

export const CardsWrapper = styled.div`
	display: grid;
	grid-gap: 4rem;
	grid-template-columns: repeat(3, 1fr);

	@media screen and (max-width: ${breakpoint1}) {
		grid-template-columns: 1fr;
		grid-gap: 6rem;
	}
`;

export const Card = styled.div`
	display: grid;
	/* grid-gap: 1rem; */
	background: #fff;
	align-items: center;
	justify-items: center;
	border-radius: 0.5rem;
	/* width: ${card_width_base};
	height: ${card_height_base}; */
	width: 20vw;
	height: calc(20vw * 1.4);
	box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.2);
	transition: all 0.1s ease-in-out;

	&:hover {
		transform: scale(1.02);
		cursor: pointer;
	}

	@media screen and (max-width: ${breakpoint1}) {
		width: ${referencewidth1};
		height: calc(${referencewidth1} * 1.4);
	}

	@media screen and (max-width: ${breakpoint2}) {
		width: ${referencewidth2};
		height: calc(${referencewidth2} * 1.4);
	}

	@media screen and (max-width: ${breakpoint3}) {
		width: ${referencewidth3};
		height: calc(${referencewidth3} * 1.4);
	}
`;

export const Image = styled.img`
	/* height: ${image_size_base};
	width: ${image_size_base}; */
	width: 12.84vw;
	height: 12.84vw;

	@media screen and (max-width: ${breakpoint1}) {
		width: calc(${referencewidth1} / 1.558);
		height: calc(${referencewidth1} * 0.643);
	}

	@media screen and (max-width: ${breakpoint2}) {
		width: calc(${referencewidth2} / 1.558);
		height: calc(${referencewidth2} * 0.643);
	}

	@media screen and (max-width: ${breakpoint3}) {
		width: calc(${referencewidth3} / 1.558);
		height: calc(${referencewidth3} * 0.643);
	}
`;

export const SmallHeading = styled.div`
	color: #666;
	font-weight: bold;
	/* font-size: ${small_heading_font_size_base};
	letter-spacing: ${small_heading_letter_spacing_base}; */
	letter-spacing: 0.16vw;
	font-size: 1.36vw;

	@media screen and (max-width: ${breakpoint1}) {
		letter-spacing: calc(${referencewidth1} / 125);
		font-size: calc(${referencewidth1} / 14.687);
	}

	@media screen and (max-width: ${breakpoint2}) {
		letter-spacing: calc(${referencewidth2} / 125);
		font-size: calc(${referencewidth2} / 14.687);
	}

	@media screen and (max-width: ${breakpoint3}) {
		letter-spacing: calc(${referencewidth3} / 125);
		font-size: calc(${referencewidth3} / 14.687);
	}
`;

export const Paragraph = styled.div`
	align-self: flex-start;
	text-align: justify;
	color: #777;
	/* font-size: ${paragraph_font_size_base};
	margin: 0 ${paragraph_margin_base}; */
	font-size: calc(100vw / 83.3);
	margin: 0 calc(100vw / 41.65);

	@media screen and (max-width: ${breakpoint1}) {
		font-size: calc(${referencewidth1} / 16.646);
		margin: 0 calc(${referencewidth1} / 8.322);
	}

	@media screen and (max-width: ${breakpoint2}) {
		font-size: calc(${referencewidth2} / 16.646);
		margin: 0 calc(${referencewidth2} / 8.322);
	}

	@media screen and (max-width: ${breakpoint3}) {
		font-size: calc(${referencewidth3} / 16.646);
		margin: 0 calc(${referencewidth3} / 8.322);
	}
`;
