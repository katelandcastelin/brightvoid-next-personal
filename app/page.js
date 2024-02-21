'use client';
import React from 'react';
import styles from "./page.module.css";
import styled from "styled-components";
import Header from "./components/Header";

export default function Home() {

  return (
    <main className={styles.main}>
      <Header />



      {/* <div className={styles.sliderContainer}>
        <div className={styles.slider}>
          <div className={styles.mover}>
            <img src='/slider.png' />
          </div>
          <div className={styles.mover}>
            <img src='/slider.png' />
          </div>
        </div>
      </div> */}

      {/* <div className={styles.blob2}></div>
      <div className={styles.blob}></div>
      <div className={styles.blur}></div> */}
    </main>
  );
}
