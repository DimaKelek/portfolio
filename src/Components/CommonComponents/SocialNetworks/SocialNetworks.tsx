import React from "react";
import S from "./SocialNetworks.module.css";
import {Link} from "./Link/Link";
import {useMobXStore} from "../../../Store/Context";

export const SocialNetworks: React.FC = () => {
    const {links} = useMobXStore()
    const linkItems = links.map(l => <Link key={l.id} link={l.link} image={l.image}/>)
    return <div className={S.icons}>{linkItems}</div>
}