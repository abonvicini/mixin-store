import React from 'react';
import { Link } from 'react-router-dom';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const ItemLink = ({ children, path, label }) => {
  return (
    <Link to={path}>
      <ListItem button key={label}>
        {children}
        <ListItemText primary={label} />
      </ListItem>
    </Link>
  );
};

export default ItemLink;
