import {types} from "mobx-state-tree"
import telegram from "../Common/icons/telegram.svg"
import github from "../Common/icons/github.svg"
import instagram from "../Common/icons/instagram.svg"
import vk from "../Common/icons/vk.svg"
import linkedIn from "../Common/icons/linkedin.svg"
import {ContactModel, LinkModel, NavModel, ProjectModel, SkillsModel} from "./Models"
import iconLocation from "../Common/icons/location.png"
import iconEmail from "../Common/icons/message.png"
import iconPhone from "../Common/icons/phone.png"
import iconTS from "../Common/icons/typescript.svg"
import iconReact from "../Common/icons/react.svg"
import iconRedux from "../Common/icons/redux.svg"
import iconHTML from "../Common/icons/html5.svg"
import iconCSS from "../Common/icons/css3.svg"
import iconJest from "../Common/icons/jest.png"
import axios from "../Common/icons/256.png"
import material from "../Common/icons/logo_raw.svg"
import postman from "../Common/icons/lifecycle.svg"
import network from "../Common/others/network.jpg"
import todolist from "../Common/others/todolist.jpg"
import cards from "../Common/others/cards.jpg"
import home from "../Common/icons/home.svg"
import about from "../Common/icons/about.svg"
import projects from "../Common/icons/projects.png"
import contacts from "../Common/icons/contacts.svg"
import {v1} from "uuid";
import {createContext, useContext} from "react";

export const StoreModel = types
    .model("RootStore", {
        links: types.array(LinkModel),
        contacts: types.array(ContactModel),
        skills: types.array(SkillsModel),
        nav: types.array(NavModel),
        projects: types.array(ProjectModel)
    })
    .actions(store => ({
        setStatus(navItemID: string) {
            store.nav.forEach(i => {
                if(i.status && i.id !== navItemID) {
                    i.status = false
                }
            })
            let index = store.nav.findIndex(i => i.id === navItemID)
            store.nav[index].status = true
            console.log(store.nav[index])
        }
    }))

export const store = StoreModel.create({
    links: [
        {id: v1(), image: telegram, link: "https://t.me/KelekOfficial"},
        {id: v1(), image: github, link: "https://github.com/DimaKelek"},
        {id: v1(), image: instagram, link: "https://www.instagram.com/___kelek___/"},
        {id: v1(), image: vk, link: "https://vk.com/id268131358"},
        {id: v1(), image: linkedIn, link: "https://www.linkedin.com/in/dimakelek/"}
    ],
    contacts: [
        {id: v1(), title: "Address", icon: iconLocation, contactData: "Minsk City"},
        {id: v1(), title: "Email", icon: iconEmail, contactData: "kelekofficial@gmail.com"},
        {id: v1(), title: "Phone", icon: iconPhone, contactData: "+123 456 7890 "},
    ],
    skills: [
        {
            id: v1(), title: "TypeScript", icon: iconTS,
            text: "A programming language introduced by Microsoft in 2012 and positioned as a " +
                "web application development tool that extends JavaScript."
        },
        {
            id: v1(), title: "React", icon: iconReact,
            text: "An open source JavaScript library for developing user interfaces. Used to develop " +
                "single page and mobile applications. Its goal is to provide high speed, simplicity and scalability."
        },
        {
            id: v1(), title: "Redux", icon: iconRedux,
            text: "JavaScript library for managing application state. Used in conjunction with React or Angular. " +
                "Contains tools to simplify the transfer of data through context."
        },
        {
            id: v1(), title: "HTML", icon: iconHTML,
            text: "Hypertext Markup Language. It is interpreted by browsers, and then the formatted text obtained as a result " +
                "of interpretation is displayed on the screen of a computer monitor or mobile device"
        },
        {
            id: v1(), title: "CSS", icon: iconCSS,
            text: "CSS is used by web page creators to specify colors, fonts, styles, block placement, and other " +
                "aspects of the presentation of the appearance of these web pages."
        },
        {
            id: v1(), title: "Jest", icon: iconJest,
            text: "Jest is a JavaScript testing framework designed to ensure that any code runs correctly. It allows you to " +
                "write tests with an acceptable and functional API and get the results you want quickly."
        },
        {
            id: v1(), title: "Axios", icon: axios,
            text: "Axios is a simple promise based HTTP client for the browser and node.js. Axios provides a simple to use " +
                "library in a small package with a very extensible interface."
        },
        {
            id: v1(), title: "Material UI", icon: material,
            text: "An open source library that includes React Components that implement Google's Material Design. It is built " +
                "using Less, a backward-compatible language extension for CSS."
        },
        {
            id: v1(), title: "Postman", icon: postman,
            text: "Is a powerful set of tools for API testing. It is a development environment that allows you to create, test, " +
                "control, and publish documentation for the API."
        },
    ],
    nav: [
        {id: v1(), title: "HOME", href: "#HOME", image: home, status: true},
        {id: v1(), title: "ABOUT ME", href: "#ABOUT", image: about, status: false},
        {id: v1(), title: "PROJECTS", href: "#PROJECTS", image: projects, status: false},
        {id: v1(), title: "CONTACTS", href: "#CONTACTS", image: contacts, status: false},
    ],
    projects: [
        {
            id: v1(),
            date: "May 15, 2021",
            title: "Social Network",
            discription: "Social network created using React, Redux, formik libraries. During the development were used " +
                "modern approaches to the development of SPA",
            link: "https://github.com/DimaKelek/network",
            preview: "https://dimakelek.github.io/network/",
            photo: network
        },
        {
            id: v1(),
            date: "May 15, 2021",
            title: "To do list",
            discription: "Applications for planning, tracking and easy sorting of tasks. Nice design and user-friendly " +
                "interface allows you not to forget anything and complete tasks on time",
            link: "https://github.com/DimaKelek/todolist",
            preview: "https://dimakelek.github.io/todolist",
            photo: todolist
        },
        {
            id: v1(),
            date: "August 10, 2021",
            title: "Card learning",
            discription: "Applications for card learning. You can create your decks or using decks your friends. " +
                "You can grade the cards and cards that have lower grade will fall out more often.",
            link: "https://github.com/DimaKelek/friday13th-solo",
            preview: "https://dimakelek.github.io/friday13th-solo/",
            photo: cards
        }
    ]
})