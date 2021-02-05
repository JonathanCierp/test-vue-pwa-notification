import { createApp } from "vue"
// TypeScript error? Run VSCode command
// TypeScript: Select TypeScript version - > Use Workspace Version
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
});

navigator.serviceWorker.register("firebase-messaging-sw.js", { scope: "firebase-cloud-messaging-push-scope" })
    .then(async (serviceWorkerRegistration) => {
      await firebase.messaging().getToken({ serviceWorkerRegistration });
    })
    .catch(err => {
      console.log(err)
    })

// fiebase configs end

import App from "./App.vue"

createApp(App).mount("#app")
