import React from "react";
import S from "./ContactForm.module.css"
import Sc from "./Containers.module.css";
import {FrontEndMan} from "./FrontEndMan/FrontEndMan";
import {MyForm} from "./MyFrom/MyForm";

export function ContactForm() {
    return (
        <div id="CONTACTS" className={Sc.contactForm}>
            <div className={`${Sc.container} ${S.title}`}>
                <span>let's talk</span>
                <h2>Get in Touch</h2>
            </div>
            <div className={Sc.form_container}>
                <FrontEndMan/>
                <MyForm/>
            </div>
        </div>
    )
}

