import React from "react";
import { Carousel } from "react-bootstrap";

function HomeCarousel() {
  return (
    <>
      <div>
        <Carousel interval={5000}>
          <Carousel.Item>
            <img
              style={{ maxHeight: "100vh" }}
              className="d-block w-100"
              src="https://assets-in.bmscdn.com/promotions/cms/creatives/1681127991522_webbannernpa.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://assets-in.bmscdn.com/promotions/cms/creatives/1680270450080_inoxweb.jpg"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://assets-in.bmscdn.com/promotions/cms/creatives/1681724212469_web.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}

export default HomeCarousel;
