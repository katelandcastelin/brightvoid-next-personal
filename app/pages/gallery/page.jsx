'use client';
import { React, useState, useEffect } from 'react';
import styles from './galleryPage.module.css';
import styled from 'styled-components';
import Artworks from './artworks-data/artworks';
import CollectionDisplay from '../../components/CollectionDisplay';

const Container = styled.div`
  columns: 2 200px;
  column-gap: auto;
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

const Artwork = styled.img`
  max-height: 70vh;
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
  const [selectedArtwork, setSelectedArtwork] = useState(null);

  // useEffect(() => {
  //   if (selectedArtwork === null) {
  //     window.scrollTo(0, 170);
  //   }
  // }, [selectedArtwork]);

  const handleImageClick = (artworkId) => {
    setSelectedArtwork(artworkId);
  }

  const handleCloseClick = () => {
    setSelectedArtwork(null);
  }

  const artworks = Artworks.map((artwork) => (
    <div key={artwork.id} onClick={() => handleImageClick(artwork)}>
      <div className={styles.frame}>
        <Artwork src={artwork.id} />
      </div>
    </div>
  ));

  return (
    <Container>
      {artworks}

      {selectedArtwork && (
        <div className={styles.fullScreenContainer}>
          <CollectionDisplay selectedArtwork={selectedArtwork} />
          <button className={styles.closeButton} onClick={handleCloseClick}>
            close
          </button>
        </div>
      )}
    </Container>
  );
}
