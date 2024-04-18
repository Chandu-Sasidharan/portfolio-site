import React from 'react';
import { aboutSectionData } from '../../assets/sectionData';
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import {
  AboutContainer,
  AboutContentWrapper,
  AboutContentTopSection,
  Image,
  Name,
  AboutContentBottomSection,
  SocialMediaIcons,
  IconLink,
  Description
} from './aboutSectionStyles';

const { name, image, desc, linkedInUrl, gitHubUrl, facebookUrl, instaUrl } =
  aboutSectionData;

const About = () => {
  return (
    <>
      <AboutContainer id="about">
        <AboutContentWrapper>
          <AboutContentTopSection id="aboutContentTopSection">
            <Image id="profilepic" src={image} alt="Profile Picture"></Image>
            <Name $ontopsection={true} id="nameOnTop">
              {name}
            </Name>
          </AboutContentTopSection>
          <AboutContentBottomSection id="aboutContentBottomSection">
            <SocialMediaIcons id="fa_icons">
              <IconLink
                href={linkedInUrl}
                target="_blank"
                aria-label="LinkedIn"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </IconLink>
              <IconLink
                href={gitHubUrl}
                target="_blank"
                aria-label="GitHub"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </IconLink>
              <IconLink
                href={facebookUrl}
                target="_blank"
                aria-label="Facebook"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </IconLink>
              <IconLink
                href={instaUrl}
                target="_blank"
                aria-label="Instagram"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </IconLink>
            </SocialMediaIcons>
            <Name $ontopsection={false} id="nameOnBottom">
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
