'use client';
import styled from "styled-components";
import MenuDropDown from './MenuDropDown';

const Container = styled.div`
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    margin: 10px;
  }
`;

const DropDownDiv = styled.div`
  display: none;

  @media (max-width: 1040px) {
    display: flex;
  }
`;

const Menu = styled.div`
  @media (max-width: 1040px) {
    display: none;
  }
`;

const CustomerHub = styled.div`

`;

export default function Navigation() {
  return (
    <Container>
      <DropDownDiv>
        <MenuDropDown />
      </DropDownDiv>
      <Menu>
        <a href="/pages/gallery">Gallery</a>
        <a href="/about">About</a>
      </Menu>
      <CustomerHub>
        <a href="/pages/log-in">
          log-in
        </a>
        <a href="/pages/profile">
          profile
        </a>
        <a href="/pages/cart">
          cart
        </a>
      </CustomerHub>
    </Container>
  )
}