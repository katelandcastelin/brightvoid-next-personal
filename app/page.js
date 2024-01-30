import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.glow} />
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
