<template>
	<div v-if="notify">
		<div id="notification-box" class="notification-box">
			<a id="notification-close" href="#" title="close">x</a>

			<div class="notification-data">
				<div class="notification-title">
					<p id="title">
						{{ from }}
						<br />
						<span id="title" style="font-size: 12px; font-weight: 600;">{{ title }}</span>
					</p>
				</div>

				<div class="notification-notice">
					<p id="subject">{{ subject }}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import {defineComponent} from "vue"
	import firebase from "firebase/app"
	import "firebase/messaging"

	export default defineComponent({
		name: "NotificationBox",

		components: {},

		data() {
			return {
				title: "",
				from: "",
				subject: "",
				userimg: "",
				messaging: firebase.messaging(),
				currentMessage: "",
				notify: false
			}
		},

		methods: {
			receiveMessage() {
				try {
					this.messaging.onMessage((payload) => {
						// debugger
						this.currentMessage = payload
						console.log(this.currentMessage)
						console.log("Message received. ", payload)
						let message
						message =
								payload.data.username + ":\n\n" + payload.data.message
						this.setNotificationBoxForm(
								payload.data.shipmentWallNumber,
								payload.data.username,
								payload.data.message
						)
						console.log(message)
						this.notify = true
						setTimeout(() => {
							this.notify = false
						}, 3000)
					})
				} catch(e) {
					console.log(e)
				}
			},

			setNotificationBoxForm(title, from, subject) {
				this.title = title
				this.from = from
				this.subject = subject
			}
		},

		created() {
			this.receiveMessage()
		},

		validations: function() {
			return {}
		},

		computed: {}
	})
</script>

<style>
	.notification-box {
		background-color: #fff;
		bottom: 10px;
		display: flex;
		height: 100px;
		position: absolute;
		right: 5px;
		width: 30%;
		z-index: 999;
	}

	#notification-close {
		color: #777;
		cursor: pointer;
		font: 14px;
		position: absolute;
		right: 5px;
		text-decoration: none;
		text-shadow: 0 1px 0 #fff;
		top: 2px;
		z-index: 10;
	}

	.notification-data {
		margin: 0 20px;
	}

	.notification-data p {
		margin: 10px 0;
	}

	.notification-notice p {
		font-size: 14px;
		font-weight: 400;
	}

	.notification-title p {
		font-size: 18px;
		font-weight: bold;
		line-height: 18px;
	}

	.notification-time small {
		font-size: 12px;
	}

	.notification-wall-number small {
		font-size: 8px;
	}

	img {
		width: 30px;
	}
</style>