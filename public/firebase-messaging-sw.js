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

firebase.messaging.setBackgroundMessageHandler((payload) => {
	const title = "Hello world!"
	const notificationOptions = {
		body: "azd",
		icon: "/img/logoPWA.png"
	}

	return self.registration.showNotification(title,
		notificationOptions)
})