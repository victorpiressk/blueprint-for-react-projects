import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '..'
import type { User } from '../../types/models/user'

// ============================================
// TYPES
// ============================================

type AuthState = {
  user: User | null
  accessToken: string | null
  isAuthenticated: boolean
  loading: boolean
  error: string | null
}

// ============================================
// INITIAL STATE
// ============================================

const initialState: AuthState = {
  user: null,
  accessToken: localStorage.getItem('accessToken'),
  isAuthenticated: !!localStorage.getItem('accessToken'),
  loading: false,
  error: null
}

// ============================================
// SLICE
// ============================================

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // ============================================
    // SET CREDENTIALS
    // ============================================

    setCredentials: (
      state,
      action: PayloadAction<{ user: User; token: string }>
    ) => {
      state.user = action.payload.user
      state.accessToken = action.payload.token
      state.isAuthenticated = true
      state.loading = false
      state.error = null
      localStorage.setItem('accessToken', action.payload.token)
    },

    // ============================================
    // SET USER
    // ============================================

    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload
    },

    // ============================================
    // LOGOUT
    // ============================================

    logout: (state) => {
      state.user = null
      state.accessToken = null
      state.isAuthenticated = false
      state.loading = false
      state.error = null
      localStorage.removeItem('accessToken')
    },

    // ============================================
    // SET LOADING
    // ============================================

    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },

    // ============================================
    // SET ERROR
    // ============================================

    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload
      state.loading = false
    },

    // ============================================
    // CLEAR ERROR
    // ============================================

    clearError: (state) => {
      state.error = null
    }
  }
})

// ============================================
// ACTIONS
// ============================================

export const {
  setCredentials,
  setUser,
  logout,
  setLoading,
  setError,
  clearError
} = authSlice.actions

// ============================================
// SELECTORS
// ============================================

export const selectCurrentUser = (state: RootState) => state.auth.user
export const selectAccessToken = (state: RootState) => state.auth.accessToken
export const selectIsAuthenticated = (state: RootState) =>
  state.auth.isAuthenticated
export const selectAuthLoading = (state: RootState) => state.auth.loading
export const selectAuthError = (state: RootState) => state.auth.error

// ============================================
// REDUCER
// ============================================

export default authSlice.reducer
