import ActiveLink from "./ActiveLink";
import styles from "./Navbar.module.css";
const Navbar = () => {
  return (
    <nav className={styles["menu-link"]}>
      <ActiveLink href="/">Home</ActiveLink>
      <ActiveLink href="/about">About</ActiveLink>
      <ActiveLink href="/contact">Contact</ActiveLink>
    </nav>
  );
};

export default Navbar;
