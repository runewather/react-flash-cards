import { Notifications, Permissions } from 'expo'
import { AsyncStorage } from 'react-native'

const NOTIFICATION_KEY = 'NOTIFICATION_KEY'

export function generateUID () {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

function createLocalNotification() {
    return {
        title: 'Flashcards',
        body: 'Dont forget to play some quizzes today!'
    }
}

export function clearLocalNotification () {
    return AsyncStorage.removeItem(NOTIFICATION_KEY)
      .then(Notifications.cancelAllScheduledNotificationsAsync)
}

export function setLocalNotification() {
    AsyncStorage.getItem(NOTIFICATION_KEY)
        .then(JSON.parse)
        .then((data) => {
            if(data === null) {
                Permissions.askAsync(Permissions.NOTIFICATIONS)
                    .then(({ status }) => {
                        if(status === 'granted') {
                            Notifications.cancelAllScheduledNotificationsAsync()

                            let tomorrow = (new Date()).getDate() + 1

                            Notifications.scheduleLocalNotificationAsync(createLocalNotification(), {
                                time: tomorrow,
                                repeat: 'day'
                            })

                            AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
                        }
                    })
            }
        })
}