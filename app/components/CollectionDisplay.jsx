'use client';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-height: 100%;
  max-width: 100vw;
  overflow-y: scroll;
  overflow-x: hidden;
  padding: 100px 50px;
`;

const InitialImageContainer = styled.div`
  position: relative;
  max-height: 80vh;
  max-width: 50%;
  overflow: hidden;

  &:hover div {
    opacity: 1;
    top: 0;
    overflow-y: auto;
  }
`;

const MainImage = styled.img`
  height: 100%;
  width: 100%;
  border: solid 2px;
  border-color: #eed #eed #ffe #ccb;
  object-fit: contain;
`;

const ArtistSection = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  padding-bottom: 40px;
`;

const ArtistInfo = styled.div`
  width: 50%;
  padding-right: 25px;
`;

const CollectionList = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 40px;

  p {
    padding: 50px;
    color: #fff;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  max-height: 80vh;
  max-width: 50%;
  overflow: hidden;

  &:hover div {
    opacity: 1;
    top: 0;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: contain;
`;

const HoverOverlay = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  opacity: 0;
  transition: all 0.3s ease-in-out;
`;

export default function CollectionDisplay({ selectedArtwork }) {
  return (
    <Container>
      <ArtistSection>
        <ArtistInfo>
          <h1 style={{ fontFamily: 'Schmaltzy, sans-serif', fontWeight: '400', letterSpacing: '4px' }}>
            {selectedArtwork.artist}
          </h1>
          <p>{selectedArtwork.aboutTheArtist}</p>
        </ArtistInfo>
        <InitialImageContainer>
          <MainImage src={selectedArtwork.image} alt="Main artwork image" />
          <HoverOverlay>
            <h3>{selectedArtwork.title}</h3>
            <p>{selectedArtwork.initialDescription}</p>
          </HoverOverlay>
        </InitialImageContainer>
      </ArtistSection>

      <div style={{border: '2px solid #fff'}} />
      <h1>{selectedArtwork.collectionName}</h1>

      {selectedArtwork.collection && selectedArtwork.collection.length > 0 && (
        <div>
          {selectedArtwork.collection.map((item) => (
            <CollectionList key={item.collectionImageId}>
              <ImageContainer>
                <Image src={item.collectionImage} alt="Collection image"/>
                <HoverOverlay>
                  <p>{item.description}</p>
                </HoverOverlay>
              </ImageContainer>

            </CollectionList>
          ))}
        </div>
      )}
    </Container>
  )
}
