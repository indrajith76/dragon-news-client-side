import React from "react";
import Carousel from "react-bootstrap/Carousel";

const BrandCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.istockphoto.com/vectors/breaking-news-live-on-red-background-vector-id1285181904?k=20&m=1285181904&s=170667a&w=0&h=Vo36B-Qz4cF-dahDuA19cVvSn1IbMudOFY34fgDVL4s="
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/free-vector/blue-breaking-news-tv-background_1017-14201.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default BrandCarousel;
