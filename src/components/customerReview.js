import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import CustomerPic from "../assets/customerpic.JPG";

function CustomerReview() {
  return (
    <div>
      <Container maxWidth="md">
        <center>
          <h3 className="my-5">
            <strong>Customer Review</strong>
          </h3>
        </center>
        <Paper elevation={3} className="p-3 mb-5 ">
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <img src={CustomerPic} />
            </Grid>
            <Grid item xs={9}>
              <h5>chavelltaylor18</h5>
              <p>
                Thank you for this pretty design. I went over my revision limit
                (2) and he still gave me my final request. It was truly amazing
                working with this seller. Thank you!
              </p>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </div>
  );
}

export default CustomerReview;
