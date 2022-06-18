import React, { useState, useEffect } from "react";
import {
  Toolbar,
  Typography,
  AppBar,
  IconButton,
  Menu,
  MenuItem,
  Button,
  List,
  ListItem,
  Container,
} from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import { useNavigate, Link } from "react-router-dom";

import useStyles from "./style";
import logoImage from "../../images/Logo_home.svg";

const menuLists = [
  { link: "/", name: "Home" },
  { link: "/", name: "About Us" },
  { link: "/", name: "Contacts" },
];

const Header = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  const handleLink = (e) => {
    setAnchorEl(null);
    if (e.currentTarget.innerText === "Home") {
      navigate("/home");
    } else if (e.currentTarget.innerText === "About Us") {
      navigate("/home");
    } else if (e.currentTarget.innerText === "Contacts") {
      navigate("/home");
    } else if (e.currentTarget.innerText === "Signup") {
      navigate("/auth");
    } else {
      navigate("/home");
    }
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  useEffect(() => {
    if (!isMobile) {
      setAnchorEl(null);
    }
  }, [isMobile]);

  return (
    <AppBar className={classes.appBar} position="static">
      <Container maxWidth="lg">
        <Toolbar className={classes.toolbar}>
          <div className={classes.logoContainer}>
            <Link to="/home">
              <img src={logoImage} alt="logo" width="100" />
            </Link>
          </div>
          {isMobile ? (
            <>
              <IconButton
                edge="end"
                className={classes.menuButton}
                color="primary"
                aria-label="menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                keepMounted
                transformOrigin={{ vertical: "top", horizontal: "right" }}
                open={open}
                onClose={() => setAnchorEl(null)}
              >
                {menuLists.map((list, index) => (
                  <MenuItem
                    key={index}
                    onClick={handleLink}
                    className={classes.menuList}
                  >
                    {list.name}
                  </MenuItem>
                ))}
                <Button
                  variant="contained"
                  color="secondary"
                  className={classes.btn}
                  onClick={handleLink}
                >
                  Signup
                </Button>
              </Menu>
            </>
          ) : (
            <>
              <div className={classes.navLink}>
                <List className={classes.list}>
                  {menuLists.map((list, index) => (
                    <ListItem
                      key={index}
                      className={classes.listItem}
                      onClick={handleLink}
                    >
                      <Typography
                        variant="body2"
                        color="primary"
                        className={classes.listText}
                      >
                        {list.name}
                      </Typography>
                    </ListItem>
                  ))}
                </List>
              </div>
              <div className={classes.btnContainer}>
                <Button
                  variant="contained"
                  color="secondary"
                  className={classes.btn}
                  onClick={handleLink}
                >
                  Signup
                </Button>
              </div>
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
