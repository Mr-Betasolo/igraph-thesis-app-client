import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  // Sidebar styles
  drawer: (props) => ({
    backgroundColor: "#222222",
    height: "100vh",
    [theme.breakpoints.up("sm")]: {
      minWidth: `${props.drawerWidth}px`,
      flexShrink: 0,
    },
  }),
  drawerPaper: (props) => ({
    backgroundColor: "#3D5A80",
    color: "#fff",
    minWidth: `${props.drawerWidth}px`,
  }),
  toolbar: theme.mixins.toolbar,
  logo: {
    display: "block",
    width: "8rem",
    marginLeft: "auto",
    marginRight: "auto",
    padding: theme.spacing(2),
  },
  divider: {
    background: "#bbbbbb",
    margin: 0,
  },
  list: {
    margin: theme.spacing(2),
  },
  listItem: {
    borderRadius: "1.5625rem",
    paddingTop: "1rem",
    paddingBottom: "1rem",
    marginBottom: theme.spacing(1),
    transition: theme.transitions.create(["background"], {
      duration: theme.transitions.duration.complex,
    }),
  },
  link: {
    textDecoration: "none",
    color: "#fff",
  },
  sidebarIcon: {
    color: "#fff",
    paddingLeft: theme.spacing(2),
  },
  root: {
    "&$selected": {
      background: "rgba(255, 255, 255, 0.1)",
      // "&:hover": {
      // },
    },
  },
  selected: {
    background: "rgba(255, 255, 255, 0.1)",
  },
  btnContainer: {
    position: "absolute",
    bottom: "2.5rem",
    width: "100%",
  },
  btn: {
    paddingTop: ".8rem",
    paddingBottom: ".8rem",
    color: "#fff",
  },
  disabledLink: {
    pointerEvents: "none",
  },

  // Appbar styles
  appBar: (props) => ({
    backgroundColor: "#fff",
    color: "#293241",
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${props.drawerWidth}px)`,
      marginLeft: props.drawerWidth,
    },
  }),
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  user: {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(2),
    position: "absolute",
    right: "3rem",
  },
  // Add Subject Card Styles
  addSubjectCard: {
    margin: "0 1rem 1rem",
    borderRadius: "1rem",
    color: "#fff",
    "&:nth-child(5n+1)": {
      background: "linear-gradient(to right, #2ebf91, #8360c3)",
    },
    "&:nth-child(5n+2)": {
      background: "linear-gradient(to right, #FF4B2B, #FF416C)",
    },
    "&:nth-child(5n+3)": {
      background: "linear-gradient(to right, #2C5364, #203A43, #0F2027)",
    },
    "&:nth-child(5n+4)": {
      background: "linear-gradient(to right, #B5AC49, #3CA55C)",
    },
    "&:nth-child(5n+5)": {
      background: "linear-gradient(to left, #eaafc8, #654ea3)",
    },
  },
  addSubjectContent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: ".5rem 2rem",
  },
  addSubIcon: {
    color: "white",
    transition: theme.transitions.create(["transform"], {
      duration: theme.transitions.duration.complex,
    }),
    "&:hover": {
      transform: "scale(1.1)",
    },
  },

  // Add score style
  scorePaper: {
    padding: theme.spacing(5),
    // margin: theme.spacing(3),
    marginTop: theme.spacing(3),
  },
  flex: {
    display: "flex",
    gap: theme.spacing(3),
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  scoreBtnContainer: {
    display: "flex",
    gap: theme.spacing(3),
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },

  scoreBtn: {
    flexBasis: "50%",
    padding: theme.spacing(2),
    "&:first-child": {
      [theme.breakpoints.down("sm")]: {
        marginBottom: theme.spacing(2),
      },
    },
  },

  // search
  margin: {
    marginRight: theme.spacing(3),
    marginTop: 0,
    marginBottom: theme.spacing(2),
  },
  textField: {
    width: "25ch",
  },
  searchRoot: {
    textAlign: "right",
  },
}));

export default useStyles;
