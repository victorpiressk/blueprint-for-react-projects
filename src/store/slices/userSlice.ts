import {
  createSlice,
  createSelector,
  type PayloadAction
} from '@reduxjs/toolkit'
import type { RootState } from '..'
import type { User } from '../../types/models/user'

// ============================================
// TYPES
// ============================================

type UserState = {
  byId: Record<string, User>
  viewingId: string | null
  loading: boolean
  error: string | null
}

// ============================================
// INITIAL STATE
// ============================================

const initialState: UserState = {
  byId: {},
  viewingId: null,
  loading: false,
  error: null
}

// ============================================
// SLICE
// ============================================

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // ============================================
    // UPSERT USER
    // ============================================

    upsertUser: (state, action: PayloadAction<User>) => {
      const user = action.payload
      state.byId[user.id] = { ...state.byId[user.id], ...user }
    },

    // ============================================
    // SET VIEWING USER
    // ============================================

    setViewingUser: (state, action: PayloadAction<User>) => {
      const user = action.payload
      state.byId[user.id] = { ...state.byId[user.id], ...user }
      state.viewingId = user.id
      state.loading = false
    },

    // ============================================
    // CLEAR VIEWING
    // ============================================

    clearViewing: (state) => {
      state.viewingId = null
      state.loading = false
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
    }
  }
})

// ============================================
// ACTIONS
// ============================================

export const {
  upsertUser,
  setViewingUser,
  clearViewing,
  setLoading,
  setError
} = userSlice.actions

// ============================================
// SELECTORS
// ============================================

export const selectUsersById = (state: RootState) => state.user.byId
export const selectViewingUserId = (state: RootState) => state.user.viewingId
export const selectUserLoading = (state: RootState) => state.user.loading
export const selectUserError = (state: RootState) => state.user.error

export const selectUserById = (state: RootState, userId: string) =>
  state.user.byId[userId]

export const selectViewingUser = createSelector(
  [selectUsersById, selectViewingUserId],
  (usersById, viewingId) => {
    if (!viewingId) return null
    return usersById[viewingId] ?? null
  }
)

// ============================================
// REDUCER
// ============================================

export default userSlice.reducer
