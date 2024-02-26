import React from 'react';
import styled from 'styled-components';

const DropdownContainer = styled.div`
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  border-radius: 2px;

  & a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;

    &:hover {
      background-color: #efefef;
    }
  }
`;

const ShopDropDown = () => {
  return (
    <DropdownContainer>
      <a href="/pages/clothing">Apparel</a>
      <a href="/pages/submitArt">Design & earn</a>
    </DropdownContainer>
  );
};

export default ShopDropDown;
