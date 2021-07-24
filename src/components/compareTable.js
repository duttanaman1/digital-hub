import React from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

function createData(packages, basic, standard,premium ) {
  return { packages, basic, standard,premium };
}

const rows = [
  createData('Concept', 1, 2, 3),
  createData('Print-Ready','True','True','True'),
  createData('Double-Sided','True','True','True' ),
  createData('Source File','False','False','True' ),
 
];

export default function compareTable() {

  return (
      <div>
      <h3>Compare Package</h3>
    <TableContainer component={Paper} >
    
      <Table aria-label="simple table" style={{textAlign:"center "}}>
        <TableHead>
          <TableRow>            
            <TableCell align="center"><strong>Package</strong></TableCell>
            <TableCell align="center"><strong>Basic Package $15&nbsp;</strong></TableCell>
            <TableCell align="center"><strong>Standard Package $25&nbsp;</strong></TableCell>
            <TableCell align="center"><strong>Premium Package $50&nbsp;</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.packages}>
              <TableCell component="th" scope="row">
                {row.packages}
              </TableCell>
              <TableCell align="center">{row.basic}</TableCell>
              <TableCell align="center">{row.standard}</TableCell>
              <TableCell align="center">{row.premium}</TableCell>              
            </TableRow>
          ))}
           <TableRow>
               <TableCell component="th" scope="row">
               <strong>Total</strong>
              </TableCell>
              <TableCell align="center">$15<br/><Button className="btn p-2 mt-3" style={{backgroundColor:"#34eb37", color:"white"}}>Select</Button></TableCell>
              <TableCell align="center">$25<br/><Button className="btn p-2 mt-3" style={{backgroundColor:"#34eb37", color:"white"}}>Select</Button></TableCell>
              <TableCell align="center">$50<br/><Button className="btn p-2 mt-3" style={{backgroundColor:"#34eb37", color:"white"}}>Select</Button></TableCell>
           </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
