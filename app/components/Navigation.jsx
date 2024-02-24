'use client';
import styled from "styled-components";
import MenuDropDown from './MenuDropDown';
import LoginIcon from '@mui/icons-material/Login';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Container = styled.div`
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #cccccc;
  padding: 0 20px;
`;

const DropDownDiv = styled.div`
  display: none;

  @media (max-width: 1040px) {
    display: flex;
  }
`;

const Menu = styled.div`
  a {
    margin: 10px;
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

  a {
    margin: 10px;
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
        <a href="/pages/shop">Shop</a>
      </Menu>
      <CustomerHub>
        <a href="/pages/log-in" title="log-in">
          <LoginIcon />
        </a>
        <a href="/pages/profile" title="profile">
          <PersonOutlineOutlinedIcon />
        </a>
        <a href="/pages/cart" title="cart">
          <ShoppingCartOutlinedIcon />
        </a>
      </CustomerHub>
    </Container>
  )
}