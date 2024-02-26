'use client';
import React from 'react';
import Header from '../../components/Header';
import Link from 'next/link';
import styles from './clothingPage.module.css';
import clothingProducts from './clothingData';
import styled from 'styled-components';

const Card = styled(Link)`
  padding: 1rem 1.2rem;
  transition: filter 200ms, border 200ms;
  cursor: pointer;
  margin: 5px;
  margin: 20px;
  width: 380px;
  height: 420px;
  border: 1px solid #767676;
  border-radius: 8px;

  &:hover {
    filter: brightness(62%);
  }
`;

export default function ClothingPage() {
  const clothing = [...clothingProducts].reverse();

  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.grid}>
        {clothing.map((item) => (
          <Card key={item.id} href={`/clothing/${item.id}`}>
            <div>
              <div className={styles.productImage}>
                <img src={item.image} alt={item.description} />
              </div>
              <p>R {item.price}</p>
              <p>{item.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
