import Link from "next/link";

import { MainLayout } from "@/layouts/MainLayout";
import { DarkLayout } from "@/layouts/DarkLayout";
import { ReactElement } from "react";
import { Main } from "next/document";

export default function About() {
  return (
    <MainLayout>
      <DarkLayout>
        <h1>About Page</h1>
        <h1 className={"title"}>
          Ir a <Link href="/">Home</Link>
        </h1>

        <p className={"description"}>Get started by editing&nbsp;</p>
        <code className={"code"}>src/app/about/page.tsx</code>
      </DarkLayout>
    </MainLayout>
  );
}
// About.getLayout = function getLayout(page: ReactElement) {
//   // Puedes personalizar la función getLayout según tus necesidades
//   return (
//     <MainLayout>
//       <DarkLayout>{page}</DarkLayout>;
//     </MainLayout>
//   );
// };
