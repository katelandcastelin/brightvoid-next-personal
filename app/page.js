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
  background-color: #000;
`;

const Banner = styled.div`
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

  @media (max-width: 1711px) {
    height: 400px;
  }

  @media (max-width: 995px) {
    flex-direction: column;
    align-items: center;
    border-bottom: none;
    padding: 20px 0;
  }
`;

const LeftBlock = styled.div`
  width: 40%;
  border-right: 1px solid #fff;
  padding: 40px;
  display: flex;
  align-items: center;

  h1 {
    font-size: 80px;
    background: -webkit-linear-gradient(216deg, rgba(0,0,36,0.8) 0%, rgba(5,5,61,0.8) 35%, rgba(0,112,185,0.8) 100%);
    background: linear-gradient(216deg, rgba(0,0,36,0.8) 0%, rgba(5,5,61,0.8) 35%, rgba(0,112,185,0.8) 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
    display: inline-block;
    text-shadow:
      0 0 2px #0000,
      0 0 5px rgba(0, 112, 185, 0.3),
      10px 0 10px rgba(0, 112, 185, 0.2),
      0 0 15px rgba(0, 112, 185, 0.1);
  }

  @media (max-width: 1600px) {
    h1 {
      font-size: 75px;
    }
  }

  @media (max-width: 1375px) {
    width: 50%;
  }

  @media (max-width: 995px) {
    width: 100%;
    border-right: none;
    padding: 20px;
    border-bottom: 1px solid #fff;

    h1 {
      font-size: 65px;
    }
  }

  @media (max-width: 790px) {
    margin-top: 60px;

    h1 {
      text-align: left;
    }
  }

  @media (max-width: 603px) {
    margin-top: 80px;
  }

  @media (max-width: 550px) {
    margin-top: 100px;
  }
`;

const LeftCircle = styled(LeftBlock)`
  position: relative;
  z-index: -1;
  border: 1px dotted #fff;
  width: 190px;
  height: 400px;
  border-radius: 50%;
  transform: rotate(-15deg);
`;

const AnimatedSVG = styled.svg`
  position: relative;
  z-index: -1;
  width: 350px;
  height: 400px;

  path {
    animation: dash 25s linear infinite;
  }

  @keyframes dash {
    from {
      stroke-dashoffset: 1000;
    }
    to {
      stroke-dashoffset: 0;
    }
  }
`;

const RightBlock = styled.div`
  width: 40%;
  border-left: 1px solid #fff;
  padding: 45px;
  display: flex;
  align-items: center;

  p {
    font-size: 22px;
    margin-bottom: 30px;
  }

  @media (max-width: 1375px) {
    width: 50%;

    p {
      font-size: 20px;
    }
  }

  @media (max-width: 1115px) {
    padding: 0 0 0 30px;
  }

  @media (max-width: 995px) {
    width: 100%;
    border-left: none;
    padding: 20px;
    border-bottom: 2px solid #fff;
  }

  @media (max-width: 875px) {
    p {
      font-size: 20px;
    }
  }
`;

const DirectoryButton = styled.button`
  margin-top: 20px;
  border: 1px solid #fff;
  padding: 15px 30px;
  margin-right: 40px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
  transition: box-shadow 0.3s ease-in-out, text-shadow 0.3s ease-in-out;

  &:hover {
    text-shadow:
      0 0 5px rgba(9, 9, 121, 0.5),
      0 0 15px rgba(9, 9, 121, 0.5),
      0 0 25px rgba(0, 212, 255, 0.5),
      0 0 3px rgba(9, 9, 121, 0.5),
      0 0 5px rgba(9, 9, 121, 0.5),
      0 0 15px rgba(9, 9, 121, 0.5),
      0 0 25px rgba(0, 212, 255, 0.5),
      0 0 30px rgba(0, 212, 255, 0.5);

    box-shadow: 
      0 0 5px rgba(9, 9, 121, 0.2),
      0 0 10px rgba(9, 9, 121, 0.3),
      0 0 15px rgba(0, 212, 255, 0.3),
      0 0 60px rgba(0, 212, 255, 0.3);
  }

  @media (max-width: 995px) {
    margin-right: 30px;
    margin-top: 5px;
  }
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
            Step into the Brightvoid
          </h1>
          <div style={{position: 'absolute'}}>
            {/* <LeftCircle /> */}
            {/* <AnimatedSVG viewBox="0 0 240 350">
              <path
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="5,5"
                d="M95,200a95,200 0 1,0 190,0a95,200 0 1,0 -190,0"
                transform="rotate(-15 95 200)"
              >
              </path>
            </AnimatedSVG> */}
            <AnimatedSVG viewBox="0 0 380 400">
              <path
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="5,5"
                d="M 75,200 a 95,200 0 1,0 190,0 a 95,200 0 1,0 -190,0"
                transform="rotate(-15 235 200)"
              >
              </path>
            </AnimatedSVG>
          </div>
        </LeftBlock>
        
        <RightBlock>
          <div>
            <p>
              Brightvoid bridges the gap between art and apparel, transforming exceptional artwork into wearable statements.
            </p>
            <p>
              Explore our curated collection, meet the minds behind the designs or find your next wearable masterpiece.
            </p>
            <DirectoryButton>
              <a href="/pages/gallery">
                Our Artists
              </a>
            </DirectoryButton>
            <DirectoryButton>
              <a href="/pages/clothing">
                Shop Artworks
              </a>
            </DirectoryButton>
          </div>
        </RightBlock>
      </BlockContainer>
      <div style={{width: '100%', height: '200px', backgroundColor: '#000'}} />
    </main>
  );
}
