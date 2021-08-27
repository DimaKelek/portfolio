import React from "react";
import S from "../SocialNetworks.module.css";

type LinkProps = {
    link: string
    image: string
}

export const Link: React.FC<LinkProps> = ({link, image}) => {
    return (
        <a href={link} target="_blank" rel="noreferrer">
            <div className={S.icon_box}>
                <div className={S.icon}><img src={image} alt={link}/></div>
            </div>
        </a>
    )
}