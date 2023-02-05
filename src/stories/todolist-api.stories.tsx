import React, {useEffect, useState} from 'react'
import axios from "axios";
import {todolistAPI} from "../api/todolist-api";

export default {
    title: 'API'
}
const baseUrl = "https://social-network.samuraijs.com/api/1.1"
const config = {
    withCredentials: true,
    headers: {"API-KEY": "0a5da0e3-7d3e-4443-bb2b-1bf6c0e7d667"}
}



export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistAPI.getTodolists().then(
            data => setState(data)
        )
    }, [])
    return <div>{JSON.stringify(state)}</div>
}


export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
       todolistAPI.createTodolist("Hello, World, i'm a superhero!")
           .then(data => setState(data))
    }, [])

    return <div>{JSON.stringify(state)}</div>
}



export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const title = "d28cd10e-1fed-486d-9e93-4579995efef1"
        todolistAPI.deleteTodolist(title)
            .then(data => setState(data))
            .catch(()=> alert("ERROR, to-do list not found!"))
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        let title = "df31527b-7045-428c-8557-8d845c5581ff"
        todolistAPI.updateTodolist(title, "WOOOOW")
            .then(data => setState(data))
            .catch(() => alert("Error, invalid to-do list ID!"))
    }, [])


    return <div>{JSON.stringify(state)}</div>
}

