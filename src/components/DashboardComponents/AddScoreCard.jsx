import React from "react";
import { Paper, Typography, Button } from "@material-ui/core";

import InputField from "../InputField/InputField";
import useStyle from "./style.js";
import ErrorCard from "../ErrorCard/ErrorCard";

const AddScoreCard = ({ handleChange, reset, scores, handleSubmit, error }) => {
  const classes = useStyle();

  return (
    <Paper className={classes.scorePaper} elevation={5}>
      <Typography variant="h5" component="p" gutterBottom>
        Scores
      </Typography>
      {error.hwError ? (
        <ErrorCard message={error.message} />
      ) : error.qzError ? (
        <ErrorCard message={error.message} />
      ) : error.exError ? (
        <ErrorCard message={error.message} />
      ) : error.fetchError ? (
        <ErrorCard message={error.message} />
      ) : null}
      <form
        autoComplete="off"
        style={{ marginTop: "1.5rem" }}
        onSubmit={handleSubmit}
      >
        <div className={classes.flex}>
          <InputField
            name="hwScore"
            id="hwScore"
            handleChange={handleChange}
            label="Homework"
            helperText="Enter the homework score"
            type="number"
            value={scores.homework}
            error={error.hwError}
          />
          <InputField
            name="hwTotal"
            id="hwTotal"
            handleChange={handleChange}
            label="Total"
            helperText="Enter the homework total"
            type="number"
            value={scores.hwTotal}
            error={error.hwError}
          />
        </div>
        <div className={classes.flex}>
          <InputField
            name="quizScore"
            id="quizScore"
            handleChange={handleChange}
            label="Quiz"
            helperText="Enter the quiz score"
            type="number"
            value={scores.quiz}
            error={error.qzError}
          />
          <InputField
            name="quizTotal"
            id="quizTotal"
            handleChange={handleChange}
            label="Total"
            helperText="Enter the quiz total"
            type="number"
            value={scores.quizTotal}
            error={error.qzError}
          />
        </div>
        <div className={classes.flex}>
          <InputField
            name="examScore"
            id="examScore"
            handleChange={handleChange}
            label="Exam"
            helperText="Enter the exam score"
            type="number"
            value={scores.exam}
            error={error.exError}
          />
          <InputField
            name="examTotal"
            id="examTotal"
            handleChange={handleChange}
            label="Total"
            helperText="Enter the exam total"
            type="number"
            value={scores.examTotal}
            error={error.exError}
          />
        </div>
        <div className={classes.scoreBtnContainer}>
          <Button
            className={classes.scoreBtn}
            type="submit"
            variant="contained"
            color="secondary"
            fullWidth
          >
            Submit Scores
          </Button>
          <Button
            className={classes.scoreBtn}
            variant="contained"
            color="primary"
            onClick={reset}
            fullWidth
          >
            Clear
          </Button>
        </div>
      </form>
    </Paper>
  );
};

export default AddScoreCard;
