import React from "react";
import S from "./Footer.module.css"
import logo2 from "../../Common/others/logo2.jpg";
import {SocialNetworks} from "../CommonComponents/SocialNetworks/SocialNetworks";
import {Contact} from "./Contact/Contact";
import {useMobXStore} from "../../Store/Context";

export function Footer() {
    const {contacts} = useMobXStore()
    const contactItems = contacts.map(c => {
        return <Contact key={c.id} icon={c.icon} title={c.title} contactData={c.contactData}/>
    })

    return (
        <div className={S.footer}>
            <div className={S.footer_container}>
                <div className={S.content_box}>
                    <div className={S.info_block}>
                        <img className={S.logo} src={logo2} alt="logo"/>
                        <p>I'm Front-End developer with experience in creating SPA using React, Redux, Typescript,
                            Javascript, HTML, CSS. My free time is dedicated to Codewars,
                            programming tutorials, and becoming familiar with NodeJS, because, in the future,
                            I see myself as a Full Stack Developer.</p>
                        <div className={S.socialNetwork_box}><SocialNetworks/></div>
                    </div>
                    <div className={S.contacts_block}>
                        <div className={S.title}>
                            <h3>Contacts</h3>
                        </div>
                        <div className={S.contactItems}>
                            {contactItems}
                        </div>
                    </div>
                </div>
            </div>
            <div className={S.copyright}>
                <div className={S.copyright_container}>@Copyright 2021 KELEK. All Rights Reserved</div>
            </div>
        </div>
    )
}

