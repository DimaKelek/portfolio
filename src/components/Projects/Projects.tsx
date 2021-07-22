import React from "react";
import S from "./Projects.module.css"
import Sc from "./Containers.module.css"
import {Project} from "./Project/Project";
import {projects} from "../../common/utils/data"

export const Projects = () => {
    const projectItems = projects.map((p, i) => {
        return (
            <Project
                key={i}
                date={p.date}
                title={p.title}
                discription={p.discription}
                link={p.link}
                preview={p.preview}
                photo={p.photo}
            />
        )
    })
    return (
        <div id="PROJECTS" className={Sc.projects}>
            <div className={`${Sc.container} ${S.title}`}>
                <span>COMPLETED PROJECTS</span>
                <h2>Recent Projects</h2>
            </div>
            <div className={Sc.projects_container}>{projectItems}</div>
        </div>
    );
}