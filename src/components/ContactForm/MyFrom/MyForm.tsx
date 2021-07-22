import React, {FormEventHandler} from "react";
import emailjs from 'emailjs-com';
import S from "./MyForm.module.css";
import {MyButton} from "../../../common/MyButton/MyButton";

type FormikErrorType = {
    name?: string
    email?: string
    subject?: string
    message?: string
}

export const MyForm: React.FC<any> = props => {

    const sendMessage: FormEventHandler<HTMLFormElement> = e => {
        e.preventDefault()
        emailjs.sendForm("service_kqtzcqb", "template_s2n0xe4",
            e.currentTarget, "user_yTe6Z7ffvqPt79BSoz5uX")
            .then(result => {
                console.log(result.text);
            }).catch(error => {
                console.log(error.text);
            })
        e.currentTarget.reset()
    }
    const createTextField = (nameField: string, fieldType: "input" | "textarea") => {
        if (fieldType === "input") {
            return (
                <div className={`${S.form_group} ${S[nameField]}`}>
                    <input
                        type="text"
                        placeholder={"Your " + nameField}
                        name={nameField}
                    />
                </div>
            )
        } else if (fieldType === "textarea") {
            return (
                <div className={`${S.form_group} ${S[nameField]}`}>
                    <textarea
                        placeholder={"Your " + nameField}
                        name={nameField}
                    />
                </div>
            )
        }
    }

    return (
        <form onSubmit={sendMessage}>
            <div className={S.name_email_container}>
                {createTextField("name", "input")}
                {createTextField("email", "input")}
            </div>
            {createTextField("subject", "input")}
            {createTextField("message", "textarea")}
            <div className={`${S.form_group} ${S.button}`}>
                <MyButton>Send Message</MyButton>
            </div>
        </form>
    )
}