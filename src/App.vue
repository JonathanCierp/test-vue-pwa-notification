<template>
	<img alt="Vue logo" src="./assets/logo.png" />
	<HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
	{{ token }}
	<NotificationBox />
</template>

<script lang="ts">
	import { defineComponent, ref } from "vue"
	import firebase from "firebase/app"
	import "firebase/messaging"
	import HelloWorld from "./components/HelloWorld.vue"
	import NotificationBox from "./components/NotificationBox.vue"

	export default defineComponent({
		name: "App",
		components: {
			NotificationBox,
			HelloWorld
		},
		setup () {
			const token = ref(null)

			if (!("Notification" in window)) {
				alert("This browser does not support desktop notification")
			} else if (Notification.permission === "granted") {
				token.value = await firebase.messaging().getToken()
			} else if (Notification.permission !== "denied") {
				Notification.requestPermission().then(async function (permission) {
					if (permission === "granted") {
						token.value = await firebase.messaging().getToken()
					}
					console.log(token.value)
				})
			}
			console.log(token.value)

			return {
				token
			}
		}
	})
</script>

<style>
	#app {
		color: #2c3e50;
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		margin-top: 60px;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
	}
</style>