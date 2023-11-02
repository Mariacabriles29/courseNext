import Navbar from "@/components/Navbar";

import styles from "./MainLayout.module.css";
import { ReactNode } from "react";

interface MainLayoutProps {
  children: ReactNode;
}
export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.main}>{children}</main>
    </div>
  );
};
