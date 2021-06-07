import React from "react";
import S from "./SkillsItem.module.css";
import triangle from "../../../common/others/triangle.png"

type SkillItemPT = {
    title: string
    icon: string
    text: string
}

export function SkillsItem(props: SkillItemPT) {
    return (
        <div className={S.item}>
            <div className={S.skill}>
                <div className={S.icon}>
                    <img src={props.icon} alt="icon"/>
                </div>
                <h3>{props.title}</h3>
                <p>{props.text}</p>
                <div className={S.triangle}>
                    <img src={triangle} alt="image"/>
                </div>
            </div>
        </div>
    );
}