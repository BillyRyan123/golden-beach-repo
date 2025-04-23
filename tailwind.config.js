/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        oswald: ['Oswald', 'sans-serif'],
        lora:['Lora' ,'serif'],
        poppins:['poppins', 'serif']
      },
    },
  },
  plugins: [],
}





