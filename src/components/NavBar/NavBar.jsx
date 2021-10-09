import React from 'react';
import Logo from '../Logo';
import CartWidget from '../CartWidget/CartWidget';
import styles from './styles/NavBar.module.css';

const NavBar = () => {
  const handleClick = (e) => {
    console.log('Soy ' + e.target.innerText + ' y soy clickeable');
  };

  const handleClickCart = () => {
    console.log('Soy un carrito de compras');
  };

  return (
    <div className={styles.navbar}>
      <div>
        <Logo />
      </div>
      <div className={styles.flex}>
        <p onClick={(e) => handleClick(e)}>Home</p>
        <p onClick={(e) => handleClick(e)}>Sobre nosotros</p>
        <p onClick={(e) => handleClick(e)}>Categorias</p>
        <p onClick={(e) => handleClick(e)}>Contacto</p>
      </div>
      <CartWidget handleClickCart={handleClickCart} />
    </div>
  );
};

export default NavBar;
