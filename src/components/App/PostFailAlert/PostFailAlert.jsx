import React from 'react';
import { useState } from 'react';

//mui import
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

//this is from the mui snackbar alert documentation

const [open, setOpen] = useState(false);

const handleClick = () => {
  setOpen(true);
};

const handleClose = (event, reason) => {
  if (reason === 'clickaway') {
    return;
  }

  setOpen(false);
};

return (
    <>
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
        Something went wrong and your feedback could not be submitted!
        </Alert>
    </Snackbar>
    </>
)