import React from "react";
import { Grid } from "@material-ui/core";

import SubjectCard from "../../../components/SubjectCard/SubjectCard";
import { useUserContext } from "../../../context/userContext";
import useStyles from "./style";
import EmptyData from "../../../components/EmptyData/EmptyData";

const Main = () => {
  const [userContext, setUserContext] = useUserContext();
  const classes = useStyles();

  const hasSubject = userContext.details.subjects.length !== 0;

  if (!hasSubject) {
    return <EmptyData name="Subjects" />;
  }

  return (
    <div className={classes.root}>
      <Grid container className={classes.container} spacing={0}>
        {userContext.details.subjects.map((subject) => {
          return (
            <Grid
              item
              lg={4}
              md={6}
              xs={12}
              className={classes.gridItem}
              key={subject._id}
            >
              <SubjectCard subject={subject} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Main;
