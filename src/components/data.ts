export type SkillsType = {
    title: string
    icon: string
    text: string
}

export const skills: Array<SkillsType> = [
    {title: "TypeScript", icon: "https://goo.su/5reG",
        text: "A programming language introduced by Microsoft in 2012 and positioned as a " +
            "web application development tool that extends JavaScript."},
    {title: "React", icon: "https://goo.su/5rEO",
        text: "An open source JavaScript library for developing user interfaces. Used to develop " +
            "single page and mobile applications. Its goal is to provide high speed, simplicity and scalability."},
    {title: "Redux", icon: "https://goo.su/5reR",
        text: "JavaScript library for managing application state. Used in conjunction with React or Angular. " +
            "Contains tools to simplify the transfer of data through context."},
    {title: "HTML", icon: "https://goo.su/5Res",
        text: "Hypertext Markup Language. It is interpreted by browsers, and then the formatted text obtained as a result " +
            "of interpretation is displayed on the screen of a computer monitor or mobile device"},
    {title: "CSS", icon: "https://goo.su/5Ret",
        text: "CSS is used by web page creators to specify colors, fonts, styles, block placement, and other " +
            "aspects of the presentation of the appearance of these web pages."},
    {title: "Jest", icon: "https://goo.su/5REU",
        text: "Jest is a JavaScript testing framework designed to ensure that any code runs correctly. It allows you to " +
            "write tests with an acceptable and functional API and get the results you want quickly."},
]

export type NavType = {
    title: string
    status: boolean
    href: string
}

export const nav: Array<NavType> = [
    {title: "HOME", href: "", status: true},
    {title: "ABOUT ME", href: "", status: false},
    {title: "PROJECTS", href: "", status: false},
    {title: "CONTACTS", href: "", status: false},
]