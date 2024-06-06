import { React, useState, useEffect } from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  height: 80px;
  background-color: transparent;
  border-bottom: 1px solid #555;
  display: flex;
  align-items: center;
  padding: 0 20px;
  backdrop-filter: brightness(55%);
  position: fixed;
  top: 0;
  width: 100%;
  transition: top 0.3s;
  z-index: 2;

  img {
    height: 60px;
    display: flex;
  }

  &:hover .links {
    transform: translateX(0);
    opacity: 1;
  }
`;

const Links = styled.div`
  margin-left: 20px;
  display: flex;
  gap: 20px;
  transition: transform 0.3s ease, opacity 0.3s ease;
  opacity: 0;
  transform: translateX(-100%);
  z-index: -2;
`;

export default function GallerHeader() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlHeaderVisibility = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlHeaderVisibility);

      return () => {
        window.removeEventListener('scroll', controlHeaderVisibility);
      };
    }
  }, [lastScrollY]);

  return (
    <HeaderContainer style={{ top: isVisible ? '0' : '-100px' }}>
      <div style={{height: '60px', width: '60px', position: 'absolute', background: '#000', zIndex: '-1', top: '0', left: '0'}} />
      <a href="/">
        <img src='/logo/logo-white.png' />
      </a>
      <Links className='links'>
        <a href="/pages/clothing">Shop</a>
        <a href="/pages/contact">Contact</a>
        <a href="/pages/submitArt">Submit your art</a>
      </Links>
    </HeaderContainer>
  )
}
