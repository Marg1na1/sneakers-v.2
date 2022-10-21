import { configureStore } from '@reduxjs/toolkit'
import sneakers from './sneakers/slice'

export const store = configureStore({
    reducer: {
        sneakers,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch