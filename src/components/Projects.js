import { Tab, Nav, Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png"


export const Projects = () => {
  const projects = [
    {
      title: "House-Marketplace Application 05/2023",
      description: "House Marketplace Application built with React.js and Google firebase enables users to buy sell and rent properties. It offers visually appealing and responsive UI, advanced search filters, real time notification, providing a seamless and efficient experience for users.",
      imgUrl: projImg1,
    },
    {
      title: "Github-Finder Application 04/2023",
      description: "Github-Finder application  built using React.js and Github Api allows users to search github users and display their info. Users can view repos, gists, projects and other details of any user they wish to.",
      imgUrl: projImg2,
    },
    {
      title: "E-Commerce Website 02/2023",
      description: "A fully responsive E-Commerce Website that enables transactons between bussiness and customers is built using HTML, CSS, JS. This multi-page application developed with a user-friendly interface allows customers to browse products, add items to  their cart and complete purchase",
      imgUrl: projImg3,
    },
    {
      title: "Banking Application 12/2022",
      description: "The aim was to create a banking application for users which enables users to  access various functionalities of an online bank like to register, deposite, withdraw, check balance, to tansfer money securly or apply for loan. The project is implemented using Java/J2Ee while following the MVC design pattern. All the dataset used is stored and accessed using Oracle  DBMS",
      imgUrl: projImg2,
    },
    {
      title: "Contact Management System 07/2022",
      description: "The aim was to automate the manual system by the help of computerized and full-fledged computer software thus helping organization and better utilization of resources. The project enables users to easily create and store contact information. Users can add, view delete contactand also find an existing contact",
      imgUrl: projImg1,
    },
  ]

  const moreWebProjects = [
    {
      title:"Feedback-Application",
      description: "",
      imgUrl: projImg1,
    },
    {
      title:"Calculator-Application",
      description: "",
      imgUrl: projImg1,
    },
    {
      title:"Music-Player-Application",
      description: "",
      imgUrl: projImg1,
    },
    {
      title:"Netflix-landing-page",
      description: "",
      imgUrl: projImg1,
    },
    {
      title:"Weather-Application",
      description: "",
      imgUrl: projImg1,
    },
    {
      title:"Snake-Game-Application",
      description: "",
      imgUrl: projImg1,
    }, 

  ]

  const collegeProjects = [
    
      {
        title:"DOA (Direction of Arrival) and Beam-Forming using algorithms in Smart Antenna 04/2022",
        description: "Smart Antenna Arrays using signal processing are used to locate sources of various signals called the DOA so that efficient Beam-Forming can be achieved. The new Witch Factorization algorithm for DOA and VSSLMS algoritm for Beam-Forming provided the best Resolution and Bias. Project implemented using MATLAB",
        imgUrl: projImg1,
      },
      {
        title:"Ultra-Wide-Band Antenna design for wireless Personal Area Network application 09/2021",
        description: "UWB being popular because of high data rate, low power consumption an an Ultra-Wide-Band Antenna is designed for a frequency of 7.5Ghz. The simulation and measured results provide a return loss of less than -10dB and is suitable for using accross the entire UWB frequency range.Project implemented using HFSS Software",
        imgUrl: projImg1,
      },
  ]


  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <h2>Projects</h2>
            <p>
              
            </p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
            <Nav className="nav-pills mb-5 justify-content-center align-items-center" variant="pills" id="pills-tab">
              <Nav.Item>
                <Nav.Link eventKey="first">Personal Projects</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">More Web-dev Projects</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">
                  College Projects
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content id="slideUp" className="animate_animated animate_slideInUp">
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
                <Tab.Pane eventKey="second">
                <Row>
                          {
                            moreWebProjects.map((project, indexx) => {
                                return(
                                   <ProjectCard key={indexx} {...project}/>
                                )
                            })
                        }
                    </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                <Row>
                          {
                            collegeProjects.map((project, indexx) => {
                                return(
                                   <ProjectCard key={indexx} {...project}/>
                                )
                            })
                        }
                    </Row>

                </Tab.Pane>
            </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} />
    </section>
  );
};
