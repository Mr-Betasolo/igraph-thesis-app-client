import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
    marginBottom: theme.spacing(2),
  },
  bottom: {
    display: "flex",
    gap: theme.spacing(4),
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
    alignItems: "flex-start",
    justifyContent: "center",
  },
  nameCard: {
    width: "100%",
    color: "#fff",
    padding: theme.spacing(3),
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(3),
    background: "linear-gradient(to right, #fdc830, #f37335)",
    borderRadius: "1.5rem",
    boxShadow: "2px 2px 5px 1px rgba(0, 0, 0, .2)",
  },
  infoText: {
    backgroundColor: "#fff",
    padding: theme.spacing(3),
    // background: "linear-gradient(to right, #fdc830, #f37335)",
    // color: "#fff",
    boxShadow: "2px 2px 5px 1px rgba(0, 0, 0, .2)",
  },
  title: {
    fontSize: "1.7rem",
    fontWeight: 700,
    color: "#3D5A80",
  },
}));

export default useStyle;
