import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>
        Ir a <Link href="/about">About</Link>
      </h1>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.tsx</code>
        </p>
      </div>
    </main>
  );
}
