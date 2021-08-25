import React from "react";
import S from "../Footer.module.css";

type ContactProps = {
    icon: string
    title: string
    contactData: string
}
export const Contact: React.FC<ContactProps> = ({contactData, icon, title}) => {
    return (
        <div className={S.contactItem}>
            <div className={S.contactIcon}>
                <img src={icon} alt="contact"/>
            </div>
            <div className={S.data}>
                <h4 className={S.contact_type}>{title}</h4>
                <span className={S.contact_data}>{contactData}</span>
            </div>
        </div>
    )
}