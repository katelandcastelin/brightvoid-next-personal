'use client';
import Image from "next/image";
import styles from "./page.module.css";
import styled from "styled-components";

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
    opacity: 0.1;
  }

  &::before {
    background: #fff;
    border-radius: 50%;
    width: 780px;
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
