'use client';
import Image from "next/image";
import styles from "./page.module.css";
import styled from "styled-components";
import { useEffect } from "react";

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

  useEffect(() => {
    const blobs = document.getElementsByClassName(styles.blob);
    if (blobs.length > 0) {
      const blob = blobs[0]; // Assuming you have only one element with this class for simplicity

      window.onpointermove = event => {
        const { clientX, clientY } = event;

        // Adjust the element's position directly
        blob.style.position = 'fixed'; // Make sure your element's position is fixed or absolute
        blob.style.left = `${clientX}px`;
        blob.style.top = `${clientY}px`;
        blob.style.transform = 'translate(-50%, -50%)'; // Adjust this as necessary to center/position the blob as desired
      };
    }

    // Cleanup the event listener to prevent memory leaks
    return () => {
      window.onpointermove = null;
    };
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.blob}></div>
      <div className={styles.blur}></div>
      <Glow />
      <div className={styles.grid}>
        <a
          href="/"
          className={styles.card}
          rel="noopener noreferrer"
        >
          <h2>
            Brightvoid <span>-&gt;</span>
          </h2>
          <p>Coming soon . . .</p>
        </a>
      </div>
    </main>
  );
}
