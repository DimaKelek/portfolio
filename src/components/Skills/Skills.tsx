import React, {useState} from "react";
import S from "./Skills.module.css"
import {SkillsItem} from "./SkillItem/SkillsItem";

type SkillsType = {
    title: string
    icon: string
}
export function Skills() {
    const[skills, setSkills] = useState<Array<SkillsType>>([
        {title: "TypeScript", icon: "https://goo.su/5reG"},
        {title: "React", icon: "https://goo.su/5rEO"},
        {title: "Redux", icon: "https://goo.su/5reR"},
        {title: "HTML", icon: "https://goo.su/5Res"},
        {title: "CSS", icon: "https://goo.su/5Ret"},
        {title: "Jest", icon: "https://goo.su/5REU"},
    ])
    const skillsItems = skills.map(s => <SkillsItem title={s.title} icon={s.icon}/> )
    return (
        <div className={S.skills}>
            <div className={S.skills_container}>
                <div className={S.title}>
                    <h2 >Мои Скилы</h2>
                </div>
                <div className={S.skills_items}>
                    {skillsItems}
                </div>
            </div>
        </div>
    );
}