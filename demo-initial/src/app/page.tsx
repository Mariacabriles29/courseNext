import Image from "next/image";

import Link from "next/link";

import { MainLayout } from "@/layouts/MainLayout";

export default function HomePage() {
  return (
    <>
      <MainLayout>
        <h1>Home Page</h1>
        <h1 className={"title"}>
          Ir a <Link href="/about">About</Link>
        </h1>

        <p className={"description"}>
          Get started by editing&nbsp;
          <code className={"code"}>src/app/page.tsx</code>
        </p>
      </MainLayout>
    </>
  );
}
