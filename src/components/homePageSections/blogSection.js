import React from "react";
import {
	BlogSectionContainer,
	BlogSectionContentWrapper,
	BlogSectionTextContainer,
	SmallHeading,
	MainHeading,
	Paragraph,
	BlogSectionImage,
} from "./blogSectionStyles";

const BlogSection = ({
	smallheading,
	mainheading,
	paragraph,
	image,
	alttext,
}) => {
	return (
		<>
			<BlogSectionContainer id="blog">
				<BlogSectionContentWrapper id="blogContentWrapper">
					<BlogSectionTextContainer id="blogTextWrapper">
						<SmallHeading>{smallheading}</SmallHeading>
						<MainHeading>{mainheading}</MainHeading>
						<Paragraph>{paragraph}</Paragraph>
					</BlogSectionTextContainer>
					<BlogSectionImage
						id="blogImage"
						src={image}
						alt={alttext}
					></BlogSectionImage>
				</BlogSectionContentWrapper>
			</BlogSectionContainer>
		</>
	);
};

export default BlogSection;
