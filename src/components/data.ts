import iconReact from "../common/icons/react.svg"
import iconTS from "../common/icons/typescript.svg"
import iconRedux from "../common/icons/redux.svg"
import iconHTML from "../common/icons/html5.svg"
import iconCSS from "../common/icons/css3.svg"
import iconJest from "../common/icons/jest.png"

import iconLocation from "../common/icons/location.png"
import iconEmail from "../common/icons/message.png"
import iconPhone from "../common/icons/phone.png"

import network from "../common/others/network.jpg"
import todolist from "../common/others/todolist.jpg"

export type SkillsType = {
    title: string
    icon: string
    text: string
}

export const skills: Array<SkillsType> = [
    {title: "TypeScript", icon: iconTS,
        text: "A programming language introduced by Microsoft in 2012 and positioned as a " +
            "web application development tool that extends JavaScript."},
    {title: "React", icon: iconReact,
        text: "An open source JavaScript library for developing user interfaces. Used to develop " +
            "single page and mobile applications. Its goal is to provide high speed, simplicity and scalability."},
    {title: "Redux", icon: iconRedux,
        text: "JavaScript library for managing application state. Used in conjunction with React or Angular. " +
            "Contains tools to simplify the transfer of data through context."},
    {title: "HTML", icon: iconHTML,
        text: "Hypertext Markup Language. It is interpreted by browsers, and then the formatted text obtained as a result " +
            "of interpretation is displayed on the screen of a computer monitor or mobile device"},
    {title: "CSS", icon: iconCSS,
        text: "CSS is used by web page creators to specify colors, fonts, styles, block placement, and other " +
            "aspects of the presentation of the appearance of these web pages."},
    {title: "Jest", icon: iconJest,
        text: "Jest is a JavaScript testing framework designed to ensure that any code runs correctly. It allows you to " +
            "write tests with an acceptable and functional API and get the results you want quickly."},
]

export type NavType = {
    title: string
    status: boolean
    href: string
}

export const nav: Array<NavType> = [
    {title: "HOME", href: "#HOME", status: true},
    {title: "ABOUT ME", href: "#ABOUT", status: false},
    {title: "PROJECTS", href: "#PROJECTS", status: false},
    {title: "CONTACTS", href: "#CONTACTS", status: false},
]

export type ProjectType = {
    date: string
    title: string
    discription: string
    link: string
    photo: string
}

export const projects: Array<ProjectType> = [
    {
        date: "May 15, 2021",
        title: "Social Network",
        discription: "",
        link: "https://github.com/DimaKelek/network",
        photo: network
    },
    {
        date: "May 15, 2021",
        title: "To do list",
        discription: "",
        link: "https://github.com/DimaKelek/todolist",
        photo: todolist
    }
]

export type ContactType = {
    title: string
    icon: string
    contactData: string
}

export const contacts: Array<ContactType> = [
    {title: "Address", icon: iconLocation, contactData: "Zalupa City Otsosite"},
    {title: "Email", icon: iconEmail, contactData: "Zalupa@gmail.com"},
    {title: "Phone", icon: iconPhone, contactData: "+2334 328 "},
]