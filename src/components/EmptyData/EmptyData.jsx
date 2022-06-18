import React from "react";
import { Typography, makeStyles } from "@material-ui/core";

import EmptyDataImg from "../../images/empty_image.png";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  img: {
    width: "18%",
  },
  imgContainer: {
    textAlign: "center",
  },
  title: {
    color: "rgb(88,88,167)",
  },
}));

const EmptyData = ({ name }) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <div className={classes.imgContainer}>
          <img src={EmptyDataImg} alt="person" className={classes.img} />
        </div>
        <Typography variant="subtitle1" className={classes.title}>
          No {name}
        </Typography>
      </div>
    </>
  );
};

export default EmptyData;
