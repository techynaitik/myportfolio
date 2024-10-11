import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      title: "ReviewScrapper",
      description: "Scrapes the user reviews from flipkart",
      imgUrl: projImg1,
      link: "https://github.com/AshuChoudharystd/PythonWebscrapper.git",
    },
    {
      title: "Portfolio Website",
      description: "My personal portfolio webpage",
      imgUrl: projImg2,
      link: "https://github.com/AshuChoudharystd/Personal-Portfolio.git",
    },
    {
      title: "XAI in DRM",
      description: "Enchanced DRM Using XAI",
      imgUrl: projImg3,
      link: "https://github.com/AshuChoudharystd/DTM_project.git",
    },
    {
      title: "OS Simple Shell",
      description: "Created a custom shell based on Linux",
      imgUrl: projImg1,
      link: "https://github.com/AshuChoudharystd/OS_Simple_Shell.git",
    },
    {
      title: "CP Repo",
      description: "Solving CP with expertise in C++",
      imgUrl: projImg2,
      link: "https://github.com/AshuChoudharystd/GDSC_Competetive_coding.git",
    },
    {
      title: "Business Startup 6",
      description: "Design & Development",
      imgUrl: projImg3,
      link: "https://example.com/business-startup6",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                  <Row>
                    {projects.map((project, index) => (
                      <ProjectCard
                        key={index}
                        {...project}
                      />
                    ))}
                  </Row>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background" />
    </section>
  );
};
