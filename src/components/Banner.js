import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
import programmer from "../assets/img/programmer.png"
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";


export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Web Developer", "Java Developer", "Web Designer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <Router >
<section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my portofolio</span>
            <h1>
              {"Hi! I'm Anirudh "}

            </h1>
            <h2 style={{fontWeight: "700", fontSize: "45px"}}>And I'm a <span className="wrap" style={{color:"rgb(97, 219, 251)"}}>{text}</span></h2>

            <p>
              Creative and detail oriented entry level engineer with three months of experience in IT Service. Skilled in Core java and Full Stack Development mainly focused on <span style={{ color: "rgb(97, 219, 251)"}}>MERN</span> Stack 
            </p>
            <HashLink to='#connect' style={{textDecoration: "none"}}>
                <button className="vvd"><span >Let’s Connect <ArrowRightCircle size={25} /></span></button>
              </HashLink>

          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={programmer} alt="Header Img" />
          </Col>
        </Row>
      </Container>
    </section>

    </Router>
    
  );
};
