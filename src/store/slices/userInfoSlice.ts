import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type UserPayloadType = {
  userName: string
  gender: number
}

const initialState = {
  userName: '',
  gender: 1,
}
export const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    setUserName: (state, action: PayloadAction<UserPayloadType>) => {
      state = action.payload
    },
  },
})

export const { setUserName } = userInfoSlice.actions

export default userInfoSlice.reducer
