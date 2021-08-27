import React, {useState} from "react";
import S from "./Header.module.css"
import Sc from "./Containers.module.css"
import {Nav} from "./Nav/Nav";
import logo from "../S1-Common/Images/logo.jpg";

export function Header() {
    const [collapsed, setCollapsed] = useState<boolean>(true)
    return (
        <div className={S.header}>
            <div className={`${Sc.header_container} ${!collapsed && Sc.menu_collapsed}`}>
                <div className={Sc.logo_container}>
                    <img className={S.logo} src={logo} alt="logo"/>
                </div>
                <Nav collapsed={collapsed} setCollapsed={setCollapsed}/>
            </div>
        </div>
    );
}