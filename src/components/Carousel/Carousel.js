import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css';

function ControlledCarousel() {
  return (
    <Carousel fade={true} controls={false}>
      <Carousel.Item>
        <img
          className="d-block w-100 min-vh-100"
          src="https://imcyc.github.io/autoconstruccion/images/bkg.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 min-vh-100"
          src="https://imcyc.github.io/autoconstruccion/images/bkg1.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 min-vh-100"
          src="https://imcyc.github.io/autoconstruccion/images/bkg2.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;