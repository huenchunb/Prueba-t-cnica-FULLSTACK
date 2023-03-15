import {createAction} from "@reduxjs/toolkit";
import {Task} from "../models/task";

export const loadTaskList = createAction(
    "LOAD_TASK_LIST",
    (list: Task[]) => {
        return {
            payload: list
        };
    });

export const cleanTaskList = createAction(
    "CLEAN_TASK_LIST");