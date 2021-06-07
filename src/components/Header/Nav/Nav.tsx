import React from "react";
import S from "./Nav.module.css"
import {nav} from "../../data";
import logo from "../../../common/others/logo.jpg"

export function Nav() {
    const navItems = nav.map((item, i) => {
        return (
            <div className={S.link}>
                <a key={i} href={item.href}>{item.title}</a>
            </div>
        )
    })
    return (
        <div className={S.nav}>
            <div className={S.logo}>
                <img src={logo} alt="logo"/>
            </div>
            <div className={S.navItems}>
                {navItems}
            </div>
        </div>
    );
}