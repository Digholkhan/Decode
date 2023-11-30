/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth:{
        'container':'1420px',
      },
      colors: {
        "primary":'#60E1CB'
      },
      backgroundImage: {
        'bannerImg': "url('src/assets/banner.png')",
      }

    },
  },
  plugins: [],
}