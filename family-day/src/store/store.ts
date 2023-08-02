import { configureStore} from "@reduxjs/toolkit";
import counterReducer from "../reducers/counterSlice";
import { createWrapper } from "next-redux-wrapper";
import { TypedUseSelectorHook, useSelector } from "react-redux";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
  });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;