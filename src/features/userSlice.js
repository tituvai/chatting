import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    value: 1,
  },
  reducers: {
    userLoginInfo: (state, action) => {
        state.value = action.payload
    },
   
  },
})


export const { userLoginInfo } = userSlice.actions

export default userSlice.reducer