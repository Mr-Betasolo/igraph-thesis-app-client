import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "auto",
    width: "100vw",
    height: "60vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  toolbar: theme.mixins.toolbar,
  imgContainer: {
    marginTop: "0",
    textAlign: "center",
  },
  text: {
    marginTop: "-10%",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem",
    },
  },
}));

export default useStyles;
