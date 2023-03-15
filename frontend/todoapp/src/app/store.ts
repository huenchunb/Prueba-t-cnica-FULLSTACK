import {configureStore} from "@reduxjs/toolkit";
import {taskSlice} from "./reducers/taskReducer";
import {taskApi} from "./api/taskApi";

export const store = configureStore({
    reducer: {
        tasks: taskSlice.reducer,
        [taskApi.reducerPath]: taskApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(taskApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;