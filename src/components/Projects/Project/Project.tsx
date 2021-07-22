import React from "react";
import S from "./Project.module.css"
import {ProjectType} from "../../../common/data";

type ProjectsPropsType = ProjectType

export function Project(props: ProjectsPropsType) {
    return (
        <div className={S.project}>
            <a href="https://google.com" target="_blank" rel="noreferrer">
                <div className={S.photo}>
                    <img src={props.photo} alt="projectImg"/>
                    <div className={S.button}>preview</div>
                </div>
            </a>
            <div className={S.discription}>
                <div className={S.date}>&#8986; {props.date}</div>
                <a href="https://google.com" target="_blank" rel="noreferrer"><h3>{props.title}</h3></a>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ad, aspernatur culpa dignissimos eligendi non obcaecati
                    quidem quo repellendus tenetur voluptas.</p>
                <a href="https://google.com" target="_blank" rel="noreferrer">
                    <div className={S.more}>
                        Learn More
                        <span className={S.line}/>
                    </div>
                </a>
            </div>
        </div>
    );
}