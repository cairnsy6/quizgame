import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import './index.css';
import {useSelector} from 'react-redux'

function HomeButtons() {

const lobby_id = useSelector(state =>state.id)
console.log(lobby_id)


  return (
    <div className="home-page-buttons">
    <Stack direction="row" spacing={3}>
      <Button className="home-button" variant="contained" onClick={localStorage.clear()} href='/game-settings'>Play Game</Button>
    </Stack>
    </div>
  );
}

export default HomeButtons;