importScripts("https://www.gstatic.com/firebasejs/8.2.5/firebase-app.js")
importScripts("https://www.gstatic.com/firebasejs/8.2.5/firebase-messaging.js")
console.log(1)
try {
	firebase.initializeApp({
		apiKey: "AIzaSyCEGAdrzPEMlikaQc3p4EK5NH8eOXiNKW0",
		authDomain: "test-vue-pwa-notification.firebaseapp.com",
		projectId: "test-vue-pwa-notification",
		storageBucket: "test-vue-pwa-notification.appspot.com",
		messagingSenderId: "224931150973",
		appId: "1:224931150973:web:1713b3e414b2f1af2f8514",
		measurementId: "G-2648EVM8FR"
	})
	const messaging = firebase.messaging()

	messaging.setBackgroundMessageHandler(function(payload) {
		const title = payload.data.username
		let iconPath = ""
		const options = {
			body: payload.data.message,
			icon: "/img/logoPWA.png"
		}

		return self.registration.showNotification(title, options)
	})
} catch(err) {
	console.log(err)
}