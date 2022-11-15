importScripts("https://www.gstatic.com/firebasejs/9.10.0/firebase-app-compat.js")
importScripts("https://www.gstatic.com/firebasejs/9.10.0/firebase-messaging-compat.js")


const firebaseConfig = {
  apiKey: "AIzaSyC86UwhzkQlWCZHVvf16-88bwGCqzGssg8",
  authDomain: "prueba-capacitor-95fa7.firebaseapp.com",
  databaseURL: "https://prueba-capacitor-95fa7-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "prueba-capacitor-95fa7",
  storageBucket: "prueba-capacitor-95fa7.appspot.com",
  messagingSenderId: "296633044452",
  appId: "1:296633044452:web:1096910ab53520313b8bf1",
  measurementId: "G-CYLGP03WW9"
};


const app = firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging(app);

messaging.onBackgroundMessage(payload => {
  console.log("recibiste una notitifacion ausente")
    const notificationTitle= payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
    }

    return self.registration.showNotification(
      notificationTitle, 
      notificationOptions
  )
})