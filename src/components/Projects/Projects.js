import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify} // Using existing images as placeholders
              title="Taxinument"
              description="Intelligent Financial Document Preparation system using RAG (Retrieval-Augmented Generation). Built with Python, FastAPI, and LangChain to enable accurate querying of financial documents using vector databases and LLMs."
              ghLink="https://github.com/Arghya-n/Tax-Assistant"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              title="Task Tracker System"
              description="A robust task management platform for software engineers. Implemented using ASP.NET Core and React with Clean Architecture, CQRS, and Repository Patterns. Achieved top rank on .NET leaderboards."
              ghLink="https://github.com/Arghya-n/dev-4545"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              title="Connect_CUET"
              description="A full-stack alumni networking platform for CUET students. Features include discussion forums, job postings, and event management. Built with PHP, MySQL, and Bootstrap with a dynamic CMS."
              ghLink="https://github.com/Arghya-n/Connect-CUET"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              title="Concurrent Queue Simulation"
              description="Advanced multithreaded simulation of Bank and Grocery queue systems. Developed in Java using locks and semaphores to achieve zero deadlocks and demonstrate complex concurrency concepts."
              ghLink="https://github.com/Arghya-n/Bank-Queue-Grocery-Queue"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
