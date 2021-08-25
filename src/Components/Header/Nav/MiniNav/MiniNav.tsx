import React from "react";
import S from "./MiniNav.module.css"
import { observer } from "mobx-react-lite";
import {useMobXStore} from "../../../../Store/Context";

export const MiniNav: React.FC = observer(() => {
    const {nav, setStatus} = useMobXStore()

    const navItems = nav.map(i => {
        const changeStatusHandler = () => {
            setStatus(i.id)
        }
        return (
            <a key={i.id + "mini"} href={i.href}>
                <div className={`${S.menuItem} ${S[i.image]}`} onClick={changeStatusHandler}>
                    <div className={`${S.babel} ${i.status && S.active}`}/>
                    <img src={i.image} alt={i.href}/>
                </div>
            </a>
        )
    })

    return <div className={`${S.miniNav} `}>{navItems}</div>
})