import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function Main() {
    return (
      <div className="main_block">
         <Stack direction="row" spacing={2}>
          <Button className="main_button" variant="outlined" href="/create">
          Create note
          </Button>
          <Button className="main_button" variant="outlined" href="/note">
          View note
          </Button>
        </Stack>
      </div>
    );
  }