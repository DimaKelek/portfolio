import React from "react";
import S from "./Main.module.css"

export function Main() {
    return (
        <div className={S.main}>
            <div className={S.container}>
                <div className={S.discription}>
                    <span>Hello, I'm</span>
                    <h1>Dmitry Shelestov</h1>
                    <span>Front-end developer</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, nesciunt.</p>
                    <div className={S.icons}>
                        <div className={S.icon}>ВК</div>
                        <div className={S.icon}>In</div>
                        <div className={S.icon}>T</div>
                        <div className={S.icon}>Ln</div>
                    </div>
                </div>
                <div className={S.photo}>

                </div>
            </div>
        </div>
    );
}