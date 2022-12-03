import React from "react";
import { useState } from "react";

function Projects() {
  const [projects] = useState([
    {
      title: "HOTEL MANAGEMENT SYSTEM",
      img: "/images/1.jpeg",
      descp:"We have built a software programme that can be used for increasing efficiency in managing a hotel.  it allows the admin on keeping the track record of the staff and allows the staff on managing the hotel and dealing with the customers staying.",
      
    },
    {
      title: "TRAVEL AGENCY WEBSITE",
      img: "/images/2.jpg",
      descp:"The Venom Website is a web based application. The main purpose of Venom is to provide a convenient way for a customer to  flight for tour purposes. The objective of this project is to develop a system that automates the processes and activities of a travel agency.",
    }
  ]);
  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="title">
          <h3>Featured Projects</h3>
          <a
            href="https://github.com/jia-codes"
            target="_blank"
            className="btn"
            rel="noreferrer"
          >
            View All
          </a>
        </div>
        <div className="projects-wrapper">
          {projects.map((project, i) => (
            <div className="project" key={i}>
              <div className="img-container">
                <img src={project.img} alt={project.title} />
              </div>
              <div className="description">
                <h4>{project.title}</h4>
              </div>
              <div className="decp">
                <p>{project.descp}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;