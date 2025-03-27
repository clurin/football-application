import { configureStore } from '@reduxjs/toolkit'
import { api } from './api'
import { TypedUseSelectorHook } from 'react-redux';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import setCountrySlice from '../features/Countries/setCountrySlice';
import setLeagueSlice from '../features/Leagues/setLeagueSlice'
import setTeamSlice from '../features/Teams/setTeamSlice'
import modalLoaderSlice from '../side components/Loader/ModalLoaderSlice'

export const store = configureStore({
    reducer: {
        setCountrySlice: setCountrySlice,
        setLeagueSlice: setLeagueSlice,
        setTeamSlice: setTeamSlice,
        modalLoaderSlice: modalLoaderSlice,
        [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)
})

export default store;
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => typeof store.dispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector