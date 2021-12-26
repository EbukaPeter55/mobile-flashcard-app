import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';
import AsyncStorage from '@react-native-async-storage/async-storage'



// const STORAGE_KEY = 'MobileFlashCards'
const NOTIFICATION_KEY = 'Flashcard:notifications';

// export function fetchData() {
//   return AsyncStorage.getItem(STORAGE_KEY)
// }

const createNotification = () => {
  return {
    title: "Take a Quiz!",
    body: "👋 Don't forget to take a quiz today",
    ios: {
      sound: true
    },
    android: {
      sound: true,
      priority: "high",
      sticky: false,
      vibrate: true
    }
  };
};

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
                        body: "👋 Don't forget to take a quiz today!",
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




// import notifee, {TriggerType} from '@notifee/react-native';

// export async function onCreateTriggerNotification(receivedTime) {
//   const channelId = await notifee.createChannel({
//     id: 'daily-remainder',
//     name: 'Channel for the daily notifications',
//   });
//   const date = new Date(receivedTime);
//   const hours = date.getHours();
//   const minutes = date.getMinutes();
//   const currentDate = new Date(Date.now());
//   currentDate.setHours(hours);
//   currentDate.setMinutes(minutes);

//   // Create a time-based trigger
//   const trigger = {
//     type: TriggerType.TIMESTAMP,
//     timestamp: currentDate.getTime(), // fire at a set time
//     repeatFrequency: 'DAILY', // repeat daily
//   };

//   // Create a trigger notification
//   try {
//     await notifee
//       .createTriggerNotification(
//         {
//           title: 'Remember to revise your decks 😎👍🙌🐱‍🏍',
//           body: `Check out the decks you have to revise 👀✔✨🐱‍👤`,
//           android: {
//             channelId: channelId,
//           },
//         },
//         trigger,
//       )
//       .catch(error => {
//         console.log('time must be from the future', error);
//       });
//   } catch (error) {
//     // console.log('time must be from the future -->', error);
//   }
// }

// export async function cancelNotification(notificationId) {
//   await notifee.cancelNotification(notificationId);
// }
