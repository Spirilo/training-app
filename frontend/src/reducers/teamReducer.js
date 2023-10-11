import { createSlice } from "@reduxjs/toolkit"

import teamSercive from '../services/team'

const initialState = null

const teamsSlice = createSlice({
  name: 'teams',
  initialState,
  reducers: {
    setTeams(state, action) {
      state = action.payload
      return state
    }
  }
})

export const { setTeams } = teamsSlice.actions

export const getTeams = () => {
  return async dispatch => {
    const teams = await teamSercive.getAll()
    dispatch(setTeams(teams))
  }
}

export default teamsSlice.reducer