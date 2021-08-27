import axios from "axios";

const instanse = axios.create({
    baseURL: "https://kelek-dev-server.herokuapp.com"
})

export const messageApi = {
    send(values: MessageDataType) {
        return instanse.post(`/send`, {...values})
    }
}

export type MessageDataType = {
    name: string
    email: string
    subject: string
    message?: string
}