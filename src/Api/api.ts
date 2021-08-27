import axios from "axios";

const instanse = axios.create({
    baseURL: "https://kelek-dev-server.herokuapp.com"
    // baseURL: "http://localhost:7777"
})

export const messageApi = {
    send(values: MessageDataType) {
        return instanse.post<ResponseType>(`/send`, {...values})
    }
}

type ResponseType = {
    your_request: MessageDataType,
    messages: string[],
    statusCode: number
}

export type MessageDataType = {
    name: string
    email: string
    subject: string
    message?: string
}