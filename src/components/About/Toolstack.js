import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudio,
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiLinux,
  SiAnaconda,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
        <div className="tech-icons-text">Linux</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <div className="tech-icons-text">VS Code</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudio />
        <div className="tech-icons-text">Visual Studio</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <div className="tech-icons-text">Postman</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAnaconda />
        <div className="tech-icons-text">Anaconda</div>
      </Col>
    </Row>
  );
}

export default Toolstack;
