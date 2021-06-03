import React from "react";
import S from "./Nav.module.css"
import {nav} from "../../data";

export function Nav() {
    const navItems = nav.map((item, i) => {
        return (
            <a key={i} href={item.href} className={S.button}>
                <div>
                    {item.title}
                    <span className={S.line}/>
                </div>
            </a>
        )
    })
    return (
        <div className={S.nav}>
            {navItems}
        </div>
    );
}