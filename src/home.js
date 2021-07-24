import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

import BusinessDesign from "./assets/businessDesign.JPG";
import Breadcrumbs from "./components/breadcrumb";
import PackgeTab from "./components/packageTab";
import About from "./components/About";
import WhyMe from "./components/WhyMe";
import CompareTable from "./components/compareTable";
import CustomerReview from "./components/customerReview";
import Header from "./components/header";
import Footer from "./components/footer";

function Home() {
  return (
    <div>
      <Header />
      <Container maxWidth="lg">
        <Breadcrumbs />

        <Grid container spacing={3}>
          <Grid item xs={12}>
            <h4>
              <strong>Professional Business Card Design. </strong>
            </h4>
            <h6 className="text-secondary">
              I will Design a Professional Business Card
            </h6>
          </Grid>
          <Grid item xs={6}>
            <img src={BusinessDesign} />
          </Grid>
          <Grid item xs={6}>
            <PackgeTab />
          </Grid>
          <Grid item xs={6}>
            <About />
          </Grid>
          <Grid item xs={6}>
            <CompareTable />
          </Grid>
          <Grid item xs={3}>
            <WhyMe />
          </Grid>
          <Grid item xs={12}>
            <CustomerReview />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </div>
  );
}

export default Home;
