'use client';
import styled from "styled-components";

const Container = styled.div`
  display: inherit;
  justify-content: inherit;
  align-items: inherit;
  font-size: 0.85rem;
  max-width: var(--max-width);
  width: 100%;
  z-index: 2;
  font-family: var(--font-mono);

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
  }

  p {
    display: flex;
    justify-content: center;
    position: fixed;
    width: 100%;
    height: 100px;
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
  }
`;

export default function Header() {
  return (
    <Container>
      <p>Header</p>
    </Container>
  )
}
