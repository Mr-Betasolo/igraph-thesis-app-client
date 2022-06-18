import React from "react";
import { Link } from "react-router-dom";
import { Card, Avatar, Typography } from "@material-ui/core";
import { useLocation } from "react-router-dom";

import useStyles from "./style";

const StudentCard = ({ student }) => {
  const classes = useStyles();
  const { pathname } = useLocation();

  return (
    <Link to={`${pathname}/${student._id}`} className={classes.link}>
      <Card className={classes.card} elevation={3}>
        <div className={classes.header}>
          <Avatar aria-label="avatar" className={classes.avatar}>
            {student.lastName[0]}
          </Avatar>
          <div className={classes.headerText}>
            <Typography variant="h6">
              {`${student.lastName}, ${student.firstName}`}
            </Typography>
            <Typography variant="body2">Grade {student.grade}</Typography>
            <Typography variant="body2">{`${student.strand} - ${student.specialization}`}</Typography>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default StudentCard;
