'use client';
import styled from "styled-components";
import Navigation from './Navigation';

const Container = styled.div`
  font-size: 0.85rem;
  z-index: 2;
  font-family: var(--font-mono);
  display: flex;
  justify-content: center;
  position: fixed;
  align-items: center;
  inset: 0 0 auto;
  padding: 2rem 1rem 1.4rem;
  border-radius: 0;
  border: none;
  border-bottom: 1px solid rgba(var(--callout-border-rgb), 0.25);
  background: linear-gradient(
    to bottom,
    rgba(var(--background-start-rgb), 1),
    rgba(var(--callout-rgb), 0.5)
  );
  background-clip: padding-box;
  backdrop-filter: blur(24px);

  p {
    color: #386600;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;

  img {
    height: 90px;
    margin-bottom: 5px;
    z-index: 1;
  }
`;

export default function Header() {
  return (
    <div style={{height: '200px'}}>
      <Container>
        <Navigation />
        <a href="/">
          <LogoContainer>
            <img src='/logo/logo-white.png' />
          </LogoContainer>
          <div>
            <p>Step into the void</p>
          </div>
        </a>
      </Container>
    </div>
  )
}
