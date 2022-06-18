import React, { useState, useEffect, useCallback } from "react";
import { Outlet } from "react-router-dom";

import Loader from "../../../components/Loader/Loader";
import Sidebar from "../../../components/DashboardComponents/Sidebar";
import AppBar from "../../../components/DashboardComponents/Appbar";
import { useUserContext } from "../../../context/userContext";

import useStyles from "./style.js";

const DashBoard = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [userContext, setUserContext] = useUserContext();
  const classes = useStyles();

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);
  const fetchUserDetails = useCallback(() => {
    fetch("https://igraph-thesis-app.herokuapp.com/users/me", {
      method: "GET",
      credentials: "include",
      // Pass authentication token as bearer token in header
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userContext.token}`,
      },
    }).then(async (response) => {
      if (response.ok) {
        const data = await response.json();
        setUserContext((oldValues) => {
          return { ...oldValues, details: data };
        });
      } else {
        if (response.status === 401) {
          console.log("404 error");
          // Edge case: when the token has expired.
          // This could happen if the refreshToken calls have failed due to network error or
          // User has had the tab open from previous day and tries to click on the Fetch button
          window.location.reload();
        } else {
          setUserContext((oldValues) => {
            return { ...oldValues, details: null };
          });
          console.log("error details is null");
        }
      }
    });
  }, [setUserContext, userContext.token]);

  useEffect(() => {
    // fetch only when user details are not present
    if (!userContext.details) {
      fetchUserDetails();
    }
  }, [userContext.details, fetchUserDetails]);

  return userContext.details === null ? (
    "Error Loading User details"
  ) : !userContext.details ? (
    <Loader />
  ) : (
    <div className={classes.root}>
      <AppBar handleDrawerToggle={handleDrawerToggle} />
      <Sidebar
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
      />
      <main className={classes.content}>
        <div className={classes.toolbar}></div>
        <Outlet />
      </main>
    </div>
  );
};

export default DashBoard;
