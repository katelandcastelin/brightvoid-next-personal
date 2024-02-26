'use client';
import styled from "styled-components";
import MenuDropDown from "./MenuDropDown";
import LoginIcon from '@mui/icons-material/Login';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ShopDropDown from "./ShopDropDown";

const Background = styled.div`
  z-index: 2;
  height: 150px;
  display: flex;
  align-items: center;
  position: fixed;
  align-items: center;
  inset: 0 0 auto;
  border-bottom: 1px solid rgba(var(--callout-border-rgb), 0.25);
  background: linear-gradient(
    to bottom,
    rgba(var(--background-start-rgb), 1),
    rgba(var(--callout-rgb), 0.5)
  );
  backdrop-filter: blur(24px);
`;

const MaxWidthWrapper = styled.div`
  max-width: 1500px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
`;

const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  align-items: center;

  a {
    margin: auto;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Logo = styled.img`
  height: 110px;
`;

const Navigation = styled.div`
  position: absolute;
  padding: 0 10px;
  display: flex;

  a {
    margin: 10px;
  }

  @media (max-width: 1040px) {
    display: none;
  }
`;

const DropDownDiv = styled.div`
  display: none;

  @media (max-width: 1040px) {
    display: flex;
    position: absolute;
  }
`;

const CustomerHub = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  right: 0;
  padding: 0 10px;

  a {
    margin: 10px;
  }
`;

const ShopNav = styled.a`
  display: flex;
  position: relative;
  align-items: center;
`;

const DropDownContainer = styled.div`
  display: none;
`;

const Down = styled.span`
  font-size: small;
  display: none;
  margin-left: 5px;
`;

const Up = styled.span`
  font-size: small;
  display: block;
  margin-left: 5px;
`;

const ShopNavContainer = styled.div`
  &:hover {
    & > div {
      display: block;
    }
    ${Down} {
      display: block;
    }
    ${Up} {
      display: none;
    }
  }
`;

export default function Header() {
  return (
    <div style={{marginBottom: '200px'}}>
    <Background>
      <MaxWidthWrapper>
        <HeaderContainer>
          <DropDownDiv>
            <MenuDropDown />
          </DropDownDiv>
          <a href="/">
            <LogoContainer>
              <Logo src='/logo//logo-white.png' />
            </LogoContainer>
          </a>
          <Navigation>
            <a href="/pages/gallery">Gallery</a>
            <a href="/pages/about">About</a>
            <a href="/pages/contact">Contact</a>

            <ShopNavContainer>
              <ShopNav href="/pages/shop">
                Shop
                <Down>▼</Down>
                <Up>▲</Up>
              </ShopNav>
              <DropDownContainer>
                <ShopDropDown />
              </DropDownContainer>
            </ShopNavContainer>

          </Navigation>
          <CustomerHub>
            <a href="/pages/log-in" title="login">
              <LoginIcon />
            </a>
            <a href="/pages/profile" title="profile">
              <PersonOutlineOutlinedIcon />
            </a>
            <a href="/pages/cart" title="cart">
              <ShoppingCartOutlinedIcon />
            </a>
          </CustomerHub>
        </HeaderContainer>
      </MaxWidthWrapper>
    </Background>
    </div>
  )
}
