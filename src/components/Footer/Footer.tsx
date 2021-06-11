import React from "react";
import S from "./Footer.module.css"
import logo2 from "../../common/others/logo2.jpg";
import {SocialNetworks} from "../SocialNetworks/SocialNetworks";
import {contacts} from "../data";

export function Footer() {
    const contactItems = contacts.map((c, i) => {
        return(
            <div key={i} className={S.contactItem}>
                <div className={S.contactIcon}>
                    <img src={c.icon} alt="contact"/>
                </div>
                <div className={S.data}>
                    <h4 className={S.contact_type}>{c.title}</h4>
                    <span className={S.contact_data}>{c.contactData}</span>
                </div>
            </div>
        )
    })
    return (
        <div className={S.footer}>
            <div className={S.footer_container}>
                <div className={S.content_box}>
                    <div className={S.info_block}>
                        <img className={S.logo} src={logo2} alt="logo"/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At deserunt
                            dolores, inventore molestiae nisi odio officiis provident soluta tempore vel?</p>
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