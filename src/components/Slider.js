import React from "react";
import Carousel from "react-slick";
import { makeStyles } from '@material-ui/core/styles';
import LocationOn from "@material-ui/icons/LocationOn";
import GridContainer from "../layouts/GridContainer";
import GridItem from "../layouts/GridItem";
import Card from "../layouts/Card";
import image1 from "../assets/img/slideBg.jpg";
import image2 from "../assets/img/slideBg2.jpg";
import image3 from "../assets/img/slideBg3.jpg";
import "../assets/plugin-react-slider.scss";

// MainPage(초기 화면)의 슬라이드

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: "auto",
      position: "relative",
      width:"135%",
      height:"110%",
    },

  },
}));

export default function SectionCarousel(){
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
    pauseOnHover: true,
    initialSlide: 0,
  };

  const classes = useStyles();

  return (
    <>
     <div className={classes.root}>
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <Carousel {...settings}>
            <div>
              <img
                src={image1}
                alt="First slide"
                className="slick-image"
                style={{borderRadius: 20}}
              />
              <div className="slick-caption">
                <h4>
                  <LocationOn className="slick-icons" />Planter, Busan Gwang'alli
                </h4>
              </div>
            </div>
            <div>
              <img
                src={image2}
                alt="Second slide"
                className="slick-image"
                style={{borderRadius: 20}}
              />
              <div className="slick-caption">
                <h4>
                  <LocationOn className="slick-icons" />Thebay101,
                  Busan Haeundae
                </h4>
              </div>
            </div>
            <div>
              <img
                src={image3}
                alt="Third slide"
                className="slick-image"
                style={{borderRadius: 20}}
              />
              <div className="slick-caption">
                <h4>
                  Community
                </h4>
              </div>
            </div>
          </Carousel>
        </Card>
      </GridItem>
    </GridContainer>
    </div>
    </>
  );
}
