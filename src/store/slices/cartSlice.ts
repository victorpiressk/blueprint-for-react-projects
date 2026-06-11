import {
  createSlice,
  createSelector,
  type PayloadAction
} from '@reduxjs/toolkit'
import type { RootState } from '..'
import type { CartItem } from '../../types/models/cart'

// ============================================
// TYPES
// ============================================

type CartState = {
  items: CartItem[]
  total: number
  isOpen: boolean
}

// ============================================
// HELPERS
// ============================================

const calculateTotal = (items: CartItem[]): number =>
  items.reduce((sum, item) => sum + item.price * item.quantity, 0)

// ============================================
// INITIAL STATE
// ============================================

const initialState: CartState = {
  items: [],
  total: 0,
  isOpen: false
}

// ============================================
// SLICE
// ============================================

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // ============================================
    // ADD ITEM
    // ============================================

    addItem: (state, action: PayloadAction<CartItem>) => {
      const existing = state.items.find(
        (item) => item.productId === action.payload.productId
      )

      if (existing) {
        existing.quantity += action.payload.quantity
      } else {
        state.items.push(action.payload)
      }

      state.total = calculateTotal(state.items)
    },

    // ============================================
    // REMOVE ITEM
    // ============================================

    removeItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(
        (item) => item.productId !== action.payload
      )
      state.total = calculateTotal(state.items)
    },

    // ============================================
    // UPDATE QUANTITY
    // ============================================

    updateQuantity: (
      state,
      action: PayloadAction<{ productId: string; quantity: number }>
    ) => {
      const item = state.items.find(
        (i) => i.productId === action.payload.productId
      )

      if (item) {
        item.quantity = Math.max(1, action.payload.quantity)
        state.total = calculateTotal(state.items)
      }
    },

    // ============================================
    // CLEAR CART
    // ============================================

    clearCart: (state) => {
      state.items = []
      state.total = 0
    },

    // ============================================
    // OPEN CART
    // ============================================

    openCart: (state) => {
      state.isOpen = true
    },

    // ============================================
    // CLOSE CART
    // ============================================

    closeCart: (state) => {
      state.isOpen = false
    }
  }
})

// ============================================
// ACTIONS
// ============================================

export const {
  addItem,
  removeItem,
  updateQuantity,
  clearCart,
  openCart,
  closeCart
} = cartSlice.actions

// ============================================
// SELECTORS
// ============================================

export const selectCartItems = (state: RootState) => state.cart.items
export const selectCartTotal = (state: RootState) => state.cart.total
export const selectCartIsOpen = (state: RootState) => state.cart.isOpen

export const selectCartItemCount = createSelector(
  [selectCartItems],
  (items: CartItem[]) =>
    items.reduce((sum: number, item: CartItem) => sum + item.quantity, 0)
)

export const selectCartItemByProductId = (
  state: RootState,
  productId: string
) => state.cart.items.find((item: CartItem) => item.productId === productId)

// ============================================
// REDUCER
// ============================================

export default cartSlice.reducer
