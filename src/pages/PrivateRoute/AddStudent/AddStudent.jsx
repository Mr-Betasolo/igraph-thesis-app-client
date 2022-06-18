import React, { useState } from "react";
import {
  Grid,
  Button,
  TextField,
  MenuItem,
  Typography,
} from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";

import useStyles from "./style.js";
import InputField from "../../../components/InputField/InputField";
import ErrorCard from "../../../components/ErrorCard/ErrorCard";
import AddStudentCard from "../../../components/DashboardComponents/AddStudentCard";
import ConfirmCard from "../../../components/ConfirmCard/ConfirmCard.jsx";
import EmptyData from "../../../components/EmptyData/EmptyData";
import Search from "../../../components/DashboardComponents/Search";

import { useUserContext } from "../../../context/userContext";

const gradeLevels = [
  {
    value: "11",
    label: "Grade 11",
  },
  {
    value: "12",
    label: "Grade 12",
  },
];
const strand = ["HUMSS", "STEM", "ABM", "Tech-Voc (TVL)"];

const AddStudent = () => {
  const classes = useStyles();
  const [userContext, setUserContext] = useUserContext();
  const [studentData, setStudentData] = useState({
    firstName: "",
    lastName: "",
    age: 16,
    contact: "",
    grade: "",
    strand: "",
    specialization: "",
    subjects: [],
  });
  const [error, setError] = useState({
    isError: false,
    message: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [confirmAlert, setConfirmAlert] = useState({
    isOpen: false,
    message: "",
  });
  const [editId, setEditId] = useState(null);
  const [searchStudent, setSearchStudent] = useState(null);
  const [searchInput, setSearchInput] = useState("");

  const hasStudent = userContext.details.students.length !== 0;

  const subjects = userContext.details.subjects.map((subject) => {
    return { name: subject.subjectName };
  });
  const grade11 = userContext.details.students.filter(
    (student) => student.grade === "11"
  );
  const grade12 = userContext.details.students.filter(
    (student) => student.grade === "12"
  );

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setStudentData({ ...studentData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const userId = userContext.details._id;
    const genericErrorMessage = "Something went wrong! Please try again later.";

    // Check if contact pattern is correct
    const pattern = "^(09)[0-9]{9}$";
    if (!studentData.contact.match(pattern)) {
      setError({
        isError: true,
        message: "Invalid Contact",
      });
      return;
    }

    // Check if there is a subject
    if (studentData.subjects.length < 1) {
      setError({
        isError: true,
        message: "Please select a subject",
      });
      return;
    }

    let confirmAge = true;
    // Check if age is greater than 25
    if (studentData.age > 25) {
      confirmAge = window.confirm(
        `Was this student really ${studentData.age} years old?`
      );
    }

    if (confirmAge) {
      if (!isEditing) {
        fetch(`https://igraph-thesis-app.herokuapp.com/dashboard/addStudent/${userId}`, {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userContext.token}`,
          },
          body: JSON.stringify(studentData),
        })
          .then(async (response) => {
            if (!response.ok) {
              if (response.status === 401) {
                setError({
                  isError: true,
                  message: "This student already exist",
                });
              } else if (response.status === 404) {
                setError({
                  isError: true,
                  message: "User not Found",
                });
              } else {
                setError({ isError: true, message: genericErrorMessage });
              }
            } else {
              console.log("student Added");
              const data = await response.json();
              setUserContext((oldValues) => {
                return { ...oldValues, details: data };
              });
              setConfirmAlert({
                isOpen: true,
                message: "Successfully Added Student",
              });
              reset();
            }
          })
          .catch((err) => {
            console.log("Error", err.message);
            setError({
              isError: true,
              message: genericErrorMessage,
            });
          });
      } else {
        const [student] = userContext.details.students.filter(
          (student) => student._id === editId
        );
        let newSubject;
        if (student.subjects) {
          newSubject = studentData.subjects.map((subject) => {
            for (let i = 0; i < studentData.subjects.length; i++) {
              console.log(subject);
              if (studentData.subjects[i].name === subject.name) {
                return subject;
              }
              return subject;
            }
            return subject;
          });
        } else {
          newSubject = studentData.subjects;
        }

        fetch(`https://igraph-thesis-app.herokuapp.com/dashboard/updateStudent/${userId}`, {
          method: "PUT",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userContext.token}`,
          },
          body: JSON.stringify({ ...studentData, subjects: newSubject }),
        })
          .then(async (response) => {
            if (!response.ok) {
              if (response.status === 404) {
                setError({
                  isError: true,
                  message: "User not Found",
                });
              } else {
                setError({ isError: true, message: genericErrorMessage });
              }
            } else {
              console.log("Subject Edited");
              const data = await response.json();
              setUserContext((oldValues) => {
                return { ...oldValues, details: data };
              });
              setConfirmAlert({
                isOpen: true,
                message: "Successfully Edited Student",
              });
              reset();
            }
          })
          .catch((err) => {
            console.log("Error", err.message);
            setError({
              isError: true,
              message: genericErrorMessage,
            });
          });
      }
    }
  };
  const handleEdit = (student) => {
    setIsEditing(true);
    setStudentData(student);
    setEditId(student._id);
    setError({ isError: false, message: "" });
  };
  const handleDelete = (student) => {
    const genericErrorMessage = "Something went wrong! Please try again later.";
    const userId = userContext.details._id;

    reset();
    fetch(`https://igraph-thesis-app.herokuapp.com/dashboard/removeStudent/${userId}`, {
      method: "PUT",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userContext.token}`,
      },
      body: JSON.stringify(student),
    })
      .then(async (response) => {
        if (!response.ok) {
          if (response.status === 401) {
            setError({
              isError: true,
              message: "The student does not exist",
            });
          } else if (response.status === 404) {
            setError({
              isError: true,
              message: "User not Found",
            });
          } else {
            setError({ isError: true, message: genericErrorMessage });
          }
        } else {
          console.log("Student Deleted");
          const data = await response.json();
          setUserContext((oldValues) => {
            return { ...oldValues, details: data };
          });
          setConfirmAlert({
            isOpen: true,
            message: "Successfully deleted student",
          });
          reset();
        }
      })
      .catch((err) => {
        console.log("Error", err.message);
        setError({
          isError: true,
          message: genericErrorMessage,
        });
      });
  };

  const reset = () => {
    setStudentData({
      firstName: "",
      lastName: "",
      age: 16,
      contact: "",
      grade: "",
      strand: "",
      specialization: "",
      subjects: [],
    });
    setError({ isError: false, message: "" });
    setIsEditing(false);
    setSearchInput("");
    setSearchStudent(null);
  };
  const specialization = () => {
    if (studentData.strand === "HUMSS") {
      return ["BEED"];
    } else if (studentData.strand === "STEM") {
      return ["BSCoe", "BSCS", "BSE", "HRM", "BSCrim"];
    } else if (studentData.strand === "ABM") {
      return ["BSA", "BSBA"];
    } else if (studentData.strand === "Tech-Voc (TVL)") {
      return ["BSMT", "Automotive"];
    } else {
      return [];
    }
  };

  const handleSearch = () => {
    if (!searchInput) {
      setSearchStudent(null);
      return;
    }
    const searchStud = userContext.details.students.filter(
      (student) => student.lastName.toUpperCase() === searchInput.toUpperCase()
    );
    console.log(searchStud);

    if (searchStud.length !== 0) {
      setSearchStudent(searchStud);
    } else {
      setSearchStudent([]);
    }
  };

  return (
    <Grid container className={classes.root}>
      <Grid item className={classes.cardContainer}>
        <Search
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          handleSearch={handleSearch}
          label="last name"
        />
        {!hasStudent ? (
          <EmptyData name="Students" />
        ) : searchStudent !== null ? (
          <>
            <AddStudentCard
              students={searchStudent}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
          </>
        ) : (
          <>
            <Typography className={classes.text} variant="h5" gutterBottom>
              Grade 11
            </Typography>
            <AddStudentCard
              students={grade11}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
            <Typography className={classes.text} variant="h5" gutterBottom>
              Grade 12
            </Typography>
            <AddStudentCard
              students={grade12}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
          </>
        )}
      </Grid>
      <Grid item className={classes.formContainer}>
        <form autoComplete="off" onSubmit={handleSubmit}>
          <ConfirmCard
            confirmAlert={confirmAlert}
            setConfirmAlert={setConfirmAlert}
          />
          {error.isError && (
            <div style={{ marginBottom: "2rem" }}>
              <ErrorCard message={error.message} />
            </div>
          )}
          <div className={classes.inputContainer}>
            <InputField
              name="firstName"
              label="First Name"
              type="text"
              handleChange={handleChange}
              value={studentData.firstName}
              autoFocus={true}
              error={error.isError}
              required={true}
            />
            <InputField
              name="lastName"
              label="Last Name"
              type="text"
              handleChange={handleChange}
              value={studentData.lastName}
              error={error.isError}
              required={true}
            />
          </div>

          <InputField
            name="contact"
            label="Contact"
            type="text"
            helperText="Contact format should be 09xxxxxxxxx"
            handleChange={handleChange}
            value={studentData.contact}
            error={error.isError}
            required={true}
          />
          <div className={classes.inputContainer}>
            <InputField
              name="age"
              label="Age"
              type="number"
              handleChange={handleChange}
              value={studentData.age}
              required={true}
            />
            <TextField
              id="grade"
              name="grade"
              label="Grade"
              onChange={handleChange}
              value={studentData.grade}
              variant="outlined"
              select
              required
              fullWidth
            >
              {gradeLevels.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <TextField
            className={classes.input}
            id="Strand"
            name="strand"
            label="Strand"
            onChange={handleChange}
            value={studentData.strand}
            variant="outlined"
            select
            required
            fullWidth
          >
            {strand.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            className={classes.input}
            disabled={studentData.strand ? false : true}
            id="specialization"
            name="specialization"
            label="Specialization"
            onChange={handleChange}
            value={studentData.specialization}
            variant="outlined"
            helperText="Pick a strand first"
            select
            required
            fullWidth
          >
            {specialization().map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
          <Autocomplete
            multiple
            autoComplete
            id="tags-standard"
            options={subjects}
            defaultValue={[]}
            getOptionLabel={(option) => option.name}
            getOptionSelected={(option, value) => option.name === value.name}
            value={studentData.subjects}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="outlined"
                label="Subjects"
                placeholder="Select the Subject"
                helperText="Pick all the student subjects"
                fullWidth
              />
            )}
            onChange={(event, value) => {
              setStudentData((prevData) => ({ ...prevData, subjects: value }));
            }}
          />
          <div className={classes.btnContainer}>
            <Button
              className={classes.button}
              type="submit"
              variant="contained"
              color="secondary"
            >
              {isEditing ? "Edit Student" : "Add Student"}
            </Button>
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              onClick={reset}
            >
              Clear
            </Button>
          </div>
        </form>
      </Grid>
    </Grid>
  );
};

export default AddStudent;
