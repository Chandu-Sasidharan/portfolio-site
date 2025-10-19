import { useState, useEffect } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import useApodData from '../../hooks/useApodData';
import ReactPlayer from 'react-player/youtube';
import {
    LandingAreaContainer,
    BackgroundImage,
    PlayerWrapper,
    LandingAreaContent,
    Date,
    SubHeading,
    Title,
    DescriptionWrapper,
    Description,
    ArrowWrapper,
} from './landingAreaStyles';

function LandingArea() {
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
            <LandingAreaContainer id="home" $descWrapperOpen={descWrapperOpen}>
                <BackgroundImage
                    id="backgroundImage"
                    $imageDisplay={imageDisplay}
                    src={apodObject['url']}
                />
                <PlayerWrapper id="playerWrapper" $videoDisplay={videoDisplay}>
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
                <LandingAreaContent id="landingAreaContent">
                    <Date id="date">{apodObject['formatted_date']}</Date>
                    <SubHeading id="subHeading">
                        Astronomy Picture of the Day
                    </SubHeading>
                    <Title id="title">{apodObject['title']}</Title>
                    <DescriptionWrapper
                        id="descriptionWrapper"
                        onClick={toggleDescWrapper}
                        $descWrapperOpen={descWrapperOpen}
                    >
                        <Description id="description">
                            {apodObject['explanation']}
                        </Description>
                        <ArrowWrapper $descWrapperOpen={!descWrapperOpen}>
                            <FaAngleUp />
                        </ArrowWrapper>
                        <ArrowWrapper $descWrapperOpen={descWrapperOpen}>
                            <FaAngleDown />
                        </ArrowWrapper>
                    </DescriptionWrapper>
                </LandingAreaContent>
            </LandingAreaContainer>
        </IconContext.Provider>
    );
}

export default LandingArea;
