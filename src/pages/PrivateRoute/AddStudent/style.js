import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column-reverse",
      paddingBottom: theme.spacing(5),
    },
  },
  // form styles
  formContainer: {
    display: "flex",
    alignItems: "center",
    justifySelf: "center",
    backgroundColor: "#e5e5e5",
    overflowX: "scroll",
    flexGrow: 1,
    // flexBasis: "5%",
    maxWidth: "37%",
    padding: theme.spacing(3),
    maxHeight: `calc(150vh - 4rem)`,

    [theme.breakpoints.down("sm")]: {
      alignItems: "center",
      paddingBottom: "4rem",
      marginBottom: "2rem",
      maxWidth: "100%",
    },
  },
  inputContainer: {
    display: "flex",
    gap: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      display: "block",
      marginBottom: theme.spacing(2),
    },
  },
  input: {
    marginBottom: theme.spacing(3),
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(2),
    },
  },
  btnContainer: {
    marginTop: theme.spacing(3),
    display: "flex",
    gap: "1rem",
  },

  button: {
    flexBasis: "50%",
    padding: theme.spacing(1),
  },
  // card styles
  cardContainer: {
    flexGrow: 2,
    flexBasis: "50%",
    overflowY: "scroll",
    height: `calc(100vh - 4rem)`,
    paddingTop: theme.spacing(3),
    [theme.breakpoints.down("sm")]: {
      overflow: "visible",
      marginBottom: theme.spacing(5),
    },
  },
  text: {
    marginLeft: theme.spacing(3),
  },
}));

export default useStyles;
