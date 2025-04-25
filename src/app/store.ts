import { configureStore } from '@reduxjs/toolkit'
import { api } from './api'
import { TypedUseSelectorHook } from 'react-redux';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import modalLoaderSlice from '../side components/ModalLoader/modalLoaderSlice'

export const store = configureStore({
    reducer: {
        modalLoaderSlice: modalLoaderSlice,
        [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)
})

export default store;
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => typeof store.dispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector