'use client';
import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import Slider from "react-slick";
import styles from "./page.module.css";
import Header from "./components/Header";

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const BannerContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 400px;
  width: 100%;
  border-bottom: 1px solid #fff;
  background-color: #000;
  overflow: hidden;
`;

const Banner = styled.div`
  width: 100%;
  animation: ${(props) => (props.isEntering ? slideIn : slideOut)} 1s forwards;
`;

const ImageContainer = styled.div`
  height: 100%;
  width: 100%;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`;

const TextContainer = styled.div`
  color: #fff;
  z-index: 1;
  position: absolute;
`;

export default function Home() {
  const [activeBanner, setActiveBanner] = useState(1);
  const [isEntering, setIsEntering] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsEntering(false);
      setTimeout(() => {
        setActiveBanner((prevActiveBanner) => (prevActiveBanner === 1 ? 2 : 1));
        setIsEntering(true);
      }, 500);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className={styles.main}>
      <Header />
      <BannerContainer>
        <Banner isEntering={activeBanner === 1 && isEntering} style={{ display: activeBanner === 1 ? 'flex' : 'none' }}>
          {activeBanner === 1 && (
            <div style={{ display: 'flex' }}>
              <TextContainer>
                <h1>Title for banner 1</h1>
              </TextContainer>
              <ImageContainer>
                <StyledImage src="/art-display/1.jpeg" />
              </ImageContainer>
            </div>
          )}
        </Banner>
        <Banner isEntering={activeBanner === 2 && isEntering} style={{ display: activeBanner === 2 ? 'flex' : 'none' }}>
          {activeBanner === 2 && (
            <div style={{ display: 'flex' }}>
              <TextContainer>
                <h1>Title for banner 2</h1>
              </TextContainer>
              <ImageContainer>
                <StyledImage src="/art-display/2.jpeg" />
              </ImageContainer>
            </div>
          )}
        </Banner>
      </BannerContainer>
    </main>
  );
}
