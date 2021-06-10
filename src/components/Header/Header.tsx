import React from "react";
import S from "./Header.module.css"
import Sc from "./Containers.module.css"
import {Nav} from "./Nav/Nav";
import logo from "../../common/others/logo.jpg";

export function Header() {
    return (
        <div className={S.header}>
            <div className={Sc.header_container}>
                <div className={Sc.logo_container}>
                    <img className={S.logo} src={logo} alt="logo"/>
                </div>
                <Nav/>
            </div>
        </div>
    );
}