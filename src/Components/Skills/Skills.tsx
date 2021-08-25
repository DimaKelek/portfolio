import React from "react";
import S from "./Skills.module.css"
import Sc from "./Containers.module.css"
import {SkillsItem} from "./SkillItem/SkillsItem";
import {useMobXStore} from "../../Store/Context";

export const Skills: React.FC = () => {
    const {skills} = useMobXStore()
    const skillsItems = skills.map(s => <SkillsItem key={s.id} title={s.title} icon={s.icon} text={s.text}/>)
    return (
        <div id="ABOUT" className={Sc.skills_container}>
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