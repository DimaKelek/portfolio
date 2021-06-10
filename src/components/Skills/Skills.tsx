import React from "react";
import S from "./Skills.module.css"
import Sc from "./Containers.module.css"
import {SkillsItem} from "./SkillItem/SkillsItem";
import {skills} from "../data";


export function Skills() {
    const skillsItems = skills.map((s, i) => <SkillsItem key={i} title={s.title} icon={s.icon} text={s.text}/>)
    return (
        <div className={Sc.skills_container}>
            <div className={`${Sc.container} ${S.title}`}>
                <span>About me</span>
                <h2>Skills</h2>
            </div>
            <div className={`${Sc.container} ${S.skills}`}>
                <div className={Sc.skills_items}>
                    {skillsItems}
                </div>
            </div>
        </div>
    );
}