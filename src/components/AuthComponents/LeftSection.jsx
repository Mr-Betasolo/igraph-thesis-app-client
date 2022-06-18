import React from "react";
import { Hidden, Grid, Typography } from "@material-ui/core";

import useStyles from "./style.js";
import loginImage from "../../images/login_image.svg";
import signupImage from "../../images/signup_image.svg";

const LeftSection = ({ isSignup }) => {
  const classes = useStyles();
  return (
    <Hidden smDown>
      <Grid item md={6} className={classes.leftGrid}>
        <div className={classes.textContainer}>
          <Typography variant="h3" align="center" className={classes.text}>
            {isSignup ? "Create New Account" : "Welcome Back"}
          </Typography>
          <Typography variant="h6" component="p" align="center">
            {isSignup ? "Begin your first step" : "Nice to see you again"}
          </Typography>
        </div>
        <img
          src={isSignup ? signupImage : loginImage}
          alt="security"
          className={classes.image}
        />
      </Grid>
    </Hidden>
  );
};

export default LeftSection;
