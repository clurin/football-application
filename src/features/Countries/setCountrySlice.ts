import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../../app/store"


type initialStateType = {
    country: string
}

const initialState: initialStateType = {
    country: ''
}

const setCountrySlice = createSlice({
    name: 'setCountrySlice',
    initialState: initialState,
    reducers: {
        setCountry: (state, action: PayloadAction<string>) => {
            state.country = action.payload
        }
    }
})

export default setCountrySlice.reducer
const countryStore = (state: RootState) => state.setCountrySlice
export const countrySelector = createSelector([countryStore], item => item.country)
export const { setCountry } = setCountrySlice.actions