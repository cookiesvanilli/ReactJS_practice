import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function Error() {
    return (
    <Stack sx={{ width: '700px' }} spacing={2}>
      <Alert severity="error">Error, no such note was found</Alert>
    </Stack>
    );
  }