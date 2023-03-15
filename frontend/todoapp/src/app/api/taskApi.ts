import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {Task} from "../models/task";
import {TaskInputForm} from "../../features/task/TaskCreate";
import {InputFormEdit} from "../../features/task/TaskEdit";

export const taskApi = createApi({
    reducerPath: "taskApi",
    baseQuery: fetchBaseQuery(
        {
            baseUrl: "http://localhost:8080/api",
            mode: "cors",
            headers: {
                "Access-Control-Allow-Origin": "http://localhost:3000",
                "Access-Control-Allow-Credential": "true",
                "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS"
            },
            credentials: "same-origin"
        }),
    tagTypes: ["Tasks"],
    endpoints: (builder) => ({
        getTasks: builder.query<Task[], void>({
            query: () => "/tarea",
            providesTags: ["Tasks"]
        }),
        deleteTask: builder.mutation<Task, number>({
            query: (id: number) => ({
                url: `/tarea?id=${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Tasks"]
        }),
        createTask: builder.mutation<Task, TaskInputForm>({
            query: (body: TaskInputForm) => ({
                url: `/tarea`,
                method: "POST",
                body
            }),
            invalidatesTags: ["Tasks"]
        }),
        updateTask: builder.mutation<Task, InputFormEdit>({
            query: (body: InputFormEdit) => ({
                url: `/tarea`,
                method: "PUT",
                body
            }),
            invalidatesTags: ["Tasks"]
        }),
    })
});

export const {
    useGetTasksQuery,
    useDeleteTaskMutation,
    useCreateTaskMutation,
    useUpdateTaskMutation
} = taskApi;