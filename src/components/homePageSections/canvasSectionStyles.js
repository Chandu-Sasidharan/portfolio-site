import styled from 'styled-components';

export const CanvasSectionContainer = styled.div`
  display: grid;
  color: #777;
  background-color: #f9f9f9;
  align-items: center;
  justify-items: center;
`;

export const CanvasSectionContentWrapper = styled.div`
  display: grid;
  grid-gap: 4rem;
  max-width: 80vw;
  margin: 8vw 0;
  align-items: center;
  grid-template-columns: 1fr 1fr;

  @media screen and (max-width: 60em) {
    grid-template-columns: 1fr;
    margin: 15vw 0;
  }
`;

export const CanvasSectionTextContainer = styled.div`
  display: grid;
  grid-gap: 2.5rem;
  /* height: min-content; */
  align-items: center;
  justify-items: flex-start;
  grid-column: 2/3;
  grid-row: 1/2;

  @media screen and (max-width: 60em) {
    grid-column: 1/2;
    grid-row: 1/2;
  }
`;

export const SmallHeading = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
  letter-spacing: 0.2rem;
  text-transform: uppercase;
  color: #01bf71;
`;

export const MainHeading = styled.div`
  font-size: 4rem;
  font-weight: bold;
  line-height: 1;
`;

export const Paragraph = styled.div`
  font-size: 2rem;
  text-align: justify;
`;

export const CanvasSectionImage = styled.img`
  width: 100%;
  grid-column: 1/2;
  grid-row: 1/2;

  @media screen and (max-width: 60em) {
    grid-column: 1/2;
    grid-row: 2/3;
    width: 95%;
    margin: 5%;
    align-self: center;
    justify-self: center;
  }
`;
