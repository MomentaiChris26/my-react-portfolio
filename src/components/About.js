import React from "react";
import Heading from "../components/Heading";
import { Container, Row, Col } from "react-bootstrap";
import myProfilePic from '../images/myimage.jpg'

const About = () => {
  return (
    <div className="text-center">
      <hr className="divider" />
      <Heading title={"About"} />
      <Container style={{ marginBottom: "70px" }}>
        <Row>
          {/* <Col lg={6} md={12} sm={12}> */}
            <img
              src={myProfilePic}
              alt="portrait"
              className="aboutImg"
            />
                        <p className="aboutTxt">
              Before I was a coder, I worked in finance and accounting and
              decided to pursuit my passion in programming and development. <br /> I
              completed a 6 month bootcamp at Coder Academy. I love
              playing videos, playing obscure boardgames with friends and
              enjoying scenic views along hikes. <br /> I love writing code and
              I'm great at problem solving! <br />
              My goal is to find a job where I can help contribute to the
              company's successes. If you're interested you can contact me at christophertri90@gmail.com
            </p>
          {/* </Col> */}
          {/* <Col lg={6} md={12} sm={12}>
            <p className="aboutTxt">
              Before I was a coder, I worked in finance and accounting and
              decided to pursuit my passion in programming and development. I
              completed a 6 month bootcamp at Coder Academy. <br /> I love
              playing videos, playing obscure boardgames with friends and
              enjoying scenic views along hikes. <br /> I love writing code and
              I'm great at problem solving! <br />
              My goal is to find a job where I can help contribute to the
              company's successes.
            </p>
          </Col> */}
        </Row>
      </Container>
    </div>
  );
};
export default About;
