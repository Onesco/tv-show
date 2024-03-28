import { configureStore } from "@reduxjs/toolkit";
import showSliceReducer from "./tv-show/showSlice";

export const store = configureStore({
    reducer: {
      movieShow: showSliceReducer, 
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;