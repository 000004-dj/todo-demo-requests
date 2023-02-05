import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    headers: {
        "API-KEY": "0a5da0e3-7d3e-4443-bb2b-1bf6c0e7d667"
    },
})

export const tasksAPI = {
    getTasks(todolistId: string) {
        return instance.get(`/todo-lists/${todolistId}/tasks`)
            .then(res => res.data)
            .catch(() => alert("ERROR!!! Tasks not found!"))
    },
    updateTask(todolistId: string, taskId: string, title:string) {
        return instance.put<ResponseType>(`/todo-lists/${todolistId}/tasks/${taskId}`, {title})
            .then(res => res.data)
            .catch(() => alert("ERROR!!! Task can't updated!"))
    },
    createTask(todolistId: string, taskId: string, title: string) {
        return instance.post<ResponseType<TaskType>>(`/todo-lists/${todolistId}/tasks`, {
            description: "required(string)",
            title,
            completed: "",
            status: "",
            priority: "",
            startDate: "",
            deadline: "",
            id:"",
            todoListId:"",
            order: "",
            addedDate:"",})
            .then(res => res.data)
            .catch(() => alert("ERROR!!! Task not created!"))
    },
    deleteTask(todolistId: string, taskId: string) {
        return instance.delete<ResponseType>(`/todo-lists/${todolistId}/tasks/${taskId}`)
            .then(res => res.data)
            .catch(() => alert("ERROR!!! invalid task ID for deleted!"))
    },
}


type TaskType = {
    description: string
    title: string
    completed: string
    status: string
    priority: string
    startDate: string
    deadline: string
    id: string
    todoListId: string
    order: string
    addedDate: string
}

type ResponseType<D = {}> = {
    resultCode: number
    messages: Array<string>
    fieldsErrors: Array<string>
    data: D
}

