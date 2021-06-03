import React from "react";
import S from "./Header.module.css"
import {Nav} from "./Nav/Nav";

export function Header() {
    return (
        <div className={S.header}>
            <div className={S.logo}>
                <img src="https://goo.su/5Rgg" alt="logo"/>
                <span className={S.name}>KELEK</span>
            </div>
            <Nav/>
        </div>
    );
}