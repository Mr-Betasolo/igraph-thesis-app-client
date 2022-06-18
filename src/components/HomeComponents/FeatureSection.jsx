import React from "react";
import {
  Container,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Grid,
} from "@material-ui/core";

import useStyles from "./style";
import featureImg1 from "../../images/sample_feature_1.jpg";
import featureImg2 from "../../images/sample_feature_2.jpg";
import featureImg3 from "../../images/sample_feature_3.jpg";

const cardInfos = [
  {
    id: 0,
    name: "Feature 1",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi sequi sed vel iure unde laborum!",
    img: featureImg1,
  },
  {
    id: 1,
    name: "Feature 2",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi sequi sed vel iure unde laborum!",
    img: featureImg2,
  },
  {
    id: 2,
    name: "Feature 3",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi sequi sed vel iure unde laborum!",
    img: featureImg3,
  },
];

const FeatureSection = () => {
  const classes = useStyles();

  return (
    <div className={classes.featureRoot}>
      <Container maxWidth="lg">
        <div className={classes.featureText}>
          <Typography variant="h4" className={classes.featureTitle}>
            Features
          </Typography>
          <Typography variant="subtitle1">
            We will provide you this amazing features
          </Typography>
        </div>
        <Grid container spacing={4}>
          {cardInfos.map((info) => {
            return (
              <Grid item key={info.id} md={4} xs={12}>
                <Card className={classes.featureCard} elevation={3}>
                  <CardMedia
                    className={classes.featureImg}
                    image={info.img}
                    title={info.name}
                  />
                  <CardContent className={classes.featureContent}>
                    <Typography
                      variant="h6"
                      className={classes.featureCardTitle}
                    >
                      {info.name}
                    </Typography>
                    <Typography variant="body2">{info.desc}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
};

export default FeatureSection;
