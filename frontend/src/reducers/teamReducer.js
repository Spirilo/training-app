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
    addTeam(state, action) {
      state.push(action.payload)
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
    },
    dltTeam(state, action) {
      return state.filter(t => t.id !== action.payload)
    }
  }
})

export const { setTeams, addTeam, addMember, dltMember, addMsg, dltTeam } = teamsSlice.actions

export const getTeams = () => {
  return async dispatch => {
    const teams = await teamSercive.getAll()
    dispatch(setTeams(teams))
  }
}

export const createTeam = (team) => {
  return async dispatch => {
    console.log(team)
    const added = await teamSercive.addTeam(team)
    dispatch(addTeam(added))
  }
}

export const deleteTeam = (id) => {
  return async dispatch => {
    await teamSercive.removeTeam(id)
    dispatch(dltTeam(id))
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