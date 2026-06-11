import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '..'

// ============================================
// TYPES
// ============================================

type FilterState = {
  term: string
  criterion: string
}

// ============================================
// INITIAL STATE
// ============================================

const initialState: FilterState = {
  term: '',
  criterion: ''
}

// ============================================
// SLICE
// ============================================

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    // ============================================
    // SET TERM
    // ============================================

    setTerm: (state, action: PayloadAction<string>) => {
      state.term = action.payload
    },

    // ============================================
    // SET CRITERION
    // ============================================

    setCriterion: (state, action: PayloadAction<string>) => {
      state.criterion = action.payload
    },

    // ============================================
    // RESET FILTER
    // ============================================

    resetFilter: (state) => {
      state.term = ''
      state.criterion = ''
    }
  }
})

// ============================================
// ACTIONS
// ============================================

export const { setTerm, setCriterion, resetFilter } = filterSlice.actions

// ============================================
// SELECTORS
// ============================================

export const selectFilterTerm = (state: RootState) => state.filter.term
export const selectFilterCriterion = (state: RootState) =>
  state.filter.criterion

// ============================================
// REDUCER
// ============================================

export default filterSlice.reducer
