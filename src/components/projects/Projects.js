import React from 'react'
import "./Projects.css"
import Project from "../project/Project"

function Projects() {
    return (
        <div className="projects">
            <div className="projects__titleBackground"><div className="projects__title"><h1>Projects</h1></div></div>
            <div className="projects__container">
                <Project/>
            </div>
        </div>

    )
}

export default Projects;
