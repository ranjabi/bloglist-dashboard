import { createSlice } from '@reduxjs/toolkit'
import userService from '../services/users'

const userSlice = createSlice({
  name: 'user',
  initialState: [],
  reducers: {
    setUser(state, action) {
      return action.payload
    }
  },
})

export const getUsers = () => {
  return async (dispatch) => {
    const users = await userService.getAll()

    dispatch(setUser(users))
  }
}

export const { setUser } = userSlice.actions
export default userSlice.reducer