import React from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";

import useStyles from "./style";
import { useUserContext } from "../../context/userContext.js";

const styledProps = { drawerWidth: 240 };

const Appbar = ({ handleDrawerToggle }) => {
  const [userContext, setUserContext] = useUserContext();
  const classes = useStyles(styledProps);

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
        <div className={classes.user}>
          <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
            edge="end"
          >
            <AccountCircle />
          </IconButton>
          <Typography variant="body1" className={classes.title}>
            {userContext.details.email}
          </Typography>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Appbar;
