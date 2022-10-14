import React, { useEffect, useState } from "react";
import { Col, Container, Nav, Row, Tab, TabPane } from "react-bootstrap";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import ProjectCard from "./ProjectCard";
import { collection, getDocs } from "firebase/firestore/lite";
import { db } from "../firebase";

const Project = () => {
const [portfolio, setPortfolio] = useState([])
const colRef=collection(db, 'portfolio')
  const projects = [
    {
      title: "Business Startup",
      description: "Design Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design Development",
      imgUrl: projImg3,
    },
  ];
  useEffect(() => {
   getPortfolio();
  }, [])
  

const getPortfolio= async () => {
const querySnaps= await getDocs(colRef)
setPortfolio(querySnaps.docs.map(doc=>doc.data()))
}
console.log(portfolio);


  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              porro unde ut nostrum enim quas suscipit saepe nesciunt tempora.
              Et nulla quidem modi quaerat ad in deserunt tempora recusandae
              quas.
            </p>

            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab One</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab Two</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab Three</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
              <Tab.Pane eventKey="first">
              <Row>
              {portfolio.map((port, ind)=>{
              return(
              <ProjectCard key={ind} {...port}/>
              )
              })}
              </Row>
              </Tab.Pane>
              <Tab.Pane eventKey="Second">Lorem isum</Tab.Pane>
              <Tab.Pane eventKey="Third">Lorem Isotuni</Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img src={colorSharp2} alt="" className="background-image-right" />
    </section>
  );
};

export default Project;
