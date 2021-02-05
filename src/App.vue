<template>
	<img alt="Vue logo" src="./assets/logo.png" />
	<HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
	{{ token }}
	<NotificationBox />
</template>

<script lang="ts">
	import { defineComponent } from "vue"
	import firebase from "firebase/app"
	import "firebase/messaging"
	import HelloWorld from "./components/HelloWorld.vue"
	import NotificationBox from "./components/NotificationBox.vue"

	export default defineComponent({
		name: "App",
		data() {
			return {
				token: ""
			}
		},
		components: {
			NotificationBox,
			HelloWorld
		},
		async created () {
			let token: string = ""

			if (!("Notification" in window)) {
				alert("This browser does not support desktop notification")
			} else if (Notification.permission === "granted") {
				this.token = await firebase.messaging().getToken()
			} else if (Notification.permission !== "denied") {
				Notification.requestPermission().then(async function (permission) {
					if (permission === "granted") {
						this.token = await firebase.messaging().getToken()
					}
					console.log(this.token)
					//prompt("zaezea", token)
				})
			}
			
			console.log(this.token)
			//prompt("zaezea", token)
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