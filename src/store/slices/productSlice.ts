import {
  createSlice,
  createSelector,
  type PayloadAction
} from '@reduxjs/toolkit'
import type { RootState } from '..'
import type { Product } from '../../types/models/product'

// ============================================
// TYPES
// ============================================

type Pagination = {
  page: number
  limit: number
  total: number
  totalPages: number
}

type ProductState = {
  byId: Record<string, Product>
  allIds: string[]
  selectedId: string | null
  pagination: Pagination
  loading: boolean
  error: string | null
}

// ============================================
// INITIAL STATE
// ============================================

const initialState: ProductState = {
  byId: {},
  allIds: [],
  selectedId: null,
  pagination: {
    page: 1,
    limit: 20,
    total: 0,
    totalPages: 0
  },
  loading: false,
  error: null
}

// ============================================
// SLICE
// ============================================

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    // ============================================
    // SET PRODUCTS
    // ============================================

    setProducts: (
      state,
      action: PayloadAction<{ products: Product[]; pagination: Pagination }>
    ) => {
      const { products, pagination } = action.payload

      state.byId = {}
      state.allIds = []

      products.forEach((product) => {
        state.byId[product.id] = product
        state.allIds.push(product.id)
      })

      state.pagination = pagination
      state.loading = false
    },

    // ============================================
    // UPSERT PRODUCT
    // ============================================

    upsertProduct: (state, action: PayloadAction<Product>) => {
      const product = action.payload
      state.byId[product.id] = { ...state.byId[product.id], ...product }

      if (!state.allIds.includes(product.id)) {
        state.allIds.push(product.id)
      }
    },

    // ============================================
    // SET SELECTED PRODUCT
    // ============================================

    setSelectedProduct: (state, action: PayloadAction<Product>) => {
      const product = action.payload
      state.byId[product.id] = { ...state.byId[product.id], ...product }
      state.selectedId = product.id
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
    // SET PAGINATION
    // ============================================

    setPagination: (state, action: PayloadAction<Pagination>) => {
      state.pagination = action.payload
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
  setProducts,
  upsertProduct,
  setSelectedProduct,
  clearSelected,
  setPagination,
  setLoading,
  setError
} = productSlice.actions

// ============================================
// SELECTORS
// ============================================

export const selectProductsById = (state: RootState) => state.product.byId
export const selectProductIds = (state: RootState) => state.product.allIds
export const selectSelectedProductId = (state: RootState) =>
  state.product.selectedId
export const selectProductPagination = (state: RootState) =>
  state.product.pagination
export const selectProductLoading = (state: RootState) => state.product.loading
export const selectProductError = (state: RootState) => state.product.error

export const selectProductById = (state: RootState, productId: string) =>
  state.product.byId[productId]

export const selectProducts = createSelector(
  [selectProductsById, selectProductIds],
  (byId, allIds) =>
    allIds
      .map((id: string) => byId[id])
      .filter((p: Product | undefined): p is Product => p !== undefined)
)

export const selectSelectedProduct = createSelector(
  [selectProductsById, selectSelectedProductId],
  (byId, selectedId) => {
    if (!selectedId) return null
    return byId[selectedId] ?? null
  }
)

// ============================================
// REDUCER
// ============================================

export default productSlice.reducer
