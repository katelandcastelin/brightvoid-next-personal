'use client';
import styles from './galleryPage.module.css';
import styled from 'styled-components';

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

  return (
    <Container>
      <div className={styles.frame}>
        <Artwork src='/artworks/anon.png' />
      </div>
    </Container>
  );
}
