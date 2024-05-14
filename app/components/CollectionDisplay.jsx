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
`;

export default function CollectionDisplay({ selectedArtwork }) {

  return (
    <Container>
      <div style={{display: 'flex', width: '100%', justifyContent: 'space-evenly'}}>
        <div>
          <h1 style={{fontFamily: 'schmaltzy, sans-serif', fontWeight: '400', letterSpacing: '4px'}}>
            {selectedArtwork.artist}
          </h1>
          <p>{selectedArtwork.aboutTheArtist}</p>
        </div>
        <div style={{minWidth: '50%', maxWidth: '50%', display: 'flex', justifyContent: 'end'}}>
          <Image src={selectedArtwork.image} />
        </div>
      </div>

      {selectedArtwork.collection && selectedArtwork.collection.length > 0 && (
        <div>
          {selectedArtwork.collection.map((item) => (
            <div key={item.collectionImageId}>
              <p>{item.description}</p>
              <Image src={item.collectionImage} alt="Collection image" />
            </div>
          ))}
        </div>
      )}
    </Container>
  )
}
