import { makeStyles } from "@material-ui/core";
import { lime } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    // padding: theme.spacing(3),
    paddingBottom: 0,
    borderRadius: "2rem",
    backgroundColor: "inherit",
    // margin: theme.spacing(1),
    // background: "linear-gradient(to right, #eb3349, #f45c43)",
    // background: "linear-gradient(to left, #e44d26, #f16529)",
  },

  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    color: theme.palette.getContrastText(lime[300]),
    backgroundColor: lime[300],
  },

  header: {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(2),
    padding: theme.spacing(3),
    color: "#fff",
  },
  details: {
    backgroundColor: "#fff",
  },
  collapse: {
    padding: theme.spacing(2),
    paddingTop: 0,
  },
  link: {
    textDecoration: "none",
  },
}));

export default useStyles;
