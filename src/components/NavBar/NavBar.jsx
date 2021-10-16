import React from 'react';
import Logo from './Logo';
import CartWidget from './CartWidget';
import styles from './styles/NavBar.module.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <Link className={styles.linkLogo} exact to="/">
        <Logo />
      </Link>
      <div className={styles.flex}>
        <Link className={styles.link} exact to="/">
          Inicio
        </Link>

        <Link className={styles.link} exact to="/category/silla">
          Sillas
        </Link>

        <Link className={styles.link} exact to="/category/banqueta">
          Banquetas
        </Link>

        <Link className={styles.link} exact to="/contacto">
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
