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
  font-family: "schmaltzy", sans-serif;

  h1 {
    font-size: 70px;
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
    font-weight: 100;
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
  position: absolute;
  z-index: -1;
  border: 1px dotted #7ad4f8;
  width: 190px;
  height: 380px;
  border-radius: 50%;
  transform: rotate(-15deg);
  left: 100px;

  @media (max-width: 995px) {
    left: 800px;
    width: 80px;
    height: 150px;
    top: 20px;
  }

  @media (max-width: 920px) {
    left: 700px;
  }

  @media (max-width: 820px) {
    left: 600px;
  }

  @media (max-width: 790px) {
    left: 450px;
    width: 125px;
    height: 250px;
    top: 13px;
  }

  @media (max-width: 627px) {
    left: 350px;
  }

  @media (max-width: 603px) {
    top: -10px;
  }

  @media (max-width: 550px) {
    top: -25px;
  }

  @media (max-width: 530px) {
    left: 300px;
  }

  @media (max-width: 490px) {
    left: 280px;
  }
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

  @media (max-width: 995px) {
    left: 750px;
    width: 150px;
    height: 200px;
  }

  @media (max-width: 920px) {
    left: 650px;
  }

  @media (max-width: 820px) {
    left: 550px;
  }

  @media (max-width: 790px) {
    left: 350px;
    width: 250px;
    height: 400px;
  }

  @media (max-width: 627px) {
    left: 260px;
  }

  @media (max-width: 530px) {
    left: 220px;
  }

  @media (max-width: 490px) {
    left: 200px;
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
    background-color: #000;
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

const BlackDiv = styled.div`
  width: 100%;
  height: 200px;
  background-color: #000;

  @media (max-width: 995px) {
    display: none;
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
              <StyledImage src="/artworks/Fortune_Reverie.png" />
            </ImageContainer>
          </Banner>
          <Banner delay={12}>
            <TextContainer delay={12}>
              <h1>Title for banner 2</h1>
            </TextContainer>
            <ImageContainer>
              <StyledImage src="/artworks/3.jpeg" />
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
            <LeftCircle />
            <AnimatedSVG viewBox="0 0 380 430">
              <path
                fill="none"
                stroke="#7ad4f8"
                strokeWidth="0.5"
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
      <BlackDiv />
    </main>
  );
}
