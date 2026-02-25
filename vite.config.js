import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
//this configuration file tells vite how to build our project
export default defineConfig({
  plugins: [
    react(), //this plugin helps vite understand react code 
    tailwindcss() //this connects tailwindcss with vite
  ], 
  server: {
    port: 3000, //our frontend will run on port 3000
    open: true, //automatically open browser when server starts
  },

})
