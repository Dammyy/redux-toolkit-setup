
import Snackbar from './Sanckbar';
import { useDispatch } from 'react-redux';
import { showSnackbar } from './snackbarSlice';
import './App.css';
import { Button } from '@mui/material';

function App() {
  const dispatch = useDispatch();

  const onClickButton = () => {
    dispatch(showSnackbar('Redux toolkit setup works'));
  }

  return (
    <div className="App">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      <Button variant="contained" onClick={onClickButton}>Click me to show snackbar</Button>
      <Snackbar />
    </div>
  );
}

export default App;
