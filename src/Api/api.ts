import axios from "axios";

const instanse = axios.create({
    baseURL: "http://localhost:7777"
})

export const messageApi = {
    send(values: messageDataType) {
        return instanse.post(`/send`, {...values})
    }
}

type messageDataType = {
    name: string
    email: string
    subject: string
    message?: string
}