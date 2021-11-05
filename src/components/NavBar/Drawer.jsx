import React, { useState, Fragment } from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';
import ItemLink from './ItemLink';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HomeIcon from '@mui/icons-material/Home';
import CategoryIcon from '@mui/icons-material/Category';
import ContactsIcon from '@mui/icons-material/Contacts';

const Drawer = () => {
  const [state, setState] = useState({
    bottom: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'bottom' ? 'auto' : 250 }} //¿Es necesario el 250 para que se vea el drawer?
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ItemLink path="/" label="Home">
          <HomeIcon sx={{ marginRight: '1rem' }} />
        </ItemLink>
        <ItemLink path="/category/silla" label="Sillas">
          <CategoryIcon sx={{ marginRight: '1rem' }} />
        </ItemLink>
        <ItemLink path="/category/banqueta" label="Banquetas">
          <CategoryIcon sx={{ marginRight: '1rem' }} />
        </ItemLink>
        <ItemLink path="/contacto" label="Contacto">
          <ContactsIcon sx={{ marginRight: '1rem' }} />
        </ItemLink>
        <ItemLink path="/cart" label="My Cart">
          <ShoppingCartIcon sx={{ marginRight: '1rem' }} />
        </ItemLink>
      </List>
    </Box>
  );

  const anchor = 'bottom';

  return (
    <div>
      <Fragment key={anchor}>
        <Button onClick={toggleDrawer(anchor, true)}>
          <IconButton
            size="large"
            edge="start"
            aria-label="open drawer"
            sx={{ mr: 2, color: 'white' }}
          >
            <MenuIcon></MenuIcon>
          </IconButton>
        </Button>
        <SwipeableDrawer
          anchor={anchor}
          open={state[anchor]}
          onClose={toggleDrawer(anchor, false)}
          onOpen={toggleDrawer(anchor, true)}
        >
          {list(anchor)}
        </SwipeableDrawer>
      </Fragment>
    </div>
  );
};

export default Drawer;
