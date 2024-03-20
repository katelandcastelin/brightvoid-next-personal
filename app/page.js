'use client';
import React from "react";
import styled, { keyframes } from "styled-components";
import styles from "./page.module.css";
import Header from "./components/Header";

const slideInAndOut = keyframes`
  0%, 100% {
    top: 100%;
    opacity: 0;
  }
  4.16%, 50% {
    top: 0%;
    opacity: 1;
  }
  54.16%, 95.83% {
    top: -100%;
    opacity: 0;
  }
`;

const fadeIn = keyframes`
  0%, 8%, 100% {
    opacity: 0;
  }
  13%, 95% {
    opacity: 1;
  }
`;

const BannerContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 400px;
  width: 100%;
  overflow: hidden;
  position: relative;
  border-top: 1px solid #fff;
`;

const Banner = styled.div`
  /* max-width: 1700px; */
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  animation: ${slideInAndOut} 24s infinite ease-in-out;
  animation-delay: ${props => props.delay}s;
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
  text-shadow: 2px 2px 8px #000;
  z-index: 2;
  position: absolute;
  animation: ${fadeIn} 24s infinite ease-in-out;
  animation-delay: ${props => props.delay + 0.1}s;
`;

const BlockContainer = styled.div`
  width: 100%;
  height: 350px;
  padding: 0 40px;
  display: flex;
  justify-content: center;
  border-top: 1px solid #fff;
  border-bottom: 4px solid #fff;
`;

const LeftBlock = styled.div`
  width: 40%;
  border-right: 1px solid #fff;
  padding: 40px;

  h1 {
    font-size: 70px;
  }
`;

const RightBlock = styled.div`
  width: 40%;
  border-left: 1px solid #fff;
  padding: 45px;

  p {
    font-size: 30px;
    margin-bottom: 30px;
  }
`;

const DirectoryButton = styled.button`
  border: 1px solid #fff;
  padding: 15px 30px;
  margin-right: 20px;
  background-color: transparent;
`;

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <BannerContainer>
        <div style={{maxWidth: '1500px'}}>
          <Banner delay={0}>
            <TextContainer delay={0}>
              <h1>Title for banner 1</h1>
            </TextContainer>
            <ImageContainer>
              <StyledImage src="/art-display/1.jpeg" />
            </ImageContainer>
          </Banner>
          <Banner delay={12}>
            <TextContainer delay={12}>
              <h1>Title for banner 2</h1>
            </TextContainer>
            <ImageContainer>
              <StyledImage src="/art-display/2.jpeg" />
            </ImageContainer>
          </Banner>
        </div>
      </BannerContainer>
      <BlockContainer>
        <LeftBlock>
          <h1>
            Testing Header
          </h1>
        </LeftBlock>
        <RightBlock>
          <p>
            Paragraph testing
          </p>
          <DirectoryButton>
            Our Artists
          </DirectoryButton>
          <DirectoryButton>
            Shop Artworks
          </DirectoryButton>
        </RightBlock>
      </BlockContainer>
    </main>
  );
}
