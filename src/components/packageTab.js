import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}



export default function SimpleTabs() {  
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Basic Package" {...a11yProps(0)} />
          <Tab label="Standard Package" {...a11yProps(1)} />
          <Tab label="Premium Package" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} style={{border:"1px solid #e8e8e8"}}>
       <Paper elevation={0}   >
        <Grid container spacing={3}>
            <Grid item xs={8}>
                <strong>1 Layout + 1 person details + 300 dpi Print Ready JPG/PDF files</strong>
            </Grid>
             <Grid item xs={2}></Grid>
             <Grid item xs={2}>
                <span style={{color:'#34eb37'}}>$15</span> 
             </Grid>
        </Grid>
        <br/>
        <br/>
       <strong> 3 Days Delivery</strong><br/><br/>
        <strong>What's Included</strong><br/>
        <ul>
            <li> Concept - 1</li>
            <li>Print-Ready</li>
            <li>Double-Sided</li>
        </ul>
        <br/>
        <button type="button" className="btn btn-lg btn-block" style={{backgroundColor:'#34eb37', color:"white"}}>$15</button>
        <center className="btn-block"><a style={{color:'#34eb37'}}><strong>Contact Seller</strong></a> </center>
       </Paper>
      </TabPanel>
      <TabPanel value={value} index={1} style={{border:"1px solid #e8e8e8"}}>
       <Paper elevation={0}   >
        <Grid container spacing={3}>
            <Grid item xs={8}>
                <strong>2 Layouts + Up to 2 persons details + 500 dpi Print Ready JPG/PDF files</strong>
            </Grid>
             <Grid item xs={2}></Grid>
             <Grid item xs={2}>
                <span style={{color:'#34eb37'}}>$25</span> 
             </Grid>
        </Grid>
        <br/>
        <br/>
       <strong> 5 Days Delivery</strong><br/><br/>
        <strong>What's Included</strong><br/>
        <ul>
            <li> Concept - 2</li>
            <li>Print-Ready</li>
            <li>Double-Sided</li>
        </ul>
        <br/>
        <button type="button" className="btn btn-lg btn-block" style={{backgroundColor:'#34eb37', color:"white"}}>$25</button>
        <center className="btn-block"><a style={{color:'#34eb37'}}><strong>Contact Seller</strong></a> </center>
       </Paper>
      
      </TabPanel>
      <TabPanel value={value} index={2} style={{border:"1px solid #e8e8e8"}}>
       <Paper elevation={0}   >
        <Grid container spacing={3}>
            <Grid item xs={8}>
                <strong>2 Layouts + Up to 3 persons details + Superior Quality 1200dpi PDF/PSD files + QR Code Quick Revisions</strong>
            </Grid>
             <Grid item xs={2}></Grid>
             <Grid item xs={2}>
                <span style={{color:'#34eb37'}}>$50</span> 
             </Grid>
        </Grid>
        <br/>
        <br/>
       <strong> 7 Days Delivery</strong><br/><br/>
        <strong>What's Included</strong><br/>
        <ul>
            <li> Concept - 2</li>
            <li>Print-Ready</li>
            <li>Double-Sided</li>
            <li>Source File</li>
        </ul>
        <br/>
        <button type="button" className="btn btn-lg btn-block" style={{backgroundColor:'#34eb37', color:"white"}}>$50</button>
        <center className="btn-block"><a style={{color:'#34eb37'}}><strong>Contact Seller</strong></a> </center>
       </Paper>
      
      </TabPanel>
    </div>
  );
}