'use client';
import styled from "styled-components";
import MenuDropDown from './MenuDropDown';

const Container = styled.div`
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DropDownDiv = styled.div`
  display: none;

  @media (max-width: 1040px) {
    display: flex;
  }
`;

const Menu = styled.div`
  a {
    margin-left: 10px;
  }

  @media (max-width: 1040px) {
    display: none;
  }
`;

const CustomerHub = styled.div`
  img {
    margin-right: 10px;
    height: 40px;
  }
`;

export default function Navigation() {
  return (
    <Container>
      <DropDownDiv>
        <MenuDropDown />
      </DropDownDiv>
      <Menu>
        <a href="/pages/gallery">Gallery</a>
        <a href="/pages/about">About</a>
      </Menu>
      <CustomerHub>
        <a href="/pages/log-in">
          <img src="/customer-hub/log-in.png" />
        </a>
        <a href="/pages/profile">
          <img src="/customer-hub/profile.png" />
        </a>
        <a href="/pages/cart">
          <img src="/customer-hub/cart.png" />
        </a>
      </CustomerHub>
    </Container>
  )
}