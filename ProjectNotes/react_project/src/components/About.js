import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from '@mui/material';

const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 16 }} variant="body2" >
      Service for sharing notes. 
      </Typography>
      <Typography sx={{ fontSize: 16 }} variant="body2">
      To view the note, follow the link or search by hash.
      </Typography>
    </CardContent>
    <CardActions>
      <Link href="/note"><Button size="small">Learn More</Button></Link>
    </CardActions>
  </React.Fragment>
);

export default function About() {
    return (
      <Box sx={{ width: 275 }} className="main_block">
       <Card variant="outlined">{card}</Card>
      </Box>
    );
  }
  