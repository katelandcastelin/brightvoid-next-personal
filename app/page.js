'use client';
import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import styles from "./page.module.css";
import Header from "./components/Header";

export default function Home() {

  return (
    <main className={styles.main}>
      <Header />
      <Parallax pages={2}>
        <ParallaxLayer
          offset={0}
          speed={0}
          factor={0.7}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <div>
            <h2>Welcome to</h2>
            <h3>Brightvoid</h3>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={0}
          speed={0.5}
          factor={1}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '170px',
          }}
        >
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
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={1}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          Shop and browse designs
        </ParallaxLayer>
      </Parallax>

      <div className={styles.blob2}></div>
      <div className={styles.blob}></div>
      <div className={styles.blur}></div>
    </main>
  );
}
