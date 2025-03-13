import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../../app/store"


type initialStateType = {
    id: number
}

const initialState: initialStateType = {
    id: -1
}

const setLeagueSlice = createSlice({
    name: 'setLeagueSlice',
    initialState: initialState,
    reducers: {
        setLeague: (state, action: PayloadAction<number>) => {
            state.id = action.payload
            console.log("SELECTOR: ", state.id)
        }
    }
})

export default setLeagueSlice.reducer
const leagueStore = (state: RootState) => state.setLeagueSlice
export const leagueSelector = createSelector([leagueStore], item => item.id)
export const { setLeague } = setLeagueSlice.actions