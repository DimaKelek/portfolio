import React from "react";
import Sc from "../S1-Common/Styles/CommonStyles.module.css"
import {FrontEndMan} from "./FrontEndMan/FrontEndMan";
import {MyForm} from "./MyFrom/MyForm";
import {BlockHeader} from "../S1-Common/Components/BlockHeader/BlockHeader";
import {Block} from "../S1-Common/Components/Block/Block";

export function ContactForm() {
    return (
        <Block id="CONTACTS">
            <BlockHeader title={"Let's talk"} sectionName={"Get in Touch"} />
            <div className={Sc.content_container}>
                <FrontEndMan />
                <MyForm />
            </div>
        </Block>
    )
}

