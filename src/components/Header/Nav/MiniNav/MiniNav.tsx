import React from "react";
import S from "./MiniNav.module.css"
import home from "../../../../common/icons/home.svg"
import about from "../../../../common/icons/about.svg"
import projects from "../../../../common/icons/projects.png"
import contacts from "../../../../common/icons/contacts.svg"

export function MiniNav() {
    return (
        <div className={`${S.miniNav} `}>
            <a href="#HOME">
                <div className={`${S.menuItem} ${S.home}`}>
                    <img src={home} alt="home"/>
                </div>
            </a>
            <a href="#ABOUT">
                <div className={`${S.menuItem} ${S.about}`}>
                    <img src={about} alt="about"/>
                </div>
            </a>
            <a href="#PROJECTS">
                <div className={`${S.menuItem} ${S.projects}`}>
                    <img src={projects} alt="projects"/>
                </div>
            </a>
            <a href="#CONTACTS">
                <div className={`${S.menuItem} ${S.contacts}`}>
                    <img src={contacts} alt="contacts"/>
                </div>
            </a>
        </div>
    );
}