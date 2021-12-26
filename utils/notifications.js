import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';
import AsyncStorage from '@react-native-async-storage/async-storage'



// const STORAGE_KEY = 'MobileFlashCards'
const NOTIFICATION_KEY = 'Flashcard:notifications';


export function clearLocalNotification() {
  return AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync()
    );
};

export function setLocalNotification() {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
      if (data === null) {
      Notifications.getPermissionsAsync()
          .then(({ status }) => {
            if (status === 'granted') {
              Notifications.cancelAllScheduledNotificationsAsync()
                .then(()=> {
                  Notifications.setNotificationHandler({
                    handleNotification: async () => ({
                      shouldShowAlert: true,
                      shouldPlaySound: true,
                      shouldSetBadge: false,
                    }),
                  })
                  let tomorrow = new Date()
                  tomorrow.setHours(19)
                  tomorrow.setMinutes(0)
                  tomorrow.setSeconds(0)
                  tomorrow.setMilliseconds(0)
                  tomorrow = tomorrow.getTime() + (1000 * 60 * 60 * 24)
                  let notificationDate = new Date(tomorrow)
                  Notifications.scheduleNotificationAsync(
                    {
                      content: {
                        title: 'Mobile Flashcards',
                        body: "👋 Hey, Don't forget to take a quiz today!",
                        sound: true,
                      },
                      trigger: notificationDate,
                    }
                  )
                    .then(AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true)))
                })
              }    
          })
      }
    })
}




