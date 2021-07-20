import React from "react";
import S from "./ContactForm.module.css"
import Sc from "./Containers.module.css";
import {MyButton} from "./MyButton/MyButton";
import {FrontEndMan} from "./FrontEndMan/FrontEndMan";

export function ContactForm() {
    return (
        <div id="CONTACTS" className={Sc.contactForm}>
            <div className={`${Sc.container} ${S.title}`}>
                <span>let's talk</span>
                <h2>Get in Touch</h2>
            </div>
            <div className={Sc.form_container}>
                <FrontEndMan/>
                <form>
                    <div className={Sc.namePLUSemail_container}>
                        <div className={`${S.form_group} ${S.name}`}>
                            <input type="text" placeholder="Your name"/>
                        </div>
                        <div className={`${S.form_group} ${S.email}`}>
                            <input type="text" placeholder="Your email"/>
                        </div>
                    </div>
                    <div className={`${S.form_group} ${S.subject}`}>
                        <input type="text" placeholder="Your subject"/>
                    </div>
                    <div className={`${S.form_group} ${S.message}`}>
                        <textarea placeholder="Your message"/>
                    </div>
                    <div className={`${S.form_group} ${S.button}`}>
                    <MyButton>Send Message</MyButton>
                </div>
            </form>
            </div>
        </div>
    )
}

