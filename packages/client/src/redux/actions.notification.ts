
export const ADD_NOTIFICATION  = 'ADD_NOTIFICATION';
export const CLEAR_NOTIFICATION  = 'CLEAR_NOTIFICATION';

export const addNotification = (text: string) => ({
    type: ADD_NOTIFICATION,
    payload: { text }
  });

export const clearNotification = () => ({
    type: CLEAR_NOTIFICATION
  });