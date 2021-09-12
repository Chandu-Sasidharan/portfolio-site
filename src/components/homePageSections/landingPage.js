import React, { useState } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import ApodData from '../../assets/landingPageData';
import ReactPlayer from 'react-player/youtube';
// import Video from "../../videos/video.mp4";
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
  ArrowWrapper,
} from './landingPageStyles';

function LandingPage() {
  const [descWrapperOpen, setdescWrapperOpen] = useState(false);
  const toggleDescWrapper = () => {
    setdescWrapperOpen(!descWrapperOpen);
  };

  const apod_object = ApodData();
  let imageDisplay = false;
  let videoDisplay = false;

  if (apod_object['media_type'] === 'image') {
    imageDisplay = true;
  } else if (apod_object['media_type'] === 'video') {
    videoDisplay = true;
  }

  return (
    <IconContext.Provider value={{ color: '#bbb' }}>
      <LandingPageContainer id='home' descWrapperOpen={descWrapperOpen}>
        <BackgroundImage
          id='backgroundImage'
          imageDisplay={imageDisplay}
          src={apod_object['url']}
        />
        <PlayerWrapper id='playerWrapper' videoDisplay={videoDisplay}>
          <ReactPlayer
            url={apod_object['url']}
            playing={true}
            loop={true}
            controls={false}
            width='100%'
            height='100%'
            muted={true}
          />
        </PlayerWrapper>

        {/* <VideoBg playsInline autoPlay loop muted src={Video} type="video/mp4" /> */}
        <LandingPageContent id='landingPageContent'>
          <Date id='date'>{apod_object['formatted_date']}</Date>
          <SubHeading id='subHeading'>
            Astronomy Picture of the Day
          </SubHeading>
          <Title id='title'>{apod_object['title']}</Title>
          <DescriptionWrapper
            id='descriptionWrapper'
            onClick={toggleDescWrapper}
            descWrapperOpen={descWrapperOpen}
          >
            <Description id='description'>
              {apod_object['explanation']}
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
