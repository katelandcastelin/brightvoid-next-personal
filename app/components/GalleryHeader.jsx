import { React, useState, useEffect }from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  height: 100px;
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
  }
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
      <a href="/">
        <img src='/logo/logo-white.png' />
      </a>
    </HeaderContainer>
  )
}
