import styled from 'styled-components';

let breakpoint1 = '60em';
let breakpoint2 = '40em';
let breakpoint3 = '30em';

let referencewidth1 = '40vw';
let referencewidth2 = '50vw';
let referencewidth3 = '60vw';

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
  background: #fff;
  align-items: center;
  justify-items: center;
  border-radius: 0.5rem;
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
  width: 12.84vw;
  height: 12.84vw;

  @media screen and (max-width: ${breakpoint1}) {
    width: calc(${referencewidth1} / 1.5);
    height: calc(${referencewidth1} * 0.6);
  }

  @media screen and (max-width: ${breakpoint2}) {
    width: calc(${referencewidth2} / 1.5);
    height: calc(${referencewidth2} * 0.6);
  }

  @media screen and (max-width: ${breakpoint3}) {
    width: calc(${referencewidth3} / 1.5);
    height: calc(${referencewidth3} * 0.6);
  }
`;

export const SmallHeading = styled.div`
  color: #666;
  font-weight: 500;
  letter-spacing: 0.16vw;
  font-size: 1.36vw;

  @media screen and (max-width: ${breakpoint1}) {
    letter-spacing: calc(${referencewidth1} / 128);
    font-size: calc(${referencewidth1} / 16);
  }

  @media screen and (max-width: ${breakpoint2}) {
    letter-spacing: calc(${referencewidth2} / 128);
    font-size: calc(${referencewidth2} / 16);
  }

  @media screen and (max-width: ${breakpoint3}) {
    letter-spacing: calc(${referencewidth3} / 128);
    font-size: calc(${referencewidth3} / 16);
  }
`;

export const Paragraph = styled.div`
  align-self: flex-start;
  text-align: justify;
  color: #777;
  font-size: calc(100vw / 80);
  margin: 0 calc(100vw / 40);

  @media screen and (max-width: ${breakpoint1}) {
    font-size: calc(${referencewidth1} / 16);
    margin: 0 calc(${referencewidth1} / 8);
  }

  @media screen and (max-width: ${breakpoint2}) {
    font-size: calc(${referencewidth2} / 16);
    margin: 0 calc(${referencewidth2} / 8);
  }

  @media screen and (max-width: ${breakpoint3}) {
    font-size: calc(${referencewidth3} / 16);
    margin: 0 calc(${referencewidth3} / 8);
  }
`;
