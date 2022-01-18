import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface AuthState {
  email: string;
  isLoggedIn: boolean;
}

const initialState = { 
    email: '',
    isLoggedIn: false
} as AuthState

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
      saveSession(state, action: PayloadAction<string>) {
        state.email = action.payload
        state.isLoggedIn = true
        // action.payload -> string
      },
      logout(state) {
          state.email = '',
          state.isLoggedIn = false;
      }
    // increment(state) {
    //   state.value++
    // },
    // decrement(state) {
    //   state.value--
    // },
    // incrementByAmount(state, action: PayloadAction<number>) {
    //   state.value += action.payload
    // },
  },
})

export const { saveSession, logout } = authSlice.actions
export default authSlice.reducer