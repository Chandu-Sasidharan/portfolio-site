import React from 'react';
import {
  CanvasSectionContainer,
  CanvasSectionContentWrapper,
  CanvasSectionTextContainer,
  SmallHeading,
  MainHeading,
  Paragraph,
  CanvasSectionImage
} from './canvasSectionStyles';

const CanvasSection = ({
  smallheading,
  mainheading,
  paragraph,
  image,
  alttext
}) => {
  return (
    <>
      <CanvasSectionContainer id="canvas">
        <CanvasSectionContentWrapper id="canvasContentWrapper">
          <CanvasSectionTextContainer id="canvasTextWrapper">
            <SmallHeading>{smallheading}</SmallHeading>
            <MainHeading>{mainheading}</MainHeading>
            <Paragraph>{paragraph}</Paragraph>
          </CanvasSectionTextContainer>
          <CanvasSectionImage
            id="canvasImage"
            src={image}
            alt={alttext}
          ></CanvasSectionImage>
        </CanvasSectionContentWrapper>
      </CanvasSectionContainer>
    </>
  );
};

export default CanvasSection;
