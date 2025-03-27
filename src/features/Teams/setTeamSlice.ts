import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

type initialStateType = {
    team: number
}

const initialState: initialStateType = {
    team: -1
}

const setTeamSlice = createSlice({
    name: 'setTeamSlice',
    initialState: initialState,
    reducers: {
        setTeam: (state, action: PayloadAction<number>) => {
            state.team = action.payload
        }
    }
})

export default setTeamSlice.reducer
const teamStore = (state: RootState) => state.setTeamSlice
export const teamSelector = createSelector([teamStore], item => item.team)
export const { setTeam } = setTeamSlice.actions