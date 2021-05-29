import React from "react";
import S from "./Header.module.css"
import {Nav} from "./Nav/Nav";

export function Header() {
    return (
        <div className={S.header}>
            <Nav/>
        </div>
    );
}