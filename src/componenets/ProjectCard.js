import React from "react";
import { Col } from "react-bootstrap";

const ProjectCard = ({ name, description, image }) => {
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={image} alt="" />
        <div className="proj-txtx">
          <h4>{name}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};

export default ProjectCard;
