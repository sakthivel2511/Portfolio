import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import weather from "../assets/projects/weather.png";

import food from '../assets/projects/food.png'
import bike from "../assets/projects/bike.png";
import hospital from "../assets/projects/hospital.png";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={food}
              isBlog={false}
              title="Lift-Buddy"
              description=" The website features a smooth navigation bar with links to key sections and a Book a Table button. A carousel in the Hero Section highlights the restaurant’s Italian cuisine, while the About Section provides insights into its history, menu, and ambiance with videos and images. The project uses media integration and visual storytelling to enhance user engagement."
              ghLink="https://fabulous-pasca-710d3e.netlify.app/ 
"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bike}
              isBlog={false}
              title="Social Media"
              description="The platform helps bike service station owners manage bookings, track services, and send customer notifications. Customers can book services, check pricing, and track their service status. Built with React, Node.js, Express, and MySQL, it ensures secure authentication and a responsive design. Automated alerts enhance efficiency, streamlining operations and improving customer satisfaction.."
              ghLink="https://github.com/sakthivel251"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hospital}
              isBlog={false}
              title="E‑Commerce Website"
              description="Developed a responsive Medical Appointment Booking System using HTML, CSS, and JavaScript. Integrated form validation and dynamic UI updates for a smooth user experience. Deployed the application on Netlify and managed version control with GitHub. Ensured seamless booking and scheduling for users.."
              ghLink="https://starlit-starlight-e01283.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Blog Website"
              description="Developed a weather app with a simple UI, styled for responsiveness using CSS. Integrated OpenWeatherMap API to fetch and display real-time weather data dynamically. Implemented weather icons, error handling for invalid inputs, and tested for smooth functionality."
              ghLink="https://benevolent-meerkat-bc1e88.netlify.app/"
            />
          </Col>

      

          
          
        </Row>1
      </Container>
    </Container>
  )
}

export default Projects