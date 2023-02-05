import axios from 'axios'


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    headers: {
        "API-KEY": "0a5da0e3-7d3e-4443-bb2b-1bf6c0e7d667"
    },
})


export const todolistAPI = {
    updateTodolist(todolistId: string, title: string) {
        return instance.put<ResponseType>("/todo-lists/" + todolistId, {title})
            .then(res => res.data)
    },
    createTodolist(title: string) {
        return instance.post<ResponseType<{ item: TodolistType }>>("/todo-lists", {title})
            .then(res => res.data)
    },
    getTodolists() {
        return instance.get<TodolistType[]>("/todo-lists")
            .then(res => res.data)
    },
    deleteTodolist(todolistId: string) {
        return instance.delete<ResponseType>("/todo-lists/" + todolistId)
            .then(res => res.data)
    }

}


type TodolistType = {
    id: string
    addedDate: string
    order: number
    title: string
}
type ResponseType<D = {}> = {
    resultCode: number
    messages: Array<string>
    fieldsErrors: Array<string>
    data: D
}

