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

const MainImage = styled.img`
  max-height: 80vh;
  max-width: 50%;
  border: solid 2px;
  border-color: #eed #eed #ffe #ccb;
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

const Image = styled.img`
  /* max-height: 80vh;
  max-width: 50%;
  border: solid 2px;
  border-color: #eed #eed #ffe #ccb; */
  width: 100%;
  height: 100%;
  display: block;
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
  align-items: center;
  opacity: 0;
  transition: all 0.3s ease-in-out;
`;

const CollectionList = styled.div`
  display: flex;
  padding-top: 40px;

  /* &:hover div {
    opacity: 1;
    top: 0;
  } */

  p {
    padding: 50px;
  }
`;


const ImageContainer = styled.div`
  position: relative;
  max-height: 80vh;
  max-width: 50%;
  border: solid 2px;
  border-color: #eed #eed #ffe #ccb;

  &:hover div {
    opacity: 1;
    top: 0;
  }
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
        <MainImage src={selectedArtwork.image} alt="Main artwork image" />
      </ArtistSection>

      <div style={{border: '2px solid #fff'}}></div>

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
