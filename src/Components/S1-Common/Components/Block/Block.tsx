import React, {DetailedHTMLProps, HTMLAttributes} from "react";
import Sc from "../../Styles/CommonStyles.module.css"

type DefaultPropsType = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export const Block: React.FC<DefaultPropsType> = ({children, ...restProps}) => {
    return (
        <div className={Sc.block_container} {...restProps}>
            {children}
        </div>
    )
}