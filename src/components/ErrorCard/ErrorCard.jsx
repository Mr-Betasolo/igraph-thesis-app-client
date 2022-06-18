import React from "react";
import { Typography } from "@material-ui/core";
import ErrorOutlineOutlinedIcon from "@material-ui/icons/ErrorOutlineOutlined";

import useStyles from "./style.js";

const ErrorCard = ({ message }) => {
  const classes = useStyles();

  return (
    <div className={classes.error}>
      <ErrorOutlineOutlinedIcon color="primary" />
      <Typography variant="body2">{message}</Typography>
    </div>
  );
};

export default ErrorCard;
