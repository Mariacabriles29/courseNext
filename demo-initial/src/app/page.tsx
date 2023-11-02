import Image from "next/image";

import styles from "./page.module.css";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <h1>Home Page</h1>
        <h1>
          Ir a <Link href="/about">About</Link>
        </h1>
        <div className={styles.description}>
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>src/app/page.tsx</code>
          </p>
        </div>
      </main>
    </>
  );
}
