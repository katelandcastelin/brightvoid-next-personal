'use client';
import React from 'react';
import styled from 'styled-components';
import styles from './submitArtPage.module.css';
import Header from '../../components/Header';

const HowToBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 500px;
  border: 1px solid #fff;
`;

export default function submitArt() {
  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
    <div className={styles.wrapper}>
      <Header />
      <HowToBlock>
        <h2>How to submit</h2>
        <div style={{width: '100%', display: 'flex', justifyContent: 'space-between'}}>
          <div style={{margin: '20px'}}>
            <div>
              <p>Guidelines</p>
            </div>
            <div>
              Design requirements, resolution, format, etc.
            </div>
          </div>
          <div style={{margin: '20px'}}>
            <div>
              Legal rights information.
            </div>
            <div>
              How submissions are reviewed.
            </div>
          </div>
        </div>
      </HowToBlock>
      <div>
        Submission form
        <div>Artists name</div>
        <div>
          Artwork information
          <div>Title</div>
          <div>Description/story behind it</div>
        </div>
        <div>
          Upload feature
        </div>
        <div>
          Agreement checkbox
        </div>
      </div>
      <div>
        FAQ and support
      </div>
    </div>
    </div>
  )
}