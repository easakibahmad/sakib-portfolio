import React from "react";
import Project from "../project/Project";
import project from "../../assets/images/project.jpeg";
import book from "../../assets/images/book.png";
import adventurer from "../../assets/images/adventurer.png";
import portable from "../../assets/images/portable.png";

const Projects = () => {
  const projectData = [
    {
      id: 1,
      name: "Book Universe",
      shortDescription:
        "Using ReactJS, NodeJS, MongoDB and other relevant technologies for web development, I built this site to sell used books.",
      liveSite: "https://book-universe-63ca2.web.app/",
      img: book,
    },
    {
      id: 2,
      name: "The Adventurer",
      shortDescription:
        "I built this simple site using ReactJS to give travelers a basic idea of the place before their trip.",
      liveSite: "https://the-adventurer-a6e17.firebaseapp.com/",
      img: adventurer,
    },
    {
      id: 3,
      name: "Portable Learning",
      shortDescription:
        "Online based platform where I have shown some online courses and students can navigate the course as per their choice. Certain courses can be shown on separate routes if desired",
      liveSite: "https://portable-learning.web.app/",
      img: portable,
    },
  ];
  return (
    <div
      id="projects"
      style={{ backgroundImage: `url(${project})`, fontFamily: "Montserrat" }}
      data-theme="black"
      className="p-12 px-12"
    >
      <h1 className="text-center text-2xl mb-6">My Projects</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        {projectData.map((item) => (
          <Project key={item.id} item={item}></Project>
        ))}
      </div>
    </div>
  );
};

export default Projects;
