import { ADD_NOTIFICATION, CLEAR_NOTIFICATION } from './actions.notification';

export interface INotificationState {
  enabled: boolean;
  text: string;
}

export const notificationReducer = 
(state: INotificationState = { enabled: false, text: '' } , action: any ): INotificationState => {
    switch (action.type) {
      case ADD_NOTIFICATION:
        return { enabled: true, text: action.payload.text };  
      case CLEAR_NOTIFICATION:
          return { enabled: false, text:'' };      
      default:
        return state
    }
  }

