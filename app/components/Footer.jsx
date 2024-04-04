'use client';
import React, { useEffect, useState } from 'react';
import styled, { keyframes, css } from 'styled-components';

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

const textGlitchKeyframes = keyframes`
  0% {
    opacity: 1;
  }
  94% {
    opacity: 1;
    transform: translateX(0px);
  }
  95% {
    opacity: 0.1;
  }
  96% {
    opacity: 1;
    transform: translateX(1px);
  }
  97% {
    opacity: 0.1;
  }
  100% {
    opacity: 1;
    transform: translateX(0px);
  }
`;

const displayLetterKeyframes = keyframes`
  0% {
    transform: translateY(2px);
    color: white;
    opacity: 0;
  }
  10%, 20% {
    opacity: 1;
    color: #49dc49;
  }
  50% {
    opacity: 1;
    color: #095b09;
    transform: translateY(1px);
  }
  60%, 100% {
    opacity: 1;
    color: white;
    transform: translateY(0);
  }
`;

const generateSpanStyles = () => css`
  animation-delay: ${Math.random() * 0.5}s;
`;

const AnimatedSpan = styled.span`
  display: inline-block;
  min-width: 1rem;
  opacity: 0;
  animation: ${displayLetterKeyframes} 0.3s ease-in-out forwards;
  letter-spacing: 1px;
  ${props => generateSpanStyles(props.index)}
  letter-spacing: 10px;
`;

const AnimatedTitle = styled.div`
  color: white;
  font-size: 25px;
  margin: 0;
  width: 100%;
  text-align: center;
  font-family: 'Share Tech Mono', monospace;
  animation: ${textGlitchKeyframes} 3s ease-in-out infinite alternate;
`;

const Placeholder = styled.div`
  height: 25px;
  visibility: hidden;
`;

export default function Footer () {
  const text = "Get in touch";
  const [showAnimation, setShowAnimation] = useState(false);
  const [animationPlayed, setAnimationPlayed] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (!animationPlayed && window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        setShowAnimation(true);
        setAnimationPlayed(true);
      }
    };

    checkScroll();

    window.addEventListener('scroll', checkScroll);

    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, [animationPlayed]);

  const renderText = () => {
    return text.split("").map((char, index) => (
      <AnimatedSpan key={index}>
        {char}
      </AnimatedSpan>
    ));
  };

  return (
    <Container>
      <Overlay />
      <GlitchOverlay />
      <div>
        {showAnimation ? (
          <AnimatedTitle>
            {renderText()}
          </AnimatedTitle>
        ) : (
          <Placeholder />
        )}
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