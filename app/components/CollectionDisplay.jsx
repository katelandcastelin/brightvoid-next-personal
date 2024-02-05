'use client';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-height: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
  overflow: scroll;
`;

const ListBlock = styled.div`
  background-color: #fff;
  min-height: 93vh;
  width: 80%;
  height: 100%;
  padding: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  padding-bottom: 19px;
  letter-spacing: 0.1em;
  z-index: 1;
  font-size: 55px;
  letter-spacing: 3px;
  font-weight: 200;
  color: #000;
  text-transform: uppercase;
`;

const CorsetImage = styled.img`
  width: 30%;
  border: solid 2px;
  border-bottom-color: #ffe;
  border-left-color: #eed;
  border-right-color: #eed;
  border-top-color: #ccb;
`;

export default function CollectionDisplay({ selectedArtwork }) {
  return (
    <Container>
      <ListBlock>
        <Title>{selectedArtwork.title}</Title>
        <div>
          {selectedArtwork.collection.map((piece, index) => (
            <div key={index}>
              <CorsetImage src={piece.image} alt={piece.description} />
            </div>
          ))}
        </div>
      </ListBlock>
    </Container>
  )
}
