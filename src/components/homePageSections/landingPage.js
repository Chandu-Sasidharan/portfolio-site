import React, { useState, useEffect } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import useApodData from '../../utils/useApodData';
import ReactPlayer from 'react-player/youtube';
import {
  LandingPageContainer,
  BackgroundImage,
  PlayerWrapper,
  LandingPageContent,
  Date,
  SubHeading,
  Title,
  DescriptionWrapper,
  Description,
  ArrowWrapper
} from './landingPageStyles';

function LandingPage() {
  const [descWrapperOpen, setdescWrapperOpen] = useState(false);
  const [imageDisplay, setImageDisplay] = useState(false);
  const [videoDisplay, setVideoDisplay] = useState(false);
  const apodObject = useApodData();

  useEffect(() => {
    if (apodObject['media_type'] === 'image') {
      setImageDisplay(true);
    } else if (apodObject['media_type'] === 'video') {
      setVideoDisplay(true);
    }
  }, [apodObject]);

  const toggleDescWrapper = () => {
    setdescWrapperOpen(!descWrapperOpen);
  };

  return (
    <IconContext.Provider value={{ color: '#bbb' }}>
      <LandingPageContainer id="home" descWrapperOpen={descWrapperOpen}>
        <BackgroundImage
          id="backgroundImage"
          imageDisplay={imageDisplay}
          src={apodObject['url']}
        />
        <PlayerWrapper id="playerWrapper" videoDisplay={videoDisplay}>
          <ReactPlayer
            url={apodObject['url']}
            playing={true}
            loop={true}
            controls={false}
            width="100%"
            height="100%"
            muted={true}
          />
        </PlayerWrapper>
        <LandingPageContent id="landingPageContent">
          <Date id="date">{apodObject['formatted_date']}</Date>
          <SubHeading id="subHeading">Astronomy Picture of the Day</SubHeading>
          <Title id="title">{apodObject['title']}</Title>
          <DescriptionWrapper
            id="descriptionWrapper"
            onClick={toggleDescWrapper}
            descWrapperOpen={descWrapperOpen}
          >
            <Description id="description">
              {apodObject['explanation']}
            </Description>
            <ArrowWrapper descWrapperOpen={!descWrapperOpen}>
              <FaAngleUp />
            </ArrowWrapper>
            <ArrowWrapper descWrapperOpen={descWrapperOpen}>
              <FaAngleDown />
            </ArrowWrapper>
          </DescriptionWrapper>
        </LandingPageContent>
      </LandingPageContainer>
    </IconContext.Provider>
  );
}

export default LandingPage;
