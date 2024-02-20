'use client';
import React from 'react';
import styles from "./page.module.css";
import styled, { keyframes } from "styled-components";
import Header from "./components/Header";

const Glow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  padding: 4rem 0;
  z-index: -1;
  left: 0;

  &::before,
  &::after {
    content: "";
    position: absolute;
    filter: blur(95px);
    transform: translateZ(0);
    opacity: 0.15;
  }

  &::before {
    background: #fff;
    border-radius: 50%;
    width: 900px;
    height: 860px;
  }

  &::after {
    background: #fff;
    width: 240px;
    height: 180px;
    z-index: -1;
    margin-left: -400px;
  }
`;

export default function Home() {

  return (
    <main className={styles.main}>
      <div className={styles.sliderContainer}>
        <div className={styles.slider}>
          <div className={styles.mover}>
            <img src='/slider.png' />
          </div>
          <div className={styles.mover}>
            <img src='/slider.png' />
          </div>
        </div>
      </div>
      
      <Header />
      <div className={styles.blob2}></div>
      <div className={styles.blob}></div>
      <div className={styles.blur}></div>
      <Glow />
    </main>
  );
}
