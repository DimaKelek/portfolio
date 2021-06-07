import React from "react";
import S from "./Main.module.css"
import {SocialNetworks} from "../SocialNetworks/SocialNetworks";

export function Main() {
    return (
        <div className={S.main}>
            <div className={S.main_container}>
                <div className={S.discription}>
                    <span className={S.hello}>Hello, I'm</span>
                    <h1>Dmitry Shelestov</h1>
                    <span className={S.job}>Front-end developer</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est excepturi molestiae veniam! Ab aperiam culpa cum deleniti ducimus, earum est excepturi impedit minima natus necessitatibus obcaecati, placeat quam, quisquam voluptatem!</p>
                    <SocialNetworks/>
                </div>
                <div className={S.photo}>

                </div>
            </div>
            <div className={S.space}/>
        </div>
    );
}