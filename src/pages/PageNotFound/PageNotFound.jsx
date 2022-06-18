import React from "react";
import { Typography } from "@material-ui/core";

import Header from "../../components/HomeComponents/Header";
import image404 from "../../images/4040_img.png";
import useStyles from "./style.js";

const PageNotFound = () => {
  const classes = useStyles();
  return (
    <>
      <Header />
      <div className={classes.toolbar}></div>
      <div className={classes.root}>
        <div className={classes.imgContainer}>
          <img
            src={image404}
            alt="404 page not found"
            className={classes.image}
            width="50%"
          />
        </div>
        <Typography variant="h4" className={classes.text}>
          Sorry, Page not Found
        </Typography>
      </div>
    </>
  );
};

export default PageNotFound;
