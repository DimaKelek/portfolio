import {types} from "mobx-state-tree";
import {v1} from "uuid";

export const LinkModel = types.model("LinkModel", {
    id: types.optional(types.identifier, v1()),
    image: types.string,
    link: types.string
})

export const ContactModel = types.model("ContactModel", {
    id: types.optional(types.identifier, v1()),
    title: types.string,
    icon: types.string,
    contactData: types.string
})

export const SkillsModel = types.model("SkillsModel", {
    id: types.optional(types.identifier, v1()),
    title: types.string,
    icon: types.string,
    text: types.string
})

export const NavModel = types.model("NavModel", {
    id: types.optional(types.identifier, v1()),
    title: types.string,
    href: types.string,
    image: types.string,
    status: types.boolean
})

export const ProjectModel = types.model("ProjectModel", {
    id: types.optional(types.identifier, v1()),
    date: types.string,
    title: types.string,
    discription: types.string,
    link: types.string,
    preview: types.string,
    photo: types.string
})