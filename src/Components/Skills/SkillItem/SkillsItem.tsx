import React from "react";
import S from "./SkillsItem.module.css";
import triangle from "../../../Common/others/triangle.png"

type SkillItemProps = {
    title: string
    icon: string
    text: string
}

export const SkillsItem: React.FC<SkillItemProps> = ({icon, title, text}) => {
    return (
        <div className={S.item}>
            <div className={S.skill}>
                <div className={S.icon}>
                    <img src={icon} alt="skillIcon"/>
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
                <div className={S.triangle}>
                    <div><img src={triangle} alt="triangle"/></div>
                </div>
            </div>
        </div>
    );
}