'use client';
import React from 'react';
import styled from 'styled-components';
import styles from './shop.module.css';
import Header from '../../components/Header';

const LatestBlock = styled.div`
  height: 100%;
  width: 500px;
  border: 1px solid #fff;
`;

const GalleryBlock = styled.div`
  height: 100%;
  width: 100%;
  border: 1px solid #fff;
`;

export default function ShopPage() {
  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <div className={styles.wrapper}>
        <Header />
        <div style={{display: 'flex', width: '100%', justifyContent: 'center'}}>
          <div style={{height: '500px', width: '100%',display: 'flex'}}>
            <LatestBlock>
              
            </LatestBlock>
            <GalleryBlock>

            </GalleryBlock>
          </div>
        </div>
      </div>
    </div>
  )
}
