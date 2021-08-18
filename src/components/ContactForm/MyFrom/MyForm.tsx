import React, {FormEventHandler} from "react";
import emailjs from 'emailjs-com';
import S from "./MyForm.module.css";
import {MyButton} from "../../../common/MyButton/MyButton";
import {submitFormData} from "../../../common/utils/data";
import {MyTextInput} from "../../../common/MyTextInput/MyTextInput";
import {useFormik} from "formik";

type FormErrors = {
    name?: string
    email?: string
    subject?: string
    message?: string
}

export const MyForm: React.FC<any> = props => {

    const contactForm = useFormik({
        initialValues: {
            name: "",
            email: "",
            subject: "",
            message: ""
        },
        validate: values => {
            const errors: FormErrors = {}
            if(!values.name) {
                errors.name = "Name is required!"
            }
            if(!values.email) {
                errors.email = "Email is required!"
            }
            if(!values.subject) {
                errors.subject = "Subject is required!"
            }
            if(!values.message) {
                errors.message = "Message is required!"
            }
            return errors
        },
        onSubmit: values => {

        }
    })
    // const sendMessage: FormEventHandler<HTMLFormElement> = e => {
    //     e.preventDefault()
    //     emailjs.sendForm(submitFormData.serverID, submitFormData.templateID, e.currentTarget, submitFormData.apiKey)
    //         .then(result => {
    //             console.log(result.text);
    //         }).catch(error => {
    //             console.log(error.text);
    //         })
    //     e.currentTarget.reset()
    // }
    const createTextField = (nameField: keyof FormErrors, fieldType: "input" | "textarea") => {
        if (fieldType === "input") {
            return (
                <MyTextInput
                    variant={"dark"}
                    placeholder={`Your ${nameField}`}
                    {...contactForm.getFieldProps(nameField)}
                    error={contactForm.touched[nameField] ? contactForm.errors[nameField] : null}
                />
            )
        } else if (fieldType === "textarea") {
            return (
                <div className={`${S.form_group} ${S[nameField]}`}>
                    <textarea
                        placeholder={`Your ${nameField}`}
                        name={nameField}
                    />
                </div>
            )
        }
    }

    const onSendClick = () => {
        const {name, email, subject} = contactForm.values
        if( name === "" || email === "" || subject === "") {
            contactForm.errors = {
                email: "Email is required!",
                name: "Name is required!",
                subject: "Subject is required!"
            }
        }
    }

    return (
        <form onSubmit={contactForm.handleSubmit}>
            <div className={S.name_email_container}>
                {createTextField("name", "input")}
                {createTextField("email", "input")}
            </div>
            {createTextField("subject", "input")}
            {createTextField("message", "textarea")}
            <div className={`${S.form_group} ${S.button}`}>
                <MyButton onClick={onSendClick} type={"submit"}>Send Message</MyButton>
            </div>
        </form>
    )
}