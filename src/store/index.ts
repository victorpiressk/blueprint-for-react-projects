import { configureStore } from '@reduxjs/toolkit'
import authSlice from './slices/authSlice'
import userSlice from './slices/userSlice'
import notificationSlice from './slices/notificationSlice'
import cartSlice from './slices/cartSlice'
import productSlice from './slices/productSlice'
import orderSlice from './slices/orderSlice'
import filterSlice from './slices/filterSlice'

export const store = configureStore({
  reducer: {
    auth: authSlice,
    user: userSlice,
    notification: notificationSlice,
    cart: cartSlice,
    product: productSlice,
    order: orderSlice,
    filter: filterSlice
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
