import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <div>
        <Slider {...settings}>
          <div>
            <img className="slideshow--img fade" src="/img/carosel1.jpg" alt="woman holding a blue electric guitar" />
          </div>
          <div>
            <img className="slideshow--img fade" src="img/carosel2.jpg" alt="man playing an acoustic guitar" />
          </div>
          <div>
            <img className="slideshow--img fade" src="img/carosel3.jpg" alt="man playing guitar in concert" />
          </div>
          <div>
            <img className="slideshow--img fade" src="img/carosel4.jpg" alt="guitar amplifier" />
          </div>
          <div>
          <img className="slideshow--img fade" src="img/carosel5.jpg" alt="man playing guitar in concert"/>
          </div>
        </Slider>
      </div>
    );
  }
}