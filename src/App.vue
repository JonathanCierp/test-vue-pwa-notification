<template>
	<img alt="Vue logo" src="./assets/logo.png" />
	<HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
	<div>
		{{ token }}
	</div>
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
			const token = ref("")

			//@ts-ignore
			if (!("Notification" in window)) {
				//@ts-ignore
				alert("This browser does not support desktop notification")
				//@ts-ignore
			} else if (Notification.permission === "granted") {
				//@ts-ignore
				firebase.messaging().getToken().then(tokenF => {
					token.value = tokenF
				})
				//@ts-ignore
			} else if (Notification.permission !== "denied") {
				//@ts-ignore
				Notification.requestPermission().then(function (permission: any) {
					//@ts-ignore
					if (permission === "granted") {
						//@ts-ignore
						firebase.messaging().getToken().then(tokenF => {
							token.value = tokenF
						})
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