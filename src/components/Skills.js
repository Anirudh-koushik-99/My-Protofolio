import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from "react-bootstrap";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p style={{fontWeight:"500",fontSize: "25px"}}>
                <span style={{ color: "rgb(255, 191, 0)"}}> C </span>| 
                <span style={{ color: "rgb(255, 191, 0)"}}> C++ </span>| 
                <span style={{ color: "rgb(255, 191, 0)"}}> Java </span>| 
                <span style={{ color: "rgb(255, 191, 0)"}}> J2Ee (JSP, Spring,
                Hibernate) </span>| 
                <span> <span style={{ color: "#ffde57"}}>P</span><span style={{ color: "#4584b6"}}>y</span> </span>|
                <span style={{ color: "yellow"}}> JavaScript
                (jQuery, Ajax, Axios, Rest) </span>|
                <span style={{ color: "orange"}}> HTML </span>|
                <span style={{ color: "rgb(111, 17, 173)"}}> CSS </span>|
                <span style={{ color: "rgb(97, 219, 251)"}}> React </span>|
                <span style={{ color: "rgb(97, 219, 251)"}}> Node </span>|
                <span style={{ color: "rgb(97, 219, 251)"}}> Express </span>|
                <span style={{ color: "#4DB33D"}}> MongoDB </span>|
                <span style={{ color: "#4DB33D"}}> MySQL </span>|
                <span style={{ color: "#4DB33D"}}> Oracle </span>
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Java Development</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Web Development</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>Full Stack Deveopment</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>Antenna Design</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
