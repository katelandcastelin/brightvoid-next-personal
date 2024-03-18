import React from 'react';
import styled from 'styled-components';

const VerticalThumbnailList = styled.div`
  height: 90%;

  @media (max-width: 1040px) {
    height: 90vh;
  }

  @media (max-width: 780px) {
    display: none;
  }
  /* height: 70vh;
  overflow-y: auto;

  @media (min-width: 920px) {
    flex-direction: row;
  } */
`;

const ThumbnailList = styled.div`
  max-height: 100%;
  height: auto;
  max-width: 150px;
  width: 100%;

  /* @media (max-width: 920px) {
    display: none;
  } */
`;

const ImageThumbnail = styled.div`
  cursor: pointer;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
`;

const HorizontalThumbnailList = styled.div`
  /* display: none;

  @media (max-width: 920px) {
    display: flex;
    overflow-x: auto;
    margin-top: auto;
    margin-bottom: auto;
    width: 100vw;
  } */
`;

const HorizontalImageThumbnail = styled.div`
  display: none;
  @media (max-width: 780px) {
    display: flex;
    cursor: pointer;

    img {
      height: 150px;
      width: 150px;
      object-fit: cover;
      margin: 0 3px;
    }
  }
  /* display: none;

  @media (max-width: 920px) {
    display: flex;
    cursor: pointer;

    img {
      height: 150px;
      width: 150px;
      object-fit: cover;
      margin: 0 3px;
    }
  } */
`;

export default function ThumbnailGallery({ images, setSelectedImage }) {
  return (
    <div>
      <VerticalThumbnailList>
        <ThumbnailList cols={1} rowHeight={164}>
          {images.map((image, index) => (
            <ImageThumbnail key={index} onClick={() => setSelectedImage(image)}>
              <img
                srcSet={image}
                src={image}
                alt={index}
                loading="lazy"
              />
            </ImageThumbnail>
          ))}
        </ThumbnailList>
      </VerticalThumbnailList>

      <HorizontalThumbnailList>
        {images.map((image, index) => (
          <HorizontalImageThumbnail key={index} onClick={() => setSelectedImage(image)}>
            <img
              srcSet={image}
              src={image}
              alt={index}
              loading="lazy"
            />
          </HorizontalImageThumbnail>
        ))}
      </HorizontalThumbnailList>
    </div>
  )
}
