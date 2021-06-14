import React from "react";
import S from "./Main.module.css"
import Sc from "./Containers.module.css"
import {SocialNetworks} from "../SocialNetworks/SocialNetworks";
import photo from "../../common/others/photo.jpg"

export function Main() {
    return (
        <div id="HOME" className={S.main}>
            <div className={Sc.main_container}>
                <div className={`${S.discription} ${Sc.discription_container}`}>
                    <span className={S.hello}>Hello, I'm</span>
                    <h1>Dmitry Shelestov</h1>
                    <span className={S.job}>Front-end developer</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est excepturi molestiae veniam! Ab aperiam culpa cum deleniti ducimus, earum est excepturi impedit minima natus necessitatibus obcaecati, placeat quam, quisquam voluptatem!</p>
                    <div className={Sc.socialNetworks_container}><SocialNetworks/></div>
                </div>
                <div className={Sc.photo_container}>
                    <img className={S.photo} src={photo} alt="MyPhoto"/>
                </div>
            </div>

        </div>
    );
}