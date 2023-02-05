import React, {useEffect, useState} from 'react'
import axios from "axios";
import {todolistAPI} from "../api/todolist-api";
import {tasksAPI} from "../api/tasks-api";

export default {
    title: 'taskAPI'
}

export const GetTasks = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = "9716ed19-03cd-46da-a841-f62297bd2f4d"
        tasksAPI.getTasks(todolistId)
            .then(
                data => setState(data)
            )
    }, [])
    return <div>{JSON.stringify(state)}</div>
}


export const CreateTasks = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = "9716ed19-03cd-46da-a841-f62297bd2f4d"
        const taskId = "9716ed19-03cd-46da-a841-f62297bd2f4d"
        const title = "{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}"
        tasksAPI.createTask(todolistId, taskId, title)
            .then(data => setState(data))
    }, [])
    return <div>{JSON.stringify(state)}</div>
}


export const DeleteTasks = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = "9716ed19-03cd-46da-a841-f62297bd2f4d"
        const taskId = "55791ccf-0a29-4f23-bc1b-1259b646a871"
        tasksAPI.deleteTask(todolistId, taskId)
            .then(data => setState(data))

    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const UpdateTasks = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = "9716ed19-03cd-46da-a841-f62297bd2f4d"
        const taskId = "55791ccf-0a29-4f23-bc1b-1259b646a871"
        tasksAPI.updateTask(todolistId, taskId, "WOOOWOOOOWOOOOW")
            .then(data => setState(data))
    }, [])


    return <div>{JSON.stringify(state)}</div>
}

