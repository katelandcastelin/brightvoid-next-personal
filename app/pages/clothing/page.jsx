'use client';
import React from 'react';
import Header from '../../components/Header';
import Link from 'next/link';
import styles from './clothingPage.module.css';
// import clothingProducts from './clothingData';
import artAndAristData from '@/app/backend/data';
import styled from 'styled-components';

const Card = styled.div`
  padding: 1rem 1.2rem;
  transition: filter 200ms, border 200ms;
  cursor: pointer;
  margin: 5px;
  margin: 20px;
  width: 380px;
  height: 420px;
  border: 1px solid #767676;
  border-radius: 8px;
`;

const ProductImageContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 300px;
  margin-bottom: 10px;
  overflow: hidden;
  border-radius: 5px 5px 0 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px 5px 0 0;
    transition: transform 200ms ease-in-out;

    &:hover {
      transform: scale(1.06);
    }
  }
`;

export default function ClothingPage() {
  const clothing = [...artAndAristData].reverse();

  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.grid}>
        {clothing.map((item) => (
          <Link key={item.id} href={`/pages/clothing/${item.productId}`}>
            <Card>
              <ProductImageContainer>
                <img src={item.productImage} alt={item.description} />
              </ProductImageContainer>
              <p>R {item.price}</p>
              <p>{item.description}</p>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
