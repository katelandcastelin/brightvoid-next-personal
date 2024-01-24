'use client';
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: space-between;

  a {
    margin: 10px;
  }
`;

const Menu = styled.div`
  
`;

const CustomerHub = styled.div`

`;

export default function Navigation() {
  return (
    <Container>
      <Menu>
        <a href="/gallery">Gallery</a>
        <a href="/about">About</a>
      </Menu>
      <CustomerHub>
        <a>
          Testing
        </a>
      </CustomerHub>
    </Container>
  )
}