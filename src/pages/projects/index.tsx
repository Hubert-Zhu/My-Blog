import React from "react"
import { Link } from "gatsby"

import Navbar from "../../components/Navbar"
import IconTitle from "../../components/IconTitle"
import Footer from "../../components/Footer"

import Project from "../../images/projects/project.svg"
import project1 from "../../images/projects/mini-ui-library/project1.jpg"
import project2 from "../../images/projects/my-blog/project2.png"
import project3 from "../../images/projects/go-chat/project3.jpg"

import "./style.scss"

interface Project{
  link: string
  title: string
  type: string
  description: string
  tags: Array<string>
  to: string
}


const projects: Array<Project> = [
  {
    link: project1,
    title: "Mini UI Library",
    type: "Frontent Project",
    description: "UI Component library for React",
    tags: [
      "React",
      "Styled-components",
      "React-Spring",
      "Storybook",
      "Google Firebase",
    ],
    to: "mini-ui-library",
  },
  {
    link: project2,
    title: "Personal Blog",
    type: "Frontend Project",
    description: "Personal website based on Gatsby and GraphQL",
    tags: [
      "Gatsby",
      "GraphQL",
      "Netlify CMS",
      "Sass",
      "Typescipt",
      "Sass",
      "Responsive Design",
      "React-Spring/CSS",
    ],
    to: "my-blog",
  },
  {
    link: project3,
    title: "goChat",
    type: "Fullstack Project",
    description: "Chatting application created with Vue, Express",
    tags: ["Vue", "Express", "NodeJS", "MongoDB", "Mongoose", "Socket"],
    to: "go-chat",
  },
]

const Projects = React.memo(() => {
  return (
    <div>
      <Navbar />
      <IconTitle title="Personal Project" Icon={Project} />

      <div className="project">
        {projects.map((item, index) => (
          <div className="project__item" key={index}>
            <Link to={item.to}>
              <h2 className="project__title">{item.title}</h2>
              <img src={item.link} className="project__image" />

              <h3 className="project__type">{item.type}</h3>
              <p className="project__description">{item.description}</p>
            </Link>

            <div className="project__tags">
              {item.tags.map((item, index) => (
                <div key={index} className="project__tag">
                  #{item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  )
})

export default Projects
