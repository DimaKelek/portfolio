import iconReact from "../icons/react.svg"
import iconTS from "../icons/typescript.svg"
import iconRedux from "../icons/redux.svg"
import iconHTML from "../icons/html5.svg"
import iconCSS from "../icons/css3.svg"
import iconJest from "../icons/jest.png"
import axios from "../icons/256.png"
import material from "../icons/logo_raw.svg"
import postman from "../icons/lifecycle.svg"

import iconLocation from "../icons/location.png"
import iconEmail from "../icons/message.png"
import iconPhone from "../icons/phone.png"

import network from "../others/network.jpg"
import todolist from "../others/todolist.jpg"
import cards from "../others/cards.jpg"

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
    {title: "Axios", icon: axios,
        text: "Axios is a simple promise based HTTP client for the browser and node.js. Axios provides a simple to use " +
            "library in a small package with a very extensible interface."},
    {title: "Material UI", icon: material,
        text: "An open source library that includes React components that implement Google's Material Design. It is built " +
            "using Less, a backward-compatible language extension for CSS."},
    {title: "Postman", icon: postman,
        text: "Is a powerful set of tools for API testing. It is a development environment that allows you to create, test, " +
            "control, and publish documentation for the API."},
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
    preview: string
    photo: string
}

export const projects: Array<ProjectType> = [
    {
        date: "May 15, 2021",
        title: "Social Network",
        discription: "Social network created using React, Redux, formik libraries. During the development were used " +
            "modern approaches to the development of SPA",
        link: "https://github.com/DimaKelek/network",
        preview: "https://dimakelek.github.io/network/",
        photo: network
    },
    {
        date: "May 15, 2021",
        title: "To do list",
        discription: "Applications for planning, tracking and easy sorting of tasks. Nice design and user-friendly " +
            "interface allows you not to forget anything and complete tasks on time",
        link: "https://github.com/DimaKelek/todolist",
        preview: "https://dimakelek.github.io/todolist",
        photo: todolist
    },
    {
        date: "August 10, 2021",
        title: "Card learning",
        discription: "Applications for card learning. You can create your decks or using decks your friends. " +
            "You can grade the cards and cards that have lower grade will fall out more often.",
        link: "https://github.com/DimaKelek/friday13th-solo",
        preview: "https://dimakelek.github.io/friday13th-solo/",
        photo: cards
    }
]

export type ContactType = {
    title: string
    icon: string
    contactData: string
}

export const contacts: Array<ContactType> = [
    {title: "Address", icon: iconLocation, contactData: "Minsk City"},
    {title: "Email", icon: iconEmail, contactData: "kelekofficial@gmail.com"},
    {title: "Phone", icon: iconPhone, contactData: "+123 456 7890 "},
]