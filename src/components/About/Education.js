import React from "react";
import { Col, Row, Card } from "react-bootstrap";
import { ImPointRight } from "react-icons/im";

function Education() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col md={12} className="education-card">
        <Card className="quote-card-view">
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <p style={{ textAlign: "justify" }}>
                My academic journey has been centered around <span className="purple">Computer Science and Engineering</span> with a strong focus on research and problem-solving.
              </p>
              
              <div className="education-item" style={{ marginBottom: "20px" }}>
                <h3 style={{ fontSize: "1.5em", color: "white" }}>
                  Chittagong University of Engineering & Technology (CUET)
                </h3>
                <p style={{ color: "rgb(170 148 250)", margin: "0" }}>
                  Bachelor of Science in Computer Science & Engineering | 2020 – 2025
                </p>
                <p style={{ fontStyle: "italic", marginBottom: "10px" }}>CGPA: 3.75/4.00</p>
                <h5 style={{ color: "white" }}>Relevant Coursework:</h5>
                <ul style={{ listStyleType: "none", paddingLeft: "10px" }}>
                  <li className="about-activity">
                    <ImPointRight /> Machine Learning, Deep Learning, Natural Language Processing
                  </li>
                  <li className="about-activity">
                    <ImPointRight /> Data Structures & Algorithms, Computer Vision, Artificial Intelligence
                  </li>
                </ul>
                <h5 style={{ color: "white", marginTop: "10px" }}>Undergraduate Research:</h5>
                <p>
                  Focused on NLP tasks for low-resource Dravidian languages including fake news detection, 
                  hate speech identification, and multimodal content analysis.
                </p>
              </div>

              <div className="education-item">
                <h3 style={{ fontSize: "1.5em", color: "white" }}>
                  Birsreshtha Noor Mohammad Public College
                </h3>
                <p style={{ color: "rgb(170 148 250)", margin: "0" }}>
                  Higher Secondary School Certificate (Science) | 2017 – 2019
                </p>
                <p style={{ fontStyle: "italic" }}>GPA: 5.00/5.00</p>
              </div>
            </blockquote>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default Education;
