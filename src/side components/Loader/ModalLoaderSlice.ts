import { createSelector, createSlice } from "@reduxjs/toolkit"
import { RootState } from "../../app/store"

type initialStateType = {
    isLoading: boolean
}

const initialState: initialStateType = {
    isLoading: false
}

const modalLoaderSlice = createSlice({
    name: 'modalLoaderSlice',
    initialState: initialState,
    reducers: {
        setModalLoader: (state, action) => {
            state.isLoading = !state.isLoading
        }
    }
})

export default modalLoaderSlice.reducer
const modalLoaderStore = (state: RootState) => state.modalLoaderSlice
export const modalLoaderSelector = createSelector([modalLoaderStore], item => item.isLoading)
export const { setModalLoader } = modalLoaderSlice.actions