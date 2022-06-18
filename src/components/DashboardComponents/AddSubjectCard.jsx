import React, { useState } from "react";
import { Card, Typography, IconButton } from "@material-ui/core";
// import EditRoundedIcon from "@material-ui/icons/EditRounded";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";

import useStyles from "./style";
import Search from "./Search";

const AddSubjectCard = ({
  searchInput,
  setSearchInput,
  searchSubject,
  setSearchSubject,
  subjects,
  handleDelete,
}) => {
  const classes = useStyles();

  const handleSearch = () => {
    if (!searchInput) {
      setSearchSubject(null);
      return;
    }
    const searchSub = subjects.filter(
      (subject) =>
        subject.subjectName.toUpperCase() === searchInput.toUpperCase()
    );
    console.log(searchSub);

    if (searchSub.length !== 0) {
      setSearchSubject(searchSub);
    } else {
      setSearchSubject([]);
    }
  };

  return (
    <div>
      <Search
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        handleSearch={handleSearch}
        label="subject name"
      />
      {searchSubject !== null
        ? searchSubject.map((subject) => {
            return (
              <Card
                key={subject._id}
                className={classes.addSubjectCard}
                elevation={3}
              >
                <div className={classes.addSubjectContent}>
                  <div className={classes.textContent}>
                    <Typography variant="h6">{subject.subjectName}</Typography>
                    <Typography variant="caption">
                      Grade {subject.subjectGrade}
                    </Typography>
                  </div>
                  <div>
                    {/* <IconButton
                  aria-label="edit"
                  className={classes.addSubIcon}
                  onClick={() => handleEdit(subject)}
                >
                  <EditRoundedIcon />
                </IconButton> */}
                    <IconButton
                      aria-label="delete"
                      className={classes.addSubIcon}
                      onClick={() => handleDelete(subject)}
                    >
                      <DeleteRoundedIcon />
                    </IconButton>
                  </div>
                </div>
              </Card>
            );
          })
        : subjects.map((subject) => {
            return (
              <Card
                key={subject._id}
                className={classes.addSubjectCard}
                elevation={3}
              >
                <div className={classes.addSubjectContent}>
                  <div className={classes.textContent}>
                    <Typography variant="h6">{subject.subjectName}</Typography>
                    <Typography variant="caption">
                      Grade {subject.subjectGrade}
                    </Typography>
                  </div>
                  <div>
                    {/* <IconButton
                  aria-label="edit"
                  className={classes.addSubIcon}
                  onClick={() => handleEdit(subject)}
                >
                  <EditRoundedIcon />
                </IconButton> */}
                    <IconButton
                      aria-label="delete"
                      className={classes.addSubIcon}
                      onClick={() => handleDelete(subject)}
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
};

export default AddSubjectCard;
