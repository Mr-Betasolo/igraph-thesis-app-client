import React from "react";
import { Container, Typography } from "@material-ui/core";

import useStyles from "./style";
import heroImg from "../../images/hero_img.svg";

const HeroSection = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="lg">
      <section className={classes.heroSection}>
        <div className={classes.heroText}>
          <Typography variant="h2" className={classes.heroTitle}>
            Hero Title
          </Typography>
          <Typography
            variant="h6"
            gutterBottom
            className={classes.heroSubtitle}
          >
            Hero Section Description
          </Typography>
          <Typography variant="body1" className={classes.heroDesc}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
            eveniet nemo! Sed, explicabo. Qui ad quidem necessitatibus iusto
            vero ducimus?
          </Typography>
        </div>
        <div className={classes.heroImgContainer}>
          <img src={heroImg} alt="hero" className={classes.heroImage} />
        </div>
      </section>
    </Container>
  );
};

export default HeroSection;
