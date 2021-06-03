import React from "react";
import S from "./SkillsItem.module.css";

type SkillItemPT = {
    title: string
    icon: string
}

export function SkillsItem(props: SkillItemPT) {
    return (
        <div className={S.item}>
            <div className={S.skill}>
                <div className={S.icon}>
                    <img src={props.icon} alt="icon"/>
                </div>
                <h3>{props.title}</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Dignissimos iste quo sunt. Ad asperiores
                    beatae consequatur dicta repellat tempore unde.</p>
            </div>
        </div>
    );
}