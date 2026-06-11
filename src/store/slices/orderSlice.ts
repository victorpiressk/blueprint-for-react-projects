import {
  createSlice,
  createSelector,
  type PayloadAction
} from '@reduxjs/toolkit'
import type { RootState } from '..'
import type { Order } from '../../types/models/order'

// ============================================
// TYPES
// ============================================

type OrderState = {
  byId: Record<string, Order>
  allIds: string[]
  selectedId: string | null
  loading: boolean
  error: string | null
}

// ============================================
// INITIAL STATE
// ============================================

const initialState: OrderState = {
  byId: {},
  allIds: [],
  selectedId: null,
  loading: false,
  error: null
}

// ============================================
// SLICE
// ============================================

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    // ============================================
    // SET ORDERS
    // ============================================

    setOrders: (state, action: PayloadAction<Order[]>) => {
      state.byId = {}
      state.allIds = []

      action.payload.forEach((order) => {
        state.byId[order.id] = order
        state.allIds.push(order.id)
      })

      state.loading = false
    },

    // ============================================
    // UPSERT ORDER
    // ============================================

    upsertOrder: (state, action: PayloadAction<Order>) => {
      const order = action.payload
      state.byId[order.id] = { ...state.byId[order.id], ...order }

      if (!state.allIds.includes(order.id)) {
        state.allIds.push(order.id)
      }
    },

    // ============================================
    // SET SELECTED ORDER
    // ============================================

    setSelectedOrder: (state, action: PayloadAction<Order>) => {
      const order = action.payload
      state.byId[order.id] = { ...state.byId[order.id], ...order }
      state.selectedId = order.id
      state.loading = false
    },

    // ============================================
    // CLEAR SELECTED
    // ============================================

    clearSelected: (state) => {
      state.selectedId = null
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
  setOrders,
  upsertOrder,
  setSelectedOrder,
  clearSelected,
  setLoading,
  setError
} = orderSlice.actions

// ============================================
// SELECTORS
// ============================================

export const selectOrdersById = (state: RootState) => state.order.byId
export const selectOrderIds = (state: RootState) => state.order.allIds
export const selectSelectedOrderId = (state: RootState) =>
  state.order.selectedId
export const selectOrderLoading = (state: RootState) => state.order.loading
export const selectOrderError = (state: RootState) => state.order.error

export const selectOrderById = (state: RootState, orderId: string) =>
  state.order.byId[orderId]

export const selectOrders = createSelector(
  [selectOrdersById, selectOrderIds],
  (byId, allIds) =>
    allIds
      .map((id: string) => byId[id])
      .filter((o: Order | undefined): o is Order => o !== undefined)
)

export const selectSelectedOrder = createSelector(
  [selectOrdersById, selectSelectedOrderId],
  (byId, selectedId) => {
    if (!selectedId) return null
    return byId[selectedId] ?? null
  }
)

// ============================================
// REDUCER
// ============================================

export default orderSlice.reducer
