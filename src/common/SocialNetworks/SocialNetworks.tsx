import React from "react";
import S from "./SocialNetworks.module.css";
import telegram from "../icons/telegram.svg"
import instagram from "../icons/instagram.svg"
import github from "../icons/github.svg"
import linkedIn from "../icons/linkedin.svg"
import vk from "../icons/vk.svg"

export function SocialNetworks() {
    return (
        <div className={S.icons}>
            <a href="https://t.me/KelekOfficial" target="_blank" rel="noreferrer">
                <div className={S.icon_box}>
                    <div className={S.icon}><img src={telegram} alt="telegram"/></div>
                </div>
            </a>
            <a href="" target="_blank" rel="noreferrer">
                <div className={S.icon_box}>
                    <div className={S.icon}><img src={github} alt="github"/></div>
                </div>
            </a>
            <a href="https://www.instagram.com/___kelek___/" target="_blank" rel="noreferrer">
                <div className={S.icon_box}>
                    <div className={S.icon}><img src={instagram} alt="instagram"/></div>
                </div>
            </a>
            <a href="https://vk.com/id268131358" target="_blank" rel="noreferrer">
                <div className={S.icon_box}>
                    <div className={S.icon}><img src={vk} alt="vk"/></div>
                </div>
            </a>
            <a href="" target="_blank" rel="noreferrer">
                <div className={S.icon_box}>
                    <div className={S.icon}><img src={linkedIn} alt="linkedIn"/></div>
                </div>
            </a>
        </div>
    );
}