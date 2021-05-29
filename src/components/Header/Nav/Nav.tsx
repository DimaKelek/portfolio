import React from "react";
import S from "./Nav.module.css"

export function Nav() {
    return (
        <div className={S.nav}>
            <a href="#">Главная</a>
            <a href="#">Мои Скиллы</a>
            <a href="#">Мои Работы</a>
            <a href="#">Контакты</a>
        </div>
    );
}