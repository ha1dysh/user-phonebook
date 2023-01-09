import { configureStore } from "@reduxjs/toolkit"

import { authSlice } from "./authSlice"
import { contactsApi } from "./contactsApi"
import { filterSlice } from "./filterSlice"

const store = configureStore({
  reducer: {
    [authSlice.name]: authSlice.reducer,
    [filterSlice.name]: filterSlice.reducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
})

export default store
