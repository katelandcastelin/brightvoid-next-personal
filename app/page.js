'use client';
import React from "react";
import styled, { keyframes } from "styled-components";
import styles from "./page.module.css";
import Header from "./components/Header";

const slideInAndOut = keyframes`
  0%, 100% {top: 100%; opacity: 0;}
  5%, 50% {top: 0%; opacity: 1;}
  55%, 95% {top: -100%; opacity: 0;}
`;

const fadeIn = keyframes`
  0%, 8%, 100% { opacity: 0; }
  13%, 95% { opacity: 1; }
`;

const BannerContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 400px;
  width: 100%;
  background-color: #000;
  overflow: hidden;
  position: relative;
`;

const Banner = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${slideInAndOut} 12s infinite ease-in-out;
  animation-delay: ${props => props.delay}s;
`;

const ImageContainer = styled.div`
  height: 100%;
  width: 100%;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  z-index: -1;
`;

const TextContainer = styled.div`
  color: #fff;
  z-index: 2;
  position: absolute;
  animation: ${fadeIn} 12s infinite ease-in-out;
  animation-delay: ${props => props.delay + 0.1}s;
`;

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <BannerContainer>
        <Banner delay={0}>
          <TextContainer delay={0}>
            <h1>Title for banner 1</h1>
          </TextContainer>
          <ImageContainer>
            <StyledImage src="/art-display/1.jpeg" />
          </ImageContainer>
        </Banner>
        <Banner delay={6}>
          <TextContainer delay={6}>
            <h1>Title for banner 2</h1>
          </TextContainer>
          <ImageContainer>
            <StyledImage src="/art-display/2.jpeg" />
          </ImageContainer>
        </Banner>
      </BannerContainer>
    </main>
  );
}
