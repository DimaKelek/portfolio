import React from "react";
import S from "./MyForm.module.css";
import {useFormik} from "formik";
import {MyTextInput} from "../../S1-Common/Components/MyTextInput/MyTextInput";
import {MyButton} from "../../S1-Common/Components/MyButton/MyButton";
import {Preloader} from "../../S1-Common/Components/Preloader/Preloader";
import {observer} from "mobx-react-lite";
import {useMobXStore} from "../../../Store/Context";

type FormErrors = {
    name?: string
    email?: string
    subject?: string
    message?: string
}

export const MyForm: React.FC = observer(() => {
    const {status, error, sendMessage} = useMobXStore()

    const contactForm = useFormik({
        initialValues: {
            name: "",
            email: "",
            subject: "",
            message: ""
        },
        validate: values => {
            const errors: FormErrors = {}
            if (!values.name) {
                errors.name = "Name is required!"
            }
            if (!values.email) {
                errors.email = "Email is required!"
            }
            if (!values.subject) {
                errors.subject = "Subject is required!"
            }
            if (!values.message) {
                errors.message = "Message is required!"
            }
            return errors
        },
        onSubmit: values => {
            sendMessage(values)
            contactForm.resetForm()
        }
    })

    const onSendClick = () => {
        const {name, email, subject} = contactForm.values
        if (name === "" || email === "" || subject === "") {
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
                <MyTextInput
                    variant={"dark"}
                    placeholder={`Your name`}
                    {...contactForm.getFieldProps("name")}
                    error={contactForm.touched.name ? contactForm.errors.name : null}
                />
                <MyTextInput
                    variant={"dark"}
                    placeholder={`Your email`}
                    {...contactForm.getFieldProps("email")}
                    error={contactForm.touched.email ? contactForm.errors.email : null}
                />
            </div>
            <MyTextInput
                variant={"dark"}
                placeholder={`Your subject`}
                {...contactForm.getFieldProps("subject")}
                error={contactForm.touched.subject ? contactForm.errors.subject : null}
            />
            <div className={`${S.form_group} ${S.message}`}>
                <textarea
                    placeholder={`Your message`}
                    {...contactForm.getFieldProps("message")}
                />
            </div>
            <div className={`${S.form_group} ${S.button}`}>
                {status === "loading"
                    ? <Preloader/>
                    : <MyButton onClick={onSendClick} type={"submit"}>Send Message</MyButton>
                }
                {status === "success" ? <h3 style={{color: "#14aa6b"}}>&#9989; Your message has been send</h3> : ""}
                {error && <h3 style={{color: "#d41c50"}}>&#10060; Error: {error}</h3>}
            </div>
        </form>
    )
})