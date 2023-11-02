import React from "react";
import styles from "../page.module.css";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { MainLayout } from "@/layouts/MainLayout";

export default function Contact() {
  return (
    <>
      <MainLayout>
        <h1>Contact Page</h1>
        <h1 className={"title"}>
          Ir a <Link href="/">Home</Link>
        </h1>

        <p className={"description"}>Get started by editing&nbsp;</p>
        <code className={"code"}>src/app/contact/page.tsx</code>
      </MainLayout>
    </>
  );
}
