import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Allow the server to be accessible on your local network
    port: 5173, // Optional: Ensure the port remains consistent
  },
})