import React from "react";
import S from "./BlockHeader.module.css";

type BlockHeaderProps = {
    sectionName?: string
    title: string
}

export const BlockHeader: React.FC<BlockHeaderProps> = ({title, sectionName}) => {
    return (
        <div className={S.title}>
            <span>{title}</span>
            <h2>{sectionName}</h2>
        </div>
    )
}