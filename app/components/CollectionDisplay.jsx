'use client';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-height: 100%;
  max-width: 100vw;
  overflow-y: scroll;
  overflow-x: hidden;
  padding-top: 180px;
`;

const Grid = styled.div`
  columns: 2 200px;
  column-gap: 20px;
  justify-content: space-around;
  width: 90%;
  margin: 0 auto;
  padding: 1rem;

  @media (max-width: 750px) {
    columns: 1 100px;
    column-gap: auto;
    width: 90%;
    margin: 0 auto;
  }
`;

const Image = styled.img`
  max-height: 80vh;
  max-width: 100%;
  border: solid 2px;
  border-bottom-color: #ffe;
  border-left-color: #eed;
  border-right-color: #eed;
  border-top-color: #ccb;
  position: inherit;
  z-index: 1;
  cursor: pointer;
`;

export default function CollectionDisplay({ selectedArtwork }) {
  const collectionImageSrc = selectedArtwork.collection.length > 0 ? selectedArtwork.collection[0].collectionImage : null;
  const collectionDescription = selectedArtwork.collection.length > 0 ? selectedArtwork.collection[0].description : null;

  return (
    <Container>
      <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
        <div style={{display: 'flex', justifyContent: 'space-around', width: '80%'}}>
          <div style={{width: '45%'}}>
            <div>
              <p>{selectedArtwork.aboutTheArtist}</p>
            </div>
            {collectionImageSrc && (
              <div style={{display: 'flex'}}>
                <Image src={collectionImageSrc} alt="Collection image" />
                <p>{collectionDescription}</p>
              </div>
            )}
          </div>
          <div style={{width: '45%'}}>
            <Image src={selectedArtwork.image} />
          </div>
        </div>
      </div>
    </Container>
  )
}
