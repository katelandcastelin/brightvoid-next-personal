import React from 'react';
import styled from 'styled-components';

const VerticalThumbnailList = styled.div`
  height: 70vh;
  overflow-y: auto;
  margin-right: 10px;

  @media (max-width: 780px) {
    display: none;
  }
`;

const ThumbnailList = styled.div`
  max-width: 150px;
  width: 100%;
`;

const ImageThumbnail = styled.div`
  cursor: pointer;

  img {
    height: 150px;
    width: 150px;
    object-fit: cover;
  }
`;

const HorizontalThumbnailList = styled.div`
  display: none;

  @media (max-width: 780px) {
    margin-bottom: 10px;
    display: flex;
    overflow-x: auto;
  }
`;

const HorizontalImageThumbnail = styled.div`
  display: none;

  @media (max-width: 780px) {
    display: flex;
    cursor: pointer;
    margin-right: 5px;

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
