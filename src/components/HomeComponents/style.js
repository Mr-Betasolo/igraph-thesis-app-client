import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  // header styles
  appBar: {
    backgroundColor: "#fff",
    flexGrow: 1,
    overflow: "none",
  },
  toolbar: {
    alignItems: "center",
    justifyContent: "space-between",
  },

  menuButton: {
    marginRight: theme.spacing(1),
    alignSelf: "end",
  },
  menuList: {
    paddingTop: theme.spacing(1),
    justifyContent: "center",
  },

  navLink: {
    display: "flex",
    flexDirection: "row",
  },
  list: {
    display: "flex",
    padding: 0,
    justifyContent: "center",
  },
  listItem: {
    padding: "0 2.75rem",
    justifyContent: "center",
  },
  listText: {
    cursor: "pointer",
    padding: "20px 0",
    transition: "all 0.1s ease-in",
    width: "60px",
    alignSelf: "center",
    textAlign: "center",
    "&:hover": {
      color: "#EE6C4D",
      borderBottom: "3px solid #EE6C4D",
    },
    "&:active": {
      color: "#EE6C4D",
      borderBottom: "3px solid #EE6C4D",
    },
  },
  btn: {
    padding: "8px 3rem",
    [theme.breakpoints.down("xs")]: {
      margin: "1rem 1rem",
    },
  },

  // hero section styles
  heroSection: {
    marginTop: theme.spacing(4),
    padding: "0 24px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: theme.spacing(3),
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(2),
      flexDirection: "column-reverse",
    },
  },
  heroText: {
    flexGrow: 1,
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      marginTop: theme.spacing(2),
    },
  },
  heroTitle: {
    fontSize: "2.75rem",
    fontFamily: "Montserrat",
    fontWeight: 700,
  },
  heroSubtitle: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.2rem",
      marginBottom: theme.spacing(1),
    },
  },
  heroDesc: {
    [theme.breakpoints.down("sm")]: {
      fontSize: ".9rem",
    },
  },
  heroImgContainer: {
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
  heroImage: {
    // width: "60%",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
  },

  // feature style
  featureRoot: {
    marginTop: theme.spacing(5),
    paddingTop: theme.spacing(6),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    paddingBottom: theme.spacing(6),
    backgroundColor: "#3D5A80",
    color: "#fff",
    borderRadius: "5rem 5rem 0 0",
    [theme.breakpoints.down("xs")]: {
      paddingLeft: 0,
      paddingRight: 0,
    },
  },
  featureText: {
    marginBottom: theme.spacing(6),
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
  featureTitle: {
    fontFamily: "Montserrat",
  },
  featureCard: {
    transform: "scale(.9)",
    backgroundColor: "#8EAABE",
    borderRadius: theme.spacing(4),
    paddingBottom: theme.spacing(1),
    transition: "all .2s",
    "&:hover": {
      transform: "scale(1)",
    },
  },

  featureImg: {
    height: "10em",
  },
  featureContent: {
    padding: theme.spacing(4),
    textAlign: "center",
  },
  featureCardTitle: {
    color: "#fff",
    fontFamily: "Montserrat",
    marginBottom: theme.spacing(2),
  },

  // testimonial styles
  testimonialBg: {
    backgroundColor: "#98C1D9",
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
    // textAlign: "center",
  },
  testimonialText: {
    fontFamily: "Montserrat",
    color: "#293241",
    paddingLeft: "24px",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      padding: 0,
    },
  },

  // footer style
  footer: {
    padding: theme.spacing(3),
    textAlign: "center",
    color: "#fff",
    backgroundColor: "#293241",
  },
}));

export default useStyles;
