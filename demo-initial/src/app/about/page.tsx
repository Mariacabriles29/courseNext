import React from "react";
import styles from "../page.module.css";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";

export default function About() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <h1>About Page</h1>
        <h1 className={styles.title}>
          Ir a <Link href="/">Home</Link>
        </h1>

        <div className={styles.description}>
          <p>Get started by editing&nbsp;</p>
        </div>
      </main>
    </>
  );
}
