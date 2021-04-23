import React from "react";
import { aboutSectionData } from "../../assets/sectionData";
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import {
	AboutContainer,
	AboutContentWrapper,
	AboutContentTopSection,
	Image,
	Name,
	AboutContentBottomSection,
	SocialMediaIcons,
	IconLink,
	Description,
} from "./aboutSectionStyles";

const { name, image, desc } = aboutSectionData;

const About = () => {
	return (
		<>
			<AboutContainer id="about">
				<AboutContentWrapper>
					<AboutContentTopSection id="aboutContentTopSection">
						<Image id="profilepic" src={image} alt="Profile Picture"></Image>
						<Name ontopsection={true} id="nameOnTop">
							{name}
						</Name>
					</AboutContentTopSection>
					<AboutContentBottomSection id="aboutContentBottomSection">
						<SocialMediaIcons id="fa_icons">
							<IconLink
								href="https://www.linkedin.com/in/chandusasidharan/"
								target="_blank"
								aria-label="LinkedIn"
								rel="noopener noreferrer"
							>
								<FaLinkedin />
							</IconLink>
							<IconLink
								href="https://github.com/Chandu-Sasidharan"
								target="_blank"
								aria-label="Twitter"
								rel="noopener noreferrer"
							>
								<FaGithub />
							</IconLink>
							<IconLink
								href="https://www.facebook.com/chandu.sasidharan.3/"
								target="_blank"
								aria-label="Facebook"
								rel="noopener noreferrer"
							>
								<FaFacebook />
							</IconLink>
							<IconLink
								href="https://www.instagram.com/impressions_de_chandu/"
								target="_blank"
								aria-label="Instagram"
								rel="noopener noreferrer"
							>
								<FaInstagram />
							</IconLink>
						</SocialMediaIcons>
						<Name ontopsection={false} id="nameOnBottom">
							{name}
						</Name>
						<Description id="desc">{desc}</Description>
					</AboutContentBottomSection>
				</AboutContentWrapper>
			</AboutContainer>
		</>
	);
};

export default About;
