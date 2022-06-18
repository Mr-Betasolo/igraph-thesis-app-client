import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Typography, List, ListItem, ListItemText } from "@material-ui/core";

import useStyle from "./style";
import { useUserContext } from "../../../context/userContext";
import AddScoreCard from "../../../components/DashboardComponents/AddScoreCard";
import LineChart from "../../../components/LineChart/LineChart";
import ConfirmCard from "../../../components/ConfirmCard/ConfirmCard";

const StudentGraph = () => {
  const [scores, setScores] = useState({
    homework: 0,
    exam: 0,
    quiz: 0,
    hwTotal: 0,
    examTotal: 0,
    quizTotal: 0,
  });
  const [error, setError] = useState({
    fetchError: false,
    hwError: false,
    qzError: false,
    exError: false,
    message: "",
  });
  const [chartData, setChartData] = useState([]);
  const [confirmAlert, setConfirmAlert] = useState({
    isOpen: false,
    message: "Score Added",
  });

  const { subjectId, studentId } = useParams();
  const classes = useStyle();
  const [userContext, setUserContext] = useUserContext();

  const [student] = userContext.details.students.filter(
    (student) => studentId === student._id
  );
  const [subjectName] = userContext.details.subjects.filter(
    (subject) => subject._id === subjectId
  );

  const subjects = student.subjects.filter((subject) => {
    const userSub = userContext.details.subjects;
    for (let i = 0; i < userSub.length; i++) {
      if (userSub[i].subjectName === subject.name) {
        return subject;
      }
    }
    return undefined;
  });
  const handleChange = (e) => {
    const name_ = e.target.name;
    const value = e.target.value;

    if (name_ === "hwScore") {
      setScores({ ...scores, homework: value });
    } else if (name_ === "quizScore") {
      setScores({ ...scores, quiz: value });
    } else if (name_ === "examScore") {
      setScores({ ...scores, exam: value });
    } else if (name_ === "hwTotal") {
      setScores({ ...scores, hwTotal: value });
    } else if (name_ === "quizTotal") {
      setScores({ ...scores, quizTotal: value });
    } else if (name_ === "examTotal") {
      setScores({ ...scores, examTotal: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all scores are not equal to zero
    if (
      parseInt(scores.homework) === 0 &&
      parseInt(scores.quiz) === 0 &&
      parseInt(scores.exam) === 0 &&
      parseInt(scores.quizTotal) === 0 &&
      parseInt(scores.hwTotal) === 0 &&
      parseInt(scores.examTotal) === 0
    ) {
      console.log("all zero");
      return;
    }

    // Check if total are greater or equal to actual scores
    if (parseInt(scores.homework) > parseInt(scores.hwTotal)) {
      // check if total is greater or equal than the score
      setError({
        qzError: false,
        exError: false,
        hwError: true,
        message: "Homework total should be greater or equal to homework score",
      });
      return;
    } else if (parseInt(scores.quiz) > parseInt(scores.quizTotal)) {
      setError({
        exError: false,
        hwError: false,
        qzError: true,
        message: "Quiz total should be greater or equal to quiz score",
      });
      return;
    } else if (parseInt(scores.exam) > parseInt(scores.examTotal)) {
      setError({
        hwError: false,
        qzError: false,
        exError: true,
        message: "Exam total should be greater or equal to exam score",
      });
      return;
    }

    // loop on the students subject and add the score to the current subject
    const studentTemp = student.subjects.map((subject) => {
      if (subject.name === subjectName.subjectName) {
        if (scores.hwTotal !== 0 && scores.hwTotal !== "0") {
          const hws = subject.homeworks || [];
          subject.homeworks = [...hws, [scores.homework, scores.hwTotal]];
        }
        if (scores.quizTotal !== 0 && scores.quizTotal !== "0") {
          const qzs = subject.quizzes || [];
          subject.quizzes = [...qzs, [scores.quiz, scores.quizTotal]];
        }
        if (scores.examTotal !== 0 && scores.examTotal !== "0") {
          const exs = subject.exams || [];
          subject.exams = [...exs, [scores.exam, scores.examTotal]];
        }
      }
      return subject;
    });

    console.log(studentTemp);

    // fetch
    const userId = userContext.details._id;
    const studentId = student._id;
    const genericErrorMessage = "Something went wrong! Please try again later.";

    fetch(`https://igraph-thesis-app.herokuapp.com/dashboard/addScore/${userId}/${studentId}`, {
      method: "PUT",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userContext.token}`,
      },
      body: JSON.stringify(studentTemp),
    })
      .then(async (response) => {
        if (!response.ok) {
          if (response.status === 404) {
            setError({
              fetchError: true,
              message: "User not Found",
            });
          } else {
            setError({ fetchError: true, message: genericErrorMessage });
          }
        } else {
          console.log("score added");
          const data = await response.json();
          console.log(data);
          setUserContext((oldValues) => {
            return { ...oldValues, details: data };
          });
          setConfirmAlert({ isOpen: true, message: "Score Added" });
          reset();
        }
      })
      .catch((err) => {
        console.log("Error", err.message);
        setError({ fetchError: true, message: genericErrorMessage });
      });
  };

  const reset = () => {
    setScores({
      homework: 0,
      exam: 0,
      quiz: 0,
      hwTotal: 0,
      examTotal: 0,
      quizTotal: 0,
    });
    setError({
      fetchError: false,
      hwError: false,
      qzError: false,
      exError: false,
      message: "",
    });
  };

  useEffect(() => {
    const getChartData = (student, subjectName) => {
      const [subjectData] = student.subjects.filter(
        (subject) => subject.name === subjectName.subjectName
      );

      const homeworkData = subjectData.homeworks.map((score) => {
        if (!score) {
          return;
        }
        return (score[0] / score[1]) * 100;
      });
      const quizData = subjectData.quizzes.map((score) => {
        if (!score) {
          return;
        }
        return (score[0] / score[1]) * 100;
      });
      const examData = subjectData.exams.map((score) => {
        if (!score) {
          return;
        }
        return Math.round((parseInt(score[0]) / parseInt(score[1])) * 100);
      });

      return [
        {
          label: "Homeworks",
          data: homeworkData,
          fill: false,
          backgroundColor: "rgba(255,99,132, 0.5)",
          borderColor: "#FF6384",
          pointStyle: "circle",
          pointRadius: 7,
          pointHoverRadius: 9,
        },
        {
          label: "Quizzes",
          data: quizData,
          fill: false,
          backgroundColor: "rgba(54,162,235, 0.5)",
          borderColor: "#36A2EB",
          pointStyle: "circle",
          pointRadius: 7,
          pointHoverRadius: 9,
        },
        {
          label: "Exams",
          data: examData,
          fill: false,
          backgroundColor: "rgba(75,192,192,0.5)",
          borderColor: "#4BC0C0",
          pointStyle: "circle",
          pointRadius: 7,
          pointHoverRadius: 9,
        },
      ];
    };
    setChartData(getChartData(student, subjectName));
  }, [userContext, student, subjectName]);
  // console.log(chartData);

  return (
    <div className={classes.root}>
      <div className={classes.top}>
        <Typography className={classes.title}>
          {subjectName.subjectName.toUpperCase()}
        </Typography>
        <LineChart chartData={chartData} />
      </div>
      <div className={classes.bottom}>
        <section className={classes.info}>
          <div className={classes.nameCard}>
            <Typography variant="h4" component="p">
              {`${student.lastName}, ${student.firstName}`}
            </Typography>
            <Typography variant="subtitle1">{`Grade ${student.grade}`}</Typography>
          </div>
          <div className={classes.infoText}>
            <Typography variant="h5" component="p" gutterBottom>
              Age: {student.age}
            </Typography>
            <Typography variant="h5" component="p" gutterBottom>
              Contact: {student.contact}
            </Typography>
            <Typography variant="h5" component="p" gutterBottom>
              Strand: {student.strand}
            </Typography>
            <Typography variant="h5" component="p" gutterBottom>
              Specialization: {student.specialization}
            </Typography>
            <Typography variant="h5" component="p">
              All Subjects:
            </Typography>
            <List>
              {subjects.map((subject) => {
                return (
                  <ListItem key={subject.name}>
                    <ListItemText inset primary={subject.name} />
                  </ListItem>
                );
              })}
            </List>
          </div>
        </section>
        <section className={classes.addScoreCard}>
          <ConfirmCard
            confirmAlert={confirmAlert}
            setConfirmAlert={setConfirmAlert}
          />
          <AddScoreCard
            handleChange={handleChange}
            reset={reset}
            scores={scores}
            handleSubmit={handleSubmit}
            error={error}
          />
        </section>
      </div>
    </div>
  );
};

export default StudentGraph;
