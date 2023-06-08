import { Tab, Nav, Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png"


export const Projects = () => {
  const projects = [
    {
      title: "project1",
      description: "Design and Dev",
      imgUrl: projImg1,
    },
    {
      title: "project2",
      description: "Design and Dev",
      imgUrl: projImg2,
    },
    {
      title: "project3",
      description: "Design and Dev",
      imgUrl: projImg3,
    },
    {
      title: "project4",
      description: "Design and Dev",
      imgUrl: projImg2,
    },
    {
      title: "project5",
      description: "Design and Dev",
      imgUrl: projImg1,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <h2>Projects</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi
              quos tempore facilis ipsum voluptate explicabo vel at distinctio
              quam placeat, cumque accusantium debitis quas magni ab
              exercitationem soluta sequi. Saepe.
            </p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
            <Nav className="nav-pills mb-5 justify-content-center align-items-center" variant="pills" id="pills-tab">
              <Nav.Item>
                <Nav.Link eventKey="first">Tab One</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Tab Two</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">
                  Tab Three
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content id="slideIp" className="animate_animated animate_slideInUp">
                <Tab.Pane eventKey="first">
                    <Row>
                        {
                            projects.map((project, index) => {
                                return(
                                   <ProjectCard key={index} {...project}/>
                                )
                            })
                        }
                    </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second"></Tab.Pane>
                <Tab.Pane eventKey="third"></Tab.Pane>
            </Tab.Content>
            </Tab.Container>
            
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} />
    </section>
  );
};
