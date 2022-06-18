import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
  },
  container: {
    alignItems: "start",
    // gap: theme.spacing(1),
    padding: "1px",
  },
  gridItem: {
    transform: "scale(.9)",
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
    transition: "all .2s ease-in-out",
    "&:hover": {
      transform: "scale(1)",
    },
    borderRadius: "2rem",
    marginBottom: theme.spacing(1),
  },
}));

export default useStyles;
