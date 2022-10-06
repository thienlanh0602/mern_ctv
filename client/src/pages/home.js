import * as React from 'react';
import AppBar from '@mui/material/AppBar';

import Headers from '../components/header/index.js';
import Navigations from '../components/navigation/index.js';
import Contents from '../components/content/index.js';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

export default function Home() {
  return (
    <div className="Home">
      <AppBar position='absolute' style={{ backgroundColor: "white", color: "black", boxShadow: "0px 0px 0px 1px #A9A9A9" }} >
       
        <Headers />
        <Navigations />

      </AppBar>

      <Grid container p={40} spacing={20}>
      
        <Grid item xs={6}>
          <Box>
            <Contents />
          </Box>
        </Grid>

        <Grid item xs={6}>
          
          <Box>
          </Box>
          
        </Grid>

      </Grid>

    </div>
  );
}
