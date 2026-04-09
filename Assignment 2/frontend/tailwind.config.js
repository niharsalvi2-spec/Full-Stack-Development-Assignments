/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          light: '#eff6ff', // blue-50
          DEFAULT: '#3b82f6', // blue-500
          dark: '#1d4ed8', // blue-700
          text: '#1e293b', // slate-800
          muted: '#64748b' // slate-500
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
