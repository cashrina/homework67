import {configureStore, Store} from "@reduxjs/toolkit";
import {counterReducer} from "../containers/Counter/counterSlice.ts";

export const store:Store = configureStore({
    reducer: {
        counter: counterReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;