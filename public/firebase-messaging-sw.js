importScripts("https://www.gstatic.com/firebasejs/8.2.6/firebase-app.js")
importScripts("https://www.gstatic.com/firebasejs/8.2.6/firebase-messaging.js")

firebase.initializeApp({
	apiKey: "AIzaSyCEGAdrzPEMlikaQc3p4EK5NH8eOXiNKW0",
	authDomain: "test-vue-pwa-notification.firebaseapp.com",
	projectId: "test-vue-pwa-notification",
	storageBucket: "test-vue-pwa-notification.appspot.com",
	messagingSenderId: "224931150973",
	appId: "1:224931150973:web:1713b3e414b2f1af2f8514",
	measurementId: "G-2648EVM8FR"
})

firebase.messaging().setBackgroundMessageHandler((payload) => {
	console.log("[firebase-messaging-sw.js] Received background message ", payload)

	const data = payload.data
	const notificationTitle = data.title
	const notificationOptions = {
		body: data.body
	}

	return self.registration.showNotification(notificationTitle, notificationOptions)
})