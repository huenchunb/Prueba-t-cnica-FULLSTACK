import {createSlice} from "@reduxjs/toolkit";
import {
    loadTaskList,
    cleanTaskList
} from "../actions/taskActions";
import {Task} from "../models/task";

interface TaskState {
    taskList: Task[]
}

const initialState: TaskState = {
    taskList: []
};

export const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(
                loadTaskList,
                (
                    state,
                    action) => {
                    state.taskList = action.payload;
                })
            .addCase(
                cleanTaskList,
                (state) => {
                    state.taskList = initialState.taskList;
                })
            .addDefaultCase(
                (_state) => {
                });
    }
});
