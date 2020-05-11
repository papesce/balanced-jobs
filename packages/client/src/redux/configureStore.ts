import { notificationReducer, INotificationState } from './reducer.notification';
import { configureStore, getDefaultMiddleware }  from '@reduxjs/toolkit'

export interface IRootState {
  notificationState: INotificationState
}

export const createStore = () => configureStore({
    reducer: {
        notificationState: notificationReducer
    },
    middleware: [...getDefaultMiddleware()],
    devTools: process.env.NODE_ENV !== 'production',
    preloadedState: {},
    enhancers: []
});

