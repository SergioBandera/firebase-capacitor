import { initializeApp } from "firebase/app";

import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";
import { getMessaging } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyBCDRgp7mx0i6fOp1Fchq3a3yA_DyBMLeE",
  authDomain: "fir-capacitorsa.firebaseapp.com",
  databaseURL:
    "https://fir-capacitorsa-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "fir-capacitorsa",
  storageBucket: "fir-capacitorsa.appspot.com",
  messagingSenderId: "677691837761",
  appId: "1:677691837761:web:06146ae2def38cb31665c0",
};

// const firebaseConfig = {
//   apiKey: process.env.API_KEY,
//   authDomain:process.env.AUTH_DOMAIN,
//   databaseURL:
//   process.env.DATABASE_URL,
//   projectId: process.env.PROJECT_ID,
//   storageBucket: process.env.STORAGE_BUCKET,
//   messagingSenderId: process.env.MESSAGIN_SENDER_ID,
//   appId: process.env.APP_ID,
// };

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const messaging = getMessaging(app);

// messaging.onBackgroundMessage (payload => {
//   console.log("recibiste una notitifacion ausente")
//     const notificationTitle= payload.notification.title;
//     const notificationOptions = {
//         body: payload.notification.body,
//     }

//     return self.registration.showNotification(
//       notificationTitle,
//       notificationOptions
//   )
// })
