import React from "react";
import Sc from "../S1-Common/Styles/CommonStyles.module.css"
import {Project} from "./Project/Project";
import {useMobXStore} from "../../Store/Context";
import {BlockHeader} from "../S1-Common/Components/BlockHeader/BlockHeader";
import {Block} from "../S1-Common/Components/Block/Block";

export const Projects = () => {
    const {projects} = useMobXStore()
    const projectItems = projects.map(p => {
        return (
            <Project
                key={p.id}
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
        <Block id="PROJECTS">
            <BlockHeader title={"Completed projects"} sectionName={"Recent projects"}/>
            <div className={Sc.content_container}>{projectItems}</div>
        </Block>
    );
}