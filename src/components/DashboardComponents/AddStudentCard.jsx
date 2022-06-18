import React from "react";
import { Card, Typography, IconButton } from "@material-ui/core";
import EditRoundedIcon from "@material-ui/icons/EditRounded";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";

import useStyles from "./style";

function AddStudentCard({ students, handleDelete, handleEdit }) {
  const classes = useStyles();

  return (
    <div>
      {students.map((student) => {
        return (
          <Card
            key={student._id}
            className={classes.addSubjectCard}
            elevation={3}
          >
            <div className={classes.addSubjectContent}>
              <div className={classes.textContent}>
                <Typography variant="h6">
                  {student.lastName}, {student.firstName}
                </Typography>
                <Typography variant="caption">
                  {student.strand} - {student.specialization}
                </Typography>
              </div>
              <div>
                <IconButton
                  aria-label="edit"
                  className={classes.addSubIcon}
                  onClick={() => handleEdit(student)}
                >
                  <EditRoundedIcon />
                </IconButton>
                <IconButton
                  aria-label="delete"
                  className={classes.addSubIcon}
                  onClick={() => handleDelete(student)}
                >
                  <DeleteRoundedIcon />
                </IconButton>
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
}

export default AddStudentCard;
