'use client';
import React from 'react';
import styled, { keyframes } from 'styled-components';

const Container = styled.div`
  height: 350px;
  border-radius: 20px 20px 5px 5px;
  border: 1px solid #282828;
  margin: 40px 10px 10px 10px;
  padding: 10px;
  background: radial-gradient(circle at center bottom, rgba(86, 86, 86, 0.8) 0%, #000 70%);
  background-size: 100% 200%;
  position: relative;
  overflow: hidden;
`;

const PageLinks = styled.div`
  text-align: center;
  z-index: 2;
  position: relative;

  a {
    gap: 10px;
    font-family: monospace;
    font-size: large;
    color: #f0ffea;
    transition: text-shadow 0.1s ease-in-out;

    &:hover {
      text-shadow: 0 0 10px #dcffcf, 0 0 3px #dcffcf, 0 0 1px #dcffcf;
    }
  }
`;

const SocialsLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  position: relative;
  
  img {
    height: 45px;
    border-radius: 4px;
    padding: 7px;

    &:hover {
      background-color: #2b2b2b;
    }
  }
`;

const glitch = keyframes`
  to {
    clip-path: polygon(0 calc(100% - 0.5em), 100% calc(100% - 0.5em), 100% 100%, 0 100%);
  }
`;

const Overlay = styled.div`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: transparent;
  background-size: 5px 5px, 5px 5px;
  background-position: -1px -1px, -1px -1px;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
  mix-blend-mode: difference;
  z-index: 0;
`;

const GlitchOverlay = styled(Overlay)`
  clip-path: polygon(0 0, 100% 0, 100% 0.5em, 0 0.5em);
  animation: ${glitch} 10s linear infinite;
  transform: translateX(0.1rem);
`;

export default function Footer () {
  return (
    <Container>
      <Overlay />
      <GlitchOverlay />
      <div>
        <div style={{textAlign: 'center', marginBottom: '10px', textTransform: 'uppercase'}}>
          <p>Get in touch</p>
        </div>
        <SocialsLinks>
          <a href='' target='_blank'>
            <img src='/icons/facebook.png' />
          </a>
          <a href='' target='_blank'>
            <img src='/icons/instagram.png' />
          </a>
          <a href='' target='_blank'>
            <img src='/icons/tiktok.png' />
          </a>
          <a href='' target='_blank'>
            <img src='/icons/twitter.png' />
          </a>
          <a href='' target='_blank'>
            <img src='/icons/discord.png' />
          </a>
          <a href='' target='_blank'>
            <img src='/icons/telegram.png' />
          </a>
        </SocialsLinks>
      </div>
      <PageLinks>
        <a href='/pages/contact'>
          Contact
        </a>
        <a href='/pages/submitArt' style={{margin: '0 20px'}}>
          Submit your art
        </a>
        <a href='/pages/gallery'>
          Our artists
        </a>
      </PageLinks>
    </Container>
  )
}