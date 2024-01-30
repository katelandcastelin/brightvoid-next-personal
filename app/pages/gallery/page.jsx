'use client';
import { React, useState, useEffect } from 'react';
import styles from './galleryPage.module.css';
import styled from 'styled-components';
import Artworks from './artworks-data/artworks';

const Container = styled.div`
  columns: 2 200px;
  column-gap: auto;
  width: 90%;
  margin: 0 auto;
  padding-top: 1rem;
`;

const Artwork = styled.img`
  max-height: 100%;
  max-width: 100%;
  border: solid 2px;
  border-bottom-color: #ffe;
  border-left-color: #eed;
  border-right-color: #eed;
  border-top-color: #ccb;
  position: inherit;
  z-index: 1;

  :hover {
    cursor: pointer;
  }
`;

export default function GalleryPage() {
  const [selectArtwork, setSelectedArtwork] = useState(null);

  const artworks = Artworks.map((artwork) => (
    <div key={artwork.id}>
      <div className={styles.frame}>
        <Artwork src={artwork.id} />
        <div>{artwork.title}</div>
        <div>{artwork.artist}</div>
        <div>{artwork.year}</div>
      </div>
    </div>
  ))

  return (
    <Container>
      {artworks}
      {/* <div className={styles.frame}>
        <Artwork src='/artworks/anon.png' />
      </div>
      <div className={styles.frame}>
        <Artwork src='/artworks/guiding-neon/ace-of-cups.png' />
      </div> */}
    </Container>
  );
}
