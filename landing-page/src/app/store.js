import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "./apiSlice";
const store = configureStore({
    reducer: {
        // בעתיד: auth: authReducer,
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true // לא לשכוח לשנות ל-false בפרודקשן
});

export default store;
