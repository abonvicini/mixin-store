import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Spinner = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        minHeight: '80vh',
        alignItems: 'center',
      }}
    >
      <CircularProgress />
    </Box>
  );
};

export default Spinner;
