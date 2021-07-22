import React from "react";
import S from "./Main.module.css"
import Sc from "./Containers.module.css"
import {SocialNetworks} from "../../common/SocialNetworks/SocialNetworks";
import photo from "../../common/others/photo2.jpg"

export function Main() {
    return (
        <div id="HOME" className={S.main}>
            <div className={Sc.main_container}>
                <div className={`${S.discription} ${Sc.discription_container}`}>
                    <span className={S.hello}>Hello, I'm</span>
                    <h1>Dmitry Shelestov</h1>
                    <span className={S.job}>Front-end developer</span>
                    <p>I'm Front-End developer with experience in creating SPA using React, Redux, Typescript,
                        Javascript, HTML, CSS. My free time is dedicated to Codewars,
                        programming tutorials, and becoming familiar with NodeJS, because, in the future,
                        I see myself as a Full Stack Developer.</p>
                    <div className={Sc.socialNetworks_container}><SocialNetworks/></div>
                </div>
                <div className={Sc.photo_container}>
                    <img className={S.photo} src={photo} alt="MyPhoto"/>
                </div>
            </div>

        </div>
    );
}