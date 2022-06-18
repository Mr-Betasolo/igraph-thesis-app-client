import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  error: {
    backgroundColor: "rgba(255, 0, 0, 0.2)",
    width: "100%",
    padding: "1rem .5rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "3%",
    [theme.breakpoints.down("sm")]: {
      padding: ".5rem 1rem",
    },
  },
}));

export default useStyles;
