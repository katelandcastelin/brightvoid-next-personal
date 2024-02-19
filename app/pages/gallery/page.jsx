'use client';
import { React, useState } from 'react';
import styles from './galleryPage.module.css';
import styled from 'styled-components';
import Artworks from './artworks-data/artworks';
import CollectionDisplay from '../../components/CollectionDisplay';
import GalleryHeader from '../../components/GalleryHeader';

const Background = styled.div`
  background-image: radial-gradient( circle farthest-corner at 10% 20%,  #282828 0%, rgba(4,0,4,1) 90% );
  padding-top: 120px;
  height: 100vh;
  overflow-y: ${props => props.completed ? 'hidden' : 'scroll'};
`;

const Container = styled.div`
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

  const artworks = Artworks.map((artwork) => (
    <div key={artwork.id} style={{display: 'flex', justifyContent: 'center'}}>
      <div className={styles.frame}>
        <Artwork src={artwork.id} onClick={() => handleImageClick(artwork)} />
      </div>
    </div>
  ));

  return (
    <Background>
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
