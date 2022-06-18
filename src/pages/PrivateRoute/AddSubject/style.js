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
    justifySelf: "end",
    backgroundColor: "#e5e5e5",
    flexGrow: 1,
    flexBasis: "30%",
    padding: theme.spacing(3),
    height: `calc(100vh - 4rem)`,

    [theme.breakpoints.down("sm")]: {
      paddingBottom: "4rem",
      marginBottom: "2rem",
    },
  },
  input: {
    marginBottom: theme.spacing(3),
    [theme.breakpoints.down("xs")]: {
      marginBottom: theme.spacing(2),
    },
  },
  btnContainer: {
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
    flexBasis: "70%",
    overflow: "scroll",
    height: `calc(100vh - 4rem)`,
    paddingTop: theme.spacing(3),
  },
}));

export default useStyles;
