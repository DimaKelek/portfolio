import React from "react";
import S from "./Skills.module.css"
import {SkillsItem} from "./SkillItem/SkillsItem";
import {useMobXStore} from "../../Store/Context";
import {BlockHeader} from "../S1-Common/Components/BlockHeader/BlockHeader";
import {Block} from "../S1-Common/Components/Block/Block";

export const Skills: React.FC = () => {
    const {skills} = useMobXStore()
    const skillsItems = skills.map(s => <SkillsItem key={s.id} title={s.title} icon={s.icon} text={s.text}/>)
    return (
        <Block id="ABOUT">
            <BlockHeader title={"About Me"} sectionName={"Skills"}/>
            <div className={S.skills_items}>{skillsItems}</div>
        </Block>
    );
}