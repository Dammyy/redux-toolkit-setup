import * as React from 'react';
import Alert from '@mui/material/Alert';
import { Snackbar } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { hideSnackbar } from './snackbarSlice';


const SimpleSnackbar = () => {
  const { show, message } = useSelector((state) => state.snackbar);
  const dispatch = useDispatch();

  const handleClose = () => dispatch(hideSnackbar());

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      autoHideDuration={3000}
      onClose={handleClose}
      open={show}
    >
      <Alert onClose={handleClose} severity="error">
        {message}
      </Alert>
    </Snackbar>
  );
};

export default SimpleSnackbar;
