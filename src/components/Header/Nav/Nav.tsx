import React from "react";
import S from "./Nav.module.css"
import Sc from "../Containers.module.css"
import {nav} from "../../data";

export function Nav() {
    const navItems = nav.map((item, i) => {
        return (
            <div key={i} className={S.link}>
                <a href={item.href}>{item.title}</a>
            </div>
        )
    })
    return (
        <div className={Sc.nav_container}>
            <div className={Sc.navItems_container}>
                {navItems}
            </div>
            <div className={Sc.menu_container}>
                <div>&#9776;</div>
            </div>
        </div>
    );
}