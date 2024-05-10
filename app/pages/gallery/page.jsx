'use client';
import { React, useState } from 'react';
import styles from './galleryPage.module.css';
import styled from 'styled-components';
import CollectionDisplay from '../../components/CollectionDisplay';
import GalleryHeader from '../../components/GalleryHeader';
import artAndAristData from '@/app/backend/data';

const Background = styled.div`
  padding-top: 120px;
  overflow-y: ${props => props.completed ? 'hidden' : 'scroll'};
`;

const Container = styled.div`
  columns: 3 300px;
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
  cursor: pointer;
`;

export default function GalleryPage() {
  const [selectedArtwork, setSelectedArtwork] = useState(null);

  const handleImageClick = (artworkId) => {
    setSelectedArtwork(artworkId);
  }

  const handleCloseClick = () => {
    setSelectedArtwork(null);
  }

  const artworks = artAndAristData.map((artwork) => (
    <div key={artwork.image} style={{display: 'flex', justifyContent: 'center'}}>
      <div>
        <div className={styles.frame}>
          <Artwork
            src={artwork.image}
            onClick={() => handleImageClick(artwork)} 
          />
          <div className={styles.labelContainer}>
            <div className={styles.labelContents}>
              <div className={styles.artist}>{artwork.artist}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <Background>
      <div style={{position: 'absolute', height: '300px', width: '300px'}}>
        <div className={styles.spinner} />
        <div className={styles.spinner} />
      </div>
      <GalleryHeader />
      <Container>
        {artworks}

        {selectedArtwork && (
          <div
            className={styles.fullScreenContainer}
            completed={selectedArtwork !== null}
          >
            <CollectionDisplay selectedArtwork={selectedArtwork} />
            <button className={styles.closeButton} onClick={handleCloseClick}>
              close
            </button>
          </div>
        )}
      </Container>
    </Background>
  );
}
