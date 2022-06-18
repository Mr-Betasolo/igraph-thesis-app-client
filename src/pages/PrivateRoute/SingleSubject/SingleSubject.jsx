import React from "react";
import { Grid } from "@material-ui/core";
import { useParams } from "react-router-dom";

import { useUserContext } from "../../../context/userContext";
import StudentCard from "../../../components/StudentCard/StudentCard";
import useStyles from "./style";

const SingleSubject = () => {
  const [userContext, setUserContext] = useUserContext();
  const classes = useStyles();
  const { subjectId } = useParams();

  const [subjectName] = userContext.details.subjects.filter(
    (subject) => subject._id === subjectId
  );

  let students = userContext.details.students.map((student) => {
    const hasSubject = student.subjects.some(
      (subject) => subject.name === subjectName.subjectName
    );
    if (hasSubject) {
      return student;
    }
    return undefined;
  });

  students = students.filter((student) => student !== undefined);

  return (
    <div className={classes.root}>
      <Grid container spacing={2} className={classes.container}>
        {students.map((student) => {
          return (
            <Grid
              item
              key={student._id}
              xs={12}
              md={6}
              lg={4}
              className={classes.gridItem}
            >
              <StudentCard student={student} subject />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default SingleSubject;
