import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  flex: {
    display: "flex",
    gap: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  leftGrid: {
    width: "100%",
    alignItems: "center",
  },
  textContainer: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(2),
  },

  text: {
    fontWeight: theme.typography.fontWeightBold,
    color: "#ffffff",
  },

  image: {
    width: "90%",
    display: "block",
    marginLeft: "auto",
    marginTop: theme.spacing(4),
  },
}));

export default useStyles;
