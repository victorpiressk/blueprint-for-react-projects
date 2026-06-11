import {
  createSlice,
  createSelector,
  type PayloadAction
} from '@reduxjs/toolkit'
import type { RootState } from '..'
import type { Notification } from '../../types/models/notification'

// ============================================
// TYPES
// ============================================

type NotificationState = {
  byId: Record<string, Notification>
  allIds: string[]
  unreadCount: number
  loading: boolean
  error: string | null
}

// ============================================
// INITIAL STATE
// ============================================

const initialState: NotificationState = {
  byId: {},
  allIds: [],
  unreadCount: 0,
  loading: false,
  error: null
}

// ============================================
// SLICE
// ============================================

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    // ============================================
    // SET NOTIFICATIONS
    // ============================================

    setNotifications: (state, action: PayloadAction<Notification[]>) => {
      state.byId = {}
      state.allIds = []

      action.payload.forEach((notification) => {
        state.byId[notification.id] = notification
        state.allIds.push(notification.id)
      })

      state.unreadCount = action.payload.filter((n) => !n.read).length
      state.loading = false
    },

    // ============================================
    // UPSERT NOTIFICATION
    // ============================================

    upsertNotification: (state, action: PayloadAction<Notification>) => {
      const notification = action.payload
      const existing = state.byId[notification.id]

      state.byId[notification.id] = { ...existing, ...notification }

      if (!state.allIds.includes(notification.id)) {
        state.allIds.unshift(notification.id)
      }

      if (!existing && !notification.read) {
        state.unreadCount += 1
      }
    },

    // ============================================
    // MARK AS READ
    // ============================================

    markAsRead: (state, action: PayloadAction<string>) => {
      const notification = state.byId[action.payload]
      if (notification && !notification.read) {
        notification.read = true
        state.unreadCount = Math.max(0, state.unreadCount - 1)
      }
    },

    // ============================================
    // MARK ALL AS READ
    // ============================================

    markAllAsRead: (state) => {
      state.allIds.forEach((id) => {
        state.byId[id].read = true
      })
      state.unreadCount = 0
    },

    // ============================================
    // REMOVE NOTIFICATION
    // ============================================

    removeNotification: (state, action: PayloadAction<string>) => {
      const notification = state.byId[action.payload]
      if (notification) {
        if (!notification.read) {
          state.unreadCount = Math.max(0, state.unreadCount - 1)
        }
        delete state.byId[action.payload]
        state.allIds = state.allIds.filter((id) => id !== action.payload)
      }
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
  setNotifications,
  upsertNotification,
  markAsRead,
  markAllAsRead,
  removeNotification,
  setLoading,
  setError
} = notificationSlice.actions

// ============================================
// SELECTORS
// ============================================

export const selectNotificationsById = (state: RootState) =>
  state.notification.byId
export const selectNotificationIds = (state: RootState) =>
  state.notification.allIds
export const selectUnreadCount = (state: RootState) =>
  state.notification.unreadCount
export const selectNotificationLoading = (state: RootState) =>
  state.notification.loading
export const selectNotificationError = (state: RootState) =>
  state.notification.error

export const selectNotifications = createSelector(
  [selectNotificationsById, selectNotificationIds],
  (byId, allIds) =>
    allIds
      .map((id: string) => byId[id])
      .filter(
        (n: Notification | undefined): n is Notification => n !== undefined
      )
)

export const selectUnreadNotifications = createSelector(
  [selectNotifications],
  (notifications) => notifications.filter((n: Notification) => !n.read)
)

// ============================================
// REDUCER
// ============================================

export default notificationSlice.reducer
