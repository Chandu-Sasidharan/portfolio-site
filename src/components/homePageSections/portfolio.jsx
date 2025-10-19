import image1 from '../../assets/images/money.svg';
import image2 from '../../assets/images/visiting_card.svg';
import image3 from '../../assets/images/bar_graph.svg';
import {
    PortfolioContainer,
    PortfolioContentWrapper,
    Heading,
    CardsWrapper,
    Card,
    Image,
    SmallHeading,
    Paragraph,
} from './portfolioStyles';

const Portfolio = () => {
    return (
        <PortfolioContainer id="portfolio">
            <PortfolioContentWrapper id="portfolioContentWrapper">
                <Heading id="portfolioHeading">Portfolio</Heading>
                <CardsWrapper id="cardWrapper">
                    <Card>
                        <Image src={image1} />
                        <SmallHeading>Some Content</SmallHeading>
                        <Paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                        </Paragraph>
                    </Card>
                    <Card>
                        <Image src={image2} />
                        <SmallHeading>Other Content</SmallHeading>
                        <Paragraph>
                            Sed do eiusmod tempor incididunt ut labore et
                            dolore.
                        </Paragraph>
                    </Card>
                    <Card>
                        <Image src={image3} />
                        <SmallHeading>Another One</SmallHeading>
                        <Paragraph>
                            Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco.
                        </Paragraph>
                    </Card>
                </CardsWrapper>
            </PortfolioContentWrapper>
        </PortfolioContainer>
    );
};

export default Portfolio;
