import React from "react";
import raspberry from "../../assets/images/raspberry.jpg"; 
import {
	Container,
	Homebutton,
	MoreContentWrapper,
	MoreText,
	MoreTitle,
	MoreTitleElement,
	MoreTitleElementSmall,
	MoreImage,
	MoreImageWrapper,
	MoreContent,
} from "./moreStyles";

const MoreSection = () => {
	return (
		<>
			<Container id="container">
				<MoreContentWrapper id="contentWrapper">
					<MoreContent id="content">
						<MoreTitle id="title">
							<MoreTitleElement>About |</MoreTitleElement>
							<MoreTitleElementSmall>.this website</MoreTitleElementSmall>
						</MoreTitle>
						<MoreImageWrapper leftside={true} id="raspberry">
							<MoreImage
								id="image"
								src={raspberry}
								alt="Raspberry Image"
							></MoreImage>
						</MoreImageWrapper>
						<MoreText id="text">
							This website is not hosted on any third-party web servers -
							instead, it is hosted on-premise on a Raspberry Pi(The
							credit-card-sized computer). That means, if you are reading this,
							then this little chap sitting at the corner of my room is up,
							running and serving you!
						</MoreText>
						<Homebutton id="button" to="/">
							Back to home
						</Homebutton>
					</MoreContent>
					<MoreImageWrapper leftside={false} id="raspberry">
						<MoreImage
							id="image"
							src={raspberry}
							alt="Raspberry Image"
						></MoreImage>
					</MoreImageWrapper>
				</MoreContentWrapper>
			</Container>
		</>
	);
};

export default MoreSection;
