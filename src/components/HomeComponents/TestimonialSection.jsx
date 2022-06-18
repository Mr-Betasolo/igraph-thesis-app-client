import React from "react";
import { Container, Typography } from "@material-ui/core";
import { Carousel } from "react-responsive-carousel";

import useStyles from "./style";
import "./slider.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import testimonialImg1 from "../../images/sample_testimonial_1.jpg";
import testimonialImg2 from "../../images/sample_testimonial_2.jpg";
import testimonialImg3 from "../../images/sample_testimonial_3.jpg";

const testimonials = [
  {
    id: 0,
    img: testimonialImg1,
    name: "Jane Doe",
    job: "Designer",
    testimonial:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, odit.",
  },
  {
    id: 1,
    img: testimonialImg2,
    name: "John Doe",
    job: "Designer",
    testimonial:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, odit.",
  },
  {
    id: 2,
    img: testimonialImg3,
    name: "Shirly Fultz",
    job: "Designer",
    testimonial:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, odit.",
  },
];

const TestimonialSection = () => {
  const classes = useStyles();
  return (
    <>
      <section className={classes.testimonialBg}>
        <Container maxWidth="lg">
          <Typography variant="h4" className={classes.testimonialText}>
            Testimonials
          </Typography>
          <Carousel
            showArrows={true}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
            autoPlay={true}
            interval={6100}
          >
            {testimonials.map((person) => {
              return (
                <div key={person.id}>
                  <div className="imgContainer">
                    <img
                      src={person.img}
                      className="carouselImg"
                      alt={person.name}
                    />
                  </div>
                  <div className="myCarousel">
                    <h3>{person.name}</h3>
                    <h4>{person.job}</h4>
                    <p>{person.testimonial}</p>
                  </div>
                </div>
              );
            })}
          </Carousel>
        </Container>
      </section>
    </>
  );
};

export default TestimonialSection;
