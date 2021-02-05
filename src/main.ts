import { createApp } from "vue"
// TypeScript error? Run VSCode command
// TypeScript: Select TypeScript version - > Use Workspace Version
import "./plugins/firebase.ts"
import App from "./App.vue"

createApp(App).mount("#app")
