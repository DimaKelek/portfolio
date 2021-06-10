import React from "react";
import S from "./Nav.module.css"
import Sc from "../Containers.module.css"
import {nav} from "../../data";

type NavPropsType = {
    collapsed: boolean
    setCollapsed: (collapsed: boolean) => void
}

export function Nav(props: NavPropsType) {

    const navItems = nav.map((item, i) => {
        return (
            <a key={i} className={S.link} href={item.href}>{item.title}</a>
        )
    })
    const collapsedMenu = () => {
        props.setCollapsed(!props.collapsed)
    }
    return (
        <div className={`${Sc.nav_container} `}>
            <div className={Sc.navItems_container}>
                {navItems}
            </div>
            <div
                className={`${Sc.menu_container} ${S.menu}`}
                onClick={collapsedMenu}
            >
                <div>&#9776;</div>
            </div>
        </div>
    );
}