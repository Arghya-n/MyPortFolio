import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Nazmus Sakib</span>{" "}
            from <span className="purple">Chittagong, Bangladesh</span>.
            <br />
            I’m currently working as a{" "}
            <span className="purple">Software Engineer</span> at{" "}
            <span className="purple">Astha IT</span>.
            <br />I have graduated with a B.Sc. in{" "}
            <span className="purple">Computer Science & Engineering</span> from{" "}
            <span className="purple">Chittagong University of Engineering & Technology (CUET)</span>.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Competitive Programming 💻
            </li>
            <li className="about-activity">
              <ImPointRight /> Researching NLP Tasks 🔍
            </li>
            <li className="about-activity">
              <ImPointRight /> Academic Writing ✍️
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Designing systems that solve real-world problems through data and intelligence!"{" "}
          </p>
          <footer className="blockquote-footer">Nazmus Sakib</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
