import React from "react";
import S from "./Project.module.css"
import {ProjectType} from "../../../common/utils/data";

type ProjectsPropsType = ProjectType

export const Project: React.FC<ProjectsPropsType> = props => {
    const {preview, photo, link, title, date, discription} = props

    return (
        <div className={S.project}>
            <a href={preview} target="_blank" rel="noreferrer">
                <div className={S.photo}>
                    <img src={photo} alt="projectImg"/>
                    <div className={S.button}>preview</div>
                </div>
            </a>
            <div className={S.discription}>
                <div className={S.date}>&#8986; {date}</div>
                <a href={link} target="_blank" rel="noreferrer"><h3>{title}</h3></a>
                <p>{discription}</p>
                <a href={link} target="_blank" rel="noreferrer">
                    <div className={S.more}>
                        Learn More
                        <span className={S.line}/>
                    </div>
                </a>
            </div>
        </div>
    );
}