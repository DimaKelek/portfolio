import React from "react";
import S from "./Skills.module.css"
import {SkillsItem} from "./SkillItem/SkillsItem";
import {skills} from "../data";


export function Skills() {
    const skillsItems = skills.map((s, i) => <SkillsItem key={i} title={s.title} icon={s.icon} text={s.text}/> )
    return (
        <div className={S.skills}>
            <div className={S.skills_container}>
                <div className={S.title}>
                    <span>About me</span>
                    <h2>Skills</h2>
                    <div className={S.bar}/>
                </div>
                <div className={S.skills_items}>
                    {skillsItems}
                </div>
            </div>
        </div>
    );
}