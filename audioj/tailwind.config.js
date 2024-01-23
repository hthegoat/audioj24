module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(236deg, rgba(0,0,0,1) 0%, rgba(255,0,0,1) 46%, rgba(70,37,127,1) 88%, rgba(0,0,0,1) 98%)',
      },

    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}