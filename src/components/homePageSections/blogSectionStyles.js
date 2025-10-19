import styled from 'styled-components';

export const BlogSectionContainer = styled.div`
    display: grid;
    color: #fff;
    background-color: #a5d6a7;
    align-items: center;
    justify-items: center;
`;

export const BlogSectionContentWrapper = styled.div`
    display: grid;
    grid-gap: 4rem;
    margin: 8vw 0;
    max-width: 80vw;
    align-items: center;
    grid-template-columns: 1fr 1fr;

    @media screen and (max-width: 60em) {
        grid-template-columns: 1fr;
        margin: 15vw 0;
    }
`;

export const BlogSectionTextContainer = styled.div`
    display: grid;
    grid-gap: 2.5rem;
    height: min-content;
    align-items: center;
    justify-items: flex-start;
`;

export const SmallHeading = styled.div`
    font-size: 1.8rem;
    font-weight: 500;
    letter-spacing: 0.2rem;
    text-transform: uppercase;
    color: #01bf71;
`;

export const MainHeading = styled.div`
    font-size: 4rem;
    font-weight: 500;
    line-height: 1;
`;

export const Paragraph = styled.div`
    font-size: 2rem;
    text-align: justify;
`;

export const BlogSectionImage = styled.img`
    width: 100%;

    @media screen and (max-width: 60em) {
        width: 95%;
        margin: 5%;
        align-self: center;
        justify-self: center;
    }
`;
