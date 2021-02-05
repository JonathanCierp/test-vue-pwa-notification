import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import { VitePWA } from "vite-plugin-pwa"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      manifest: {
        "name": "Test vue pwa notification",
        "short_name": "Test vue",
        "start_url": "index.html",
        "display": "standalone",
        "theme_color": "#0476F2",
        "background_color": "#fff",
        //@ts-ignore
        "gcm_sender_id": "224931150973",
        "icons": [
          {
            "src": "/img/logoPWA.png",
            "sizes": "144x144",
            "type": "image/png"
          }
        ]
      }
    })
  ]
})
