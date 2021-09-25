import React from 'react';
import './NavBar.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Logo from '../Logo';

const NavBar = () => {
  const handlerClick = (e) => {
    console.log('Soy ' + e.target.innerText + ' y soy clickeable');
  };

  const handlerClickCart = () => {
    console.log('Soy un carrito de compras');
  };

  return (
    <div className="navbar">
      <div>
        <Logo />
      </div>
      <div className="flex">
        <p onClick={(e) => handlerClick(e)}>Home</p>
        <p onClick={(e) => handlerClick(e)}>Sobre nosotros</p>
        <p onClick={(e) => handlerClick(e)}>Categorias</p>
        <p onClick={(e) => handlerClick(e)}>Contacto</p>
      </div>
      <div>
        <ShoppingCartIcon className="cart" onClick={handlerClickCart} />
      </div>
    </div>
  );
};

export default NavBar;
