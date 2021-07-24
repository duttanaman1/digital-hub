import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {Link} from "react-router-dom"

function Footer() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <Paper elevation={3} className="py-5 bg-light">
            <Grid container spacing={3} align="center">
                <Grid item xs={4} >
                   
                </Grid>
               <Grid item xs={4}>
                  <Link>Privacy policy</Link> |  <Link>Terms and Conditions</Link>
                </Grid>
                <Grid item xs={4}>
                   <Link>All rights reserved. MarketPresso 2020</Link>
                </Grid>
            </Grid>
        </Paper>  
    </div>
  );
}

export default Footer;