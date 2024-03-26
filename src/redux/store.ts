import { configureStore, combineReducers } from "@reduxjs/toolkit";
import bookSlice from "./features/bookSlice";
import dateSlice from "./features/dateSlice";
import { useSelector,TypedUseSelectorHook } from "react-redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key:'rootPersist',
    storage
}

const bookReducer = combineReducers({bookSlice})
const bookPersistedReducer = persistReducer(persistConfig,bookReducer)
const datePersistedReducer = persistReducer(persistConfig,combineReducers({dateSlice}))

export const store = configureStore({
    reducer:{bookPersistedReducer,datePersistedReducer}
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector