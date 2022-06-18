import React, { useState, useEffect } from "react";
import {
  Drawer,
  Divider,
  Hidden,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
} from "@material-ui/core";
import DashboardRoundedIcon from "@material-ui/icons/DashboardRounded";
import LibraryBooksRoundedIcon from "@material-ui/icons/LibraryBooksRounded";
import GroupAddRoundedIcon from "@material-ui/icons/GroupAddRounded";
// import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import ExitToAppRoundedIcon from "@material-ui/icons/ExitToAppRounded";
import CachedIcon from "@material-ui/icons/Cached";
import { Link } from "react-router-dom";

import useStyles from "./style.js";
import logoWhite from "../../images/Logo_white.svg";
import { useUserContext } from "../../context/userContext.js";

const styledProps = { drawerWidth: 240 };

const Sidebar = ({ window, mobileOpen, handleDrawerToggle }) => {
  const [selectedLink, setSelectedLink] = useState(0);
  const [userContext, setUserContext] = useUserContext();
  const [disabled, setDisabled] = useState(false);

  const classes = useStyles(styledProps);
  const itemLists = [
    {
      text: "dashboard",
      logo: <DashboardRoundedIcon />,
      onClick: () => {
        setSelectedLink(0);
      },
      disabled: () => false,
      link: "subjects",
    },
    {
      text: "add subject",
      logo: <LibraryBooksRoundedIcon />,
      onClick: () => {
        setSelectedLink(1);
      },
      disabled: () => false,
      link: "addSubject",
    },
    {
      text: "add student",
      logo: <GroupAddRoundedIcon />,
      onClick: () => {
        setSelectedLink(2);
      },
      disabled: () =>
        userContext.details.subjects.length !== 0 ? false : true,
      link: "addStudent",
    },
    // {
    //   text: "search",
    //   logo: <SearchRoundedIcon />,
    //   onClick: () => {
    //     setSelectedLink(3);
    //   },
    //   disabled: () => false,
    //   link: "subjects",
    // },
  ];

  useEffect(() => {
    userContext.details.subjects.length !== 0
      ? setDisabled(false)
      : setDisabled(true);
  }, [userContext.details.subjects]);

  const logoutHandler = () => {
    fetch("https://igraph-thesis-app.herokuapp.com/users/logout", {
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userContext.token}`,
      },
    })
      .then(async (response) => {
        setUserContext((oldValues) => {
          return { ...oldValues, details: undefined, token: null };
        });
        localStorage.setItem("logout", Date.now());
      })
      .catch((err) => console.log(err));
  };

  const refetchHandler = () => {
    // set details to undefined so that spinner will be displayed and
    //  fetchUserDetails will be invoked from useEffect
    setUserContext((oldValues) => {
      return { ...oldValues, details: undefined };
    });
  };

  const drawer = (
    <div style={{ height: "100vh", position: "relative" }}>
      <div className={classes.toolbar}>
        <img src={logoWhite} alt="Logo" className={classes.logo} />
      </div>
      <Divider classes={{ root: classes.divider }} light />
      <List className={classes.list}>
        {itemLists.map((item, index) => {
          return (
            <Link
              to={item.link}
              key={index}
              className={`${classes.link} ${
                item.text === "add student" && disabled
                  ? classes.disabledLink
                  : null
              }`}
            >
              <ListItem
                button
                className={classes.listItem}
                classes={{ selected: classes.selected, root: classes.root }}
                selected={index === selectedLink}
                onClick={item.onClick}
                disabled={item.text === "add student" ? disabled : false}
              >
                <ListItemIcon className={classes.sidebarIcon}>
                  {item.logo}
                </ListItemIcon>
                <ListItemText primary={item.text.toUpperCase()} />
              </ListItem>
            </Link>
          );
        })}
      </List>
      <div className={classes.btnContainer}>
        <Button
          className={classes.btn}
          startIcon={<CachedIcon />}
          onClick={refetchHandler}
          fullWidth
        >
          RELOAD USER
        </Button>
        <Button
          className={classes.btn}
          startIcon={<ExitToAppRoundedIcon />}
          onClick={logoutHandler}
          fullWidth
        >
          LOGOUT
        </Button>
      </div>
    </div>
  );
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <nav className={classes.drawer} aria-label="dashboard folders">
      <Hidden smUp implementation="js">
        <Drawer
          container={container}
          variant="temporary"
          anchor="left"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          open
        >
          {drawer}
        </Drawer>
      </Hidden>
    </nav>
  );
};

export default Sidebar;
