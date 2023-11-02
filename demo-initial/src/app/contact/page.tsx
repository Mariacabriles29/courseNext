import React from "react";
import styles from "../page.module.css";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function Contact() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <h1>Contact Page</h1>
        <h1 className={styles.title}>
          Ir a <Link href="/">Home</Link>
        </h1>

        <div className={styles.description}>
          <p>Get started by editing&nbsp;</p>
          <code className={styles.code}>src/app/contact/page.tsx</code>
        </div>
      </main>
    </>
  );
}
