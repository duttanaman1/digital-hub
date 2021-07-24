import React from 'react';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

function BreadcrumbsNav() {
  return (
    <Paper className="py-3 my-3 px-2 bg-light" elevation={0}>
        <Breadcrumbs aria-label="breadcrumb">
        <Link color="inherit" href="/" onClick={handleClick}>
            Material-UI
        </Link>
        <Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>
            Core
        </Link>
        <Typography color="textPrimary">Breadcrumb</Typography>
        </Breadcrumbs>
    </Paper>
  );
}

export default BreadcrumbsNav;