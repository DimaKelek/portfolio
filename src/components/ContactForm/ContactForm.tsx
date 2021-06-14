import React from "react";
import S from "./ContactForm.module.css"
import Sc from "./Containers.module.css";
import {MyButton} from "./MyButton/MyButton";
import chakres from "../../common/others/chakres.png"
import iconReact from "../../common/icons/react.svg"
import iconTS from "../../common/icons/typescript.svg"
import iconRedux from "../../common/icons/redux.svg"
import iconHTML from "../../common/icons/html5.svg"
import iconCSS from "../../common/icons/css3.svg"
import iconJest from "../../common/icons/jest.png"

export function ContactForm() {
    return (
        <div id="CONTACTS" className={Sc.contactForm}>
            <div className={`${Sc.container} ${S.title}`}>
                <span>let's talk</span>
                <h2>Get in Touch</h2>
            </div>
            <div className={Sc.form_container}>
                <div className={Sc.image_container}>
                    <div className={Sc.chakres_box}>
                        <img className={S.chakres} src={chakres} alt="chakres"/>
                        <div className={S.react}><img src={iconReact} alt="React"/></div>
                        <div className={S.ts}><img src={iconTS} alt="TS"/></div>
                        <div className={S.redux}><img src={iconRedux} alt="Redux"/></div>
                        <div className={S.html5}><img src={iconHTML} alt="HTML"/></div>
                        <div className={S.css3}><img src={iconCSS} alt="CSS"/></div>
                        <div className={S.jest}><img src={iconJest} alt="Jest"/></div>
                    </div>
                </div>
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