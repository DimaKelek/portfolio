import React from "react";
import S from "./FrontEndMan.module.css";
import chakres from "../../S1-Common/Images/chakres.png";
import iconReact from "../../S1-Common/Icons/react.svg";
import iconTS from "../../S1-Common/Icons/typescript.svg";
import iconRedux from "../../S1-Common/Icons/redux.svg";
import iconHTML from "../../S1-Common/Icons/html5.svg";
import iconCSS from "../../S1-Common/Icons/css3.svg";
import iconJest from "../../S1-Common/Icons/jest.png";

export const FrontEndMan: React.FC<any> = props => {
    return (
        <div className={S.image_container}>
            <div className={S.chakres_box}>
                <img className={S.chakres} src={chakres} alt="chakres"/>
                <div className={S.react}><img src={iconReact} alt="React"/></div>
                <div className={S.ts}><img src={iconTS} alt="TS"/></div>
                <div className={S.redux}><img src={iconRedux} alt="Redux"/></div>
                <div className={S.html5}><img src={iconHTML} alt="HTML"/></div>
                <div className={S.css3}><img src={iconCSS} alt="CSS"/></div>
                <div className={S.jest}><img src={iconJest} alt="Jest"/></div>
            </div>
        </div>
    )
}