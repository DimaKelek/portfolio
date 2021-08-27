import React from "react";
import S from "./Nav.module.css"
import Sc from "../Containers.module.css"
import {useMobXStore} from "../../../Store/Context";

type NavProps = {
    collapsed: boolean
    setCollapsed: (collapsed: boolean) => void
}

export const Nav: React.FC<NavProps> = ({collapsed, setCollapsed}) => {
    const {nav} = useMobXStore()
    const navItems = nav.map(i => <a key={i.id} className={S.link} href={i.href}>{i.title}</a>)

    const collapsedMenu = () => {
        setCollapsed(!collapsed)
    }
    return (
        <div className={`${Sc.nav_container} `}>
            <div className={Sc.navItems_container}>
                {navItems}
            </div>
            <div className={`${Sc.menu_container} ${S.menu}`} onClick={collapsedMenu}>
                <div>&#9776;</div>
            </div>
        </div>
    );
}