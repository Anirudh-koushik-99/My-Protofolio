import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";

export const Contact = () => {
  return (
    <section className="contact" id="connect">
      <Container>
        <p>
          Feel free to connect using any of the platforms listed below at any
          time
        </p>
        <div
          className="social-icon"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <span>
            <a href="https://github.com/Anirudh-koushik-99">
              <img src={navIcon4} alt="" />
            </a>
            <a href="https://www.linkedin.com/in/anirudh-koushik-b-a-2aa147176/">
              <img src={navIcon1} alt="" />
            </a>
            <a href="https://www.facebook.com/anirudh.ani.7798">
              <img src={navIcon2} alt="" />
            </a>
            <a href="https://www.instagram.com/anirudh_koushik_/">
              <img src={navIcon3} alt="" />
            </a>
          </span>
        </div>
      </Container>
    </section>
  );
};
