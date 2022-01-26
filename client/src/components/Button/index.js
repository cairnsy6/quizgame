import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import './index.css';

function HomeButtons() {
  return (
    <div className="home-page-buttons">
    <Stack direction="row" spacing={3}>
      <Button variant="contained" href='/game-settings'>Host Game</Button>
      <Button variant="contained" href='/lobby'>
        Join Game
      </Button>
    </Stack>
    </div>
  );
}

export default HomeButtons;