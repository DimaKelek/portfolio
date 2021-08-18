import axios from "axios";

const instanse = axios.create({
    baseURL: "http://localhost:7777"
})

export const messageApi = {
    send(values: any) {
        return instanse.post(`/send`, {...values})
    }
}