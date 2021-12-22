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
