import React, { useState, useContext } from "react";
import { Typography, Grid, Paper, Button, Avatar } from "@material-ui/core";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";

import LoginCard from "../../components/AuthComponents/LoginCard";
import SignupCard from "../../components/AuthComponents/SignupCard";
import LeftSection from "../../components/AuthComponents/LeftSection";
import ErrorCard from "../../components/ErrorCard/ErrorCard";
import { UserContext } from "../../context/userContext.js";
import useStyles from "./styles.js";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [isSignup, setIsSignup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState({
    isError: false,
    message: "",
  });
  const [userContext, setUserContext] = useContext(UserContext);
  const navigate = useNavigate();

  const classes = useStyles();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const genericErrorMessage = "Something went wrong! Please try again later.";

    if (!isSignup) {
      fetch("https://igraph-thesis-app.herokuapp.com/users/login", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: userData.email,
          password: userData.password,
        }),
      })
        .then(async (response) => {
          if (!response.ok) {
            if (response.status === 401) {
              setError({
                isError: true,
                message: "Invalid email and password combination.",
              });
            } else {
              setError({ isError: true, message: genericErrorMessage });
            }
          } else {
            const data = await response.json();
            setUserContext((prevValues) => {
              return { ...prevValues, token: data.token };
            });
            reset();
            navigate("/dashboard/subjects");
          }
        })
        .catch((error) => {
          console.log("Error", error.message);
          setError({
            isError: true,
            message: genericErrorMessage,
          });
        });
    } else {
      fetch("https://igraph-thesis-app.herokuapp.com/users/signup", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      })
        .then(async (response) => {
          if (!response.ok) {
            if (response.status === 401) {
              setError({
                isError: true,
                message: "The email already exists.",
              });
            } else if (response.status === 500) {
              console.log(response);
              const data = await response.json();
              if (data.message) setError(data.message || genericErrorMessage);
            } else {
              console.log("Error", error.message);
              setError({
                isError: true,
                message: genericErrorMessage,
              });
            }
          } else {
            const data = await response.json();
            setUserContext((prevValues) => {
              return { ...prevValues, token: data.token };
            });
            reset();
            navigate("/dashboard/subjects");
          }
        })
        .catch((error) => {
          console.log("Error", error.message);
          setError({
            isError: true,
            message: genericErrorMessage,
          });
        });
    }
  };
  const handleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const handleToggleLink = () => {
    reset();
    setIsSignup(!isSignup);
  };
  const reset = () => {
    setShowPassword(false);
    setError({ isError: false, message: "" });
    setUserData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={3}
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "95vh" }}
      >
        <LeftSection isSignup={isSignup} />
        <Grid item md={6} sm={12}>
          <Paper elevation={3} className={classes.paper}>
            {error.isError && <ErrorCard message={error.message} />}
            <Avatar className={classes.avatar}>
              <AccountCircleOutlinedIcon />
            </Avatar>
            <Typography
              variant="h4"
              align="center"
              className={classes.loginText}
            >
              {isSignup ? "SIGN UP" : "LOGIN"}
            </Typography>
            <form
              autoComplete="off"
              onSubmit={handleSubmit}
              className={classes.form}
            >
              {isSignup ? (
                <SignupCard
                  handleChange={handleChange}
                  handleShowPassword={handleShowPassword}
                  showPassword={showPassword}
                  error={error.isError}
                />
              ) : (
                <LoginCard
                  handleChange={handleChange}
                  handleShowPassword={handleShowPassword}
                  showPassword={showPassword}
                  error={error.isError}
                />
              )}
              <Button
                className={classes.button}
                type="submit"
                variant="contained"
                color="secondary"
                size="large"
                fullWidth
              >
                {isSignup ? "SIGN UP" : "LOGIN"}
              </Button>
              <Typography align="center">
                {isSignup
                  ? "Already have an account ? "
                  : "Don't have an account yet ? "}
                <span className={classes.link} onClick={handleToggleLink}>
                  {isSignup ? "Go to Login" : "Create an Account"}
                </span>
              </Typography>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Auth;
