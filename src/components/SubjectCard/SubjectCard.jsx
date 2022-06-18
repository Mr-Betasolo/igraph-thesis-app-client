import React, { useState } from "react";
import {
  Card,
  Collapse,
  Avatar,
  Typography,
  CardActions,
  IconButton,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import clsx from "clsx";
import { Link, useLocation } from "react-router-dom";

import useStyles from "./style";

const SubjectCard = ({ subject }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const { pathname } = useLocation();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root} elevation={4}>
      <Link to={`${pathname}/${subject._id}`} className={classes.link}>
        <div className={classes.header}>
          <Avatar aria-label="avatar" className={classes.avatar}>
            {subject.subjectName[0]}
          </Avatar>
          <div className={classes.headerText}>
            <Typography variant="h6" color="inherit">
              {subject.subjectName}
            </Typography>
            <Typography variant="body2">
              {" "}
              Grade {subject.subjectGrade}
            </Typography>
          </div>
        </div>
      </Link>
      <div className={classes.details}>
        <CardActions disableSpacing>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse
          in={expanded}
          timeout="auto"
          unmountOnExit
          className={classes.collapse}
        >
          <Typography paragraph>Details:</Typography>
          <Typography paragraph>{subject.details}</Typography>
        </Collapse>
      </div>
    </Card>
  );
};

export default SubjectCard;
