<template>
	<img alt="Vue logo" src="./assets/logo.png" />
	<HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
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
		components: {
			NotificationBox,
			HelloWorld
		},
		created () {
			firebase
				.messaging()
				.requestPermission()
				.then(() => {
					console.log("NOTIF PERMISSION GRANTED")
					return firebase
						.messaging()
						.getToken()
						.then(token => {
							console.log(token)
						})
				})
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