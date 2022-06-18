import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    backgroundColor: "#eee",
  },
  // main content styles
  content: {
    flexGrow: 1,

    paddingTop: "4rem",
    width: "100%",
  },
}));

export default useStyles;
