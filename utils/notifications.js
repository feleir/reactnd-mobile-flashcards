import { AsyncStorage } from 'react-native'
import { Notifications, Permissions } from 'expo'
import { APP_NAMESPACE } from './common'

const NOTIFICATION_KEY = `${APP_NAMESPACE}:notification`

const scheduleNotification = (time) => {
    Notifications.scheduleLocalNotificationAsync(
        {
            title: 'Pass a Quiz!',
            body: "👋 don't forget to pass a quiz for today!",
            ios: { 
                sound: true 
            },
            android: {
                sound: true,
                priority: 'high',
                sticky: false,
                vibrate: true,
            }
        },
        { 
            time, 
            repeat: 'day' 
        }
    )
}

const clearLocalNotification = () => {
    return AsyncStorage.removeItem(NOTIFICATION_KEY)
        .then(Notifications.cancelAllScheduledNotificationsAsync)
}

const setLocalNotification = (time) => {
    AsyncStorage.getItem(NOTIFICATION_KEY)
        .then(JSON.parse)
        .then(data => {
        if (data !== null) {
            return
        }
        
        Permissions.askAsync(Permissions.NOTIFICATIONS)
            .then(({ status }) => {
                if (status !== 'granted') {
                    return
                }

                Notifications.cancelAllScheduledNotificationsAsync()
                scheduleNotification(time)  
                AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
            })
    })
  }

export { setLocalNotification, clearLocalNotification }