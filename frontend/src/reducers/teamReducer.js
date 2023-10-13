import { createSlice } from "@reduxjs/toolkit"

import teamSercive from '../services/team'
import membershipService from '../services/membership'

const initialState = {}

const teamsSlice = createSlice({
  name: 'teams',
  initialState,
  reducers: {
    setTeams(state, action) {
      state = action.payload
      return state
    },
    addMember(state, action) {
      const { user, id } = action.payload
      const teamToAdd = state.find(t => t.id === id)
      teamToAdd.users.push(user)
    },
    dltMember(state, action) {
      const { teamId, userId } = action.payload
      const teamToDlt = state.find(t => t.id === teamId)
      const index = teamToDlt.users.findIndex(u => u.id === userId)
      teamToDlt.users.splice(index, 1)
    },
    addMsg(state, action) {
      const { id, msg } = action.payload
      const teamToAdd = state.find(t => t.id === id)
      teamToAdd.messages.push(msg)
    }
  }
})

export const { setTeams, addMember, dltMember, addMsg } = teamsSlice.actions

export const getTeams = () => {
  return async dispatch => {
    const teams = await teamSercive.getAll()
    dispatch(setTeams(teams))
  }
}

export const addTeamMember = (body, user) => {
  return async dispatch => {
    await membershipService.joinTeam(body)
    dispatch(addMember({ user, id: body.teamId }))
  }
}

export const deleteMember = (body) => {
  return async dispatch => {
    await membershipService.leaveTeam(body)
    dispatch(dltMember(body))
  }
}

export const addMessage = (id, msg) => {
  return async dispatch => {
    await teamSercive.addMessage(id, { message: msg })
    dispatch(addMsg({ id, msg }))
  }
}

export default teamsSlice.reducer