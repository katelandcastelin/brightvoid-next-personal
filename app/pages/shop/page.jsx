'use client';
import React from 'react';
import styled from 'styled-components';
import styles from './shopPage.module.css';
import Header from '../../components/Header';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  min-height: 100vh;
  max-width: 100vw;
  margin-top: 100px;
`;

const SmallBlockContainer = styled.div`
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  width: 100%;

  img {
    border-radius: 5px;
  }
`;

const WideBlockContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;

  img {
    border-radius: 5px;
  }
`;

const DisplayBlock = styled.a`
  margin: 10px;
  height: 300px;
  width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  p {
    z-index: 1;
    position: absolute;
    font-size: 55px;
    letter-spacing: 3px;
    font-weight: 200;
    color: #efefef;
    text-shadow: 2px 2px 8px #000;
    transition: color 0.3s ease-in-out, font-size 0.3s ease-in-out;
    text-transform: uppercase;
  }

  &:hover p {
    font-size: 52px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(0.8);
    transition: filter 0.3s ease-in-out;
  }

  &:hover img {
    filter: none;
  }
`;

const WideDisplay = styled(DisplayBlock)`
  width: 100vw;
`;

export default function Store() {
  return (
    <Container>
      <Header />
      <div className={styles.wrapper}>
        <SmallBlockContainer>
          <DisplayBlock href='/pages/clothing'>
            <p>Apparel</p>
            <img src='/shop-display/apparel.jpeg' />
          </DisplayBlock>
          <DisplayBlock href="/pages/submitArt">
            <p>Design & earn</p>
            <img src='/shop-display/design-and-earn.jpeg' />
            {/* create and collaborate */}
          </DisplayBlock>
        </SmallBlockContainer>
        <WideBlockContainer>
          <WideDisplay href='/'>
            <p>Artist spotlight</p>
            {/* your art, our tees */}
            <img src='/artworks/ai2.png' />
          </WideDisplay>
        </WideBlockContainer>
      </div>
    </Container>
  )
}
