'use client';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-height: 100%;
  max-width: 100vw;
  overflow-y: scroll;
  overflow-x: hidden;
`;

const Grid = styled.div`
  columns: 2 200px;
  column-gap: 20px;
  justify-content: space-around;
  width: 90%;
  margin: 0 auto;
  padding-top: 1rem;

  @media (max-width: 750px) {
    columns: 1 100px;
    column-gap: auto;
    width: 90%;
    margin: 0 auto;
  }
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  padding: 40px 0 20px 0;
  letter-spacing: 0.1em;
  font-size: 55px;
  letter-spacing: 3px;
  font-weight: 200;
  color: #fff;
  text-transform: uppercase;
`;

const Image = styled.img`
  max-height: 70vh;
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
  return (
    <Container>
      <Title>{selectedArtwork.title}</Title>
      <Grid>
        {selectedArtwork.collection.map((piece, index) => (
          <div key={index} style={{display: 'flex', justifyContent: 'center'}}>
            <Image src={piece.image} alt={piece.description} />
          </div>
        ))}
      </Grid>
    </Container>
  )
}
