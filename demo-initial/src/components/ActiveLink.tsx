"use client";

import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation"; // usePathname is a hook now imported from navigation
import styles from "../components/Navbar.module.css";
const ActiveLink = ({
  children,
  ...rest
}: { children: React.ReactNode } & LinkProps) => {
  const { href } = rest;
  const pathName = usePathname();

  const isActive = pathName === href;
  return (
    <Link {...rest} className={isActive ? styles.active : ""}>
      {children}
    </Link>
  );
};

export default ActiveLink;
