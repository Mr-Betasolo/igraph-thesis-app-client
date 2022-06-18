import { Typography } from "@material-ui/core";
import React from "react";
import Loader from "react-loader-spinner";

import { useStyles } from "./styles.js";

const LoaderPage = () => {
  const classes = useStyles();
  return (
    <div className={classes.loader}>
      <Loader type="Bars" height={80} width={80} color="#00BFFF" />
      <Typography variant="h6" color="primary">
        Loading...
      </Typography>
    </div>
  );
};

export default LoaderPage;
