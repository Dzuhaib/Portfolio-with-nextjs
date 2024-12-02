import React from "react";
import styles from './styles.module.css'

const projects = [
  {
    id: 1,
    title: "Project One",
    description: "A description of project one. This is a brief overview of what the project does.",
    link: "#",
    image: "/project/01.jpg",
  },
  {
    id: 2,
    title: "Project Two",
    description: "A description of project two. This is a brief overview of what the project does.",
    link: "#",
    image: "/project/02.jpg",
  },
  {
    id: 3,
    title: "Project Three",
    description: "A description of project three. This is a brief overview of what the project does.",
    link: "#",
    image: "/project/03.jpg",
  },
  {
    id: 4,
    title: "Project Four",
    description: "A description of project four. This is a brief overview of what the project does.",
    link: "#",
    image: "/project/04.jpg",
  },
  {
    id: 5,
    title: "Project Five",
    description: "A description of project five. This is a brief overview of what the project does.",
    link: "#",
    image: "/project/05.jpg",
  },
  {
    id: 6,
    title: "Project Six",
    description: "A description of project six. This is a brief overview of what the project does.",
    link: "#",
    image: "/project/06.jpg",
  },
];

const Projects = () => {
  return (
    <>
    <div className=" bg-gray-100 py-10 px-5">
      <h1 className="text-4xl font-bold text-orange-600 text-center items-center mb-8">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <h2 className="text-xl font-semibold mb-2 group-hover:text-orange-600">{project.title}</h2>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <button className='bg-orange-600 text-white px-4 border-2 border-x-orange-600 delay-350 hover:border-y-orange-600 py-2 ' >Download CV</button>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Projects;
