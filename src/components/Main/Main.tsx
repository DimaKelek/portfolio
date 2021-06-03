import React from "react";
import S from "./Main.module.css"

export function Main() {
    return (
        <div className={S.main}>
            <div className={S.main_container}>
                <div className={S.discription}>
                    <span>Hello, I'm</span>
                    <h1>Dmitry Shelestov</h1>
                    <span>Front-end developer</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, nesciunt.</p>
                    <div className={S.icons}>
                        <a href="https://vk.com/id268131358" target="_blank">
                            <div className={S.icon}>
                                <div className={S.title}>ВК</div>
                            </div>
                        </a>
                        <a href="https://www.instagram.com/___kelek___/" target="_blank">
                            <div className={S.icon}>
                                <div className={S.title}>In</div>
                            </div>
                        </a>
                        <a href="https://t.me/KelekOfficial" target="_blank">
                            <div className={S.icon}>
                                <div className={S.title}>Tg</div>
                            </div>
                        </a>
                        <a href="https://google.com" target="_blank">
                            <div className={S.icon}>
                                <div className={S.title}>Ln</div>
                            </div>
                        </a>
                    </div>
                </div>
                <div className={S.photo}>

                </div>
            </div>
        </div>
    );
}