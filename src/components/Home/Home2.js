import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m a Software Engineer and Researcher who loves transforming ideas into
              reliable, scalable products. I have a deep passion for 
              <i>
                <b className="purple"> Natural Language Processing, Machine Learning, and Applied AI. </b>
              </i>
              <br />
              <br />
              I’m proficient in
              <i>
                <b className="purple">
                  {" "}
                  Python, C#, Java, and JavaScript{" "}
                </b>
              </i>
              — with experience in building high-performance systems and RAG-based solutions.
              <br />
              <br />
              My key areas of interest include developing
              <i>
                <b className="purple">
                  {" "}
                  Large Language Model (LLM) applications, Computer Vision,{" "}
                </b>
              </i>
              and exploring low-resource languages in NLP.
              <br />
              <br />
              Whenever possible, I love building projects with
              <b className="purple"> Python (FastAPI/Flask) </b> and modern frameworks like{" "}
              <i>
                <b className="purple">React.js</b> and{" "}
                <b className="purple">ASP.NET Core</b>.
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
