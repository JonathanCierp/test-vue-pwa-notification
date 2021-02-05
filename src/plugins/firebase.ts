import firebase from "firebase/app"
import "firebase/messaging"

// // Initialize Firebase
firebase.initializeApp({
  apiKey: "AIzaSyCEGAdrzPEMlikaQc3p4EK5NH8eOXiNKW0",
  authDomain: "test-vue-pwa-notification.firebaseapp.com",
  projectId: "test-vue-pwa-notification",
  storageBucket: "test-vue-pwa-notification.appspot.com",
  messagingSenderId: "224931150973",
  appId: "1:224931150973:web:1713b3e414b2f1af2f8514",
  measurementId: "G-2648EVM8FR"
})

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/firebase-messaging-sw.js", {scope: "firebase-cloud-messaging-push-scope"})
      .then(function (serviceWorkerRegistration) {
        console.log("Service Worker Registered")
        firebase.messaging().getToken({
          serviceWorkerRegistration
        })
      })
}