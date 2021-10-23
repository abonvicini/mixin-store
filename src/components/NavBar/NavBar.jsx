import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import CartWidget from "./CartWidget";
import styles from "./styles/NavBar.module.css";

const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <Link className={styles.linkLogo} to="/">
        <Logo />
      </Link>
      <div className={styles.flex}>
        <Link className={styles.link} to="/">
          Inicio
        </Link>

        <Link className={styles.link} to="/category/silla">
          Sillas
        </Link>

        <Link className={styles.link} to="/category/banqueta">
          Banquetas
        </Link>

        <Link className={styles.link} to="/contacto">
          Contacto
        </Link>
      </div>
      <Link className={styles.link} to="/cart">
        <CartWidget />
      </Link>
    </div>
  );
};

export default NavBar;
