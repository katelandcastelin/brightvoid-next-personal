import React from 'react';
import styled from 'styled-components';

const VerticalThumbnailList = styled.div`
  max-height: 70vh;
  height: 100%;
  overflow-y: auto;
  margin-right: 10px;

  @media (max-width: 1370px) {
    height: 550px;
  }

  @media (max-width: 780px) {
    display: none;
  }
`;

const ImageThumbnail = styled.div`
  cursor: pointer;
  max-width: 150px;
  width: 100%;

  img {
    height: 150px;
    width: 150px;
    object-fit: cover;
    margin-bottom: 5px;
  }
`;

const HorizontalThumbnailList = styled.div`
  display: none;
  max-width: 90vw;
  width: 100%;

  @media (max-width: 780px) {
    margin: 10px 0;
    display: flex;
    overflow-x: auto;
  }
`;

const HorizontalImageThumbnail = styled.div`
  display: none;

  @media (max-width: 780px) {
    display: flex;
    cursor: pointer;
    margin-right: 10px;

    img {
      height: 150px;
      width: 150px;
      object-fit: cover;
    }
  }
`;

export default function ThumbnailGallery({ images, setSelectedImage }) {
  return (
    <div>
      <VerticalThumbnailList>
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
      </VerticalThumbnailList>

      <div style={{display: 'flex', justifyContent: 'center'}}>
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
    </div>
  )
}
