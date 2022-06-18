import { makeStyles } from "@material-ui/core";
import { lime } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: "none",
  },
  card: {
    display: "flex",
    padding: theme.spacing(3),
    borderLeft: "1rem solid #cc2b5e",
    transition: "all .2s ease-in-out",
    "&:hover": {
      borderLeft: "1.5rem solid #753a88",
      color: "#cc2b5e",
    },
  },
  header: {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(2),
  },
  avatar: {
    color: theme.palette.getContrastText(lime[300]),
    backgroundColor: lime[300],
  },
}));

export default useStyles;
