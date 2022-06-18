import React from "react";
import { Typography } from "@material-ui/core";

import useStyles from "./style";

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Typography variant="body2">Copyright 2022</Typography>
    </footer>
  );
};

export default Footer;
