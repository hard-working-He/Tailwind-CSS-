/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',//dark theme
  content: ["./src/**/*.{html,js}"],
  
   presets: [ 
    require('./tailwind.preset.js')
  ],
   plugins: [ 
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
  theme: {
    extend: {
      textColor: {
        primary: '#1D2129',
        regular: '#4E5969',
        secondary: '#86909C',
        disabled: '#C9CDD4',
      }
    },
  },
  plugins: {
    'tailwindcss/nesting': {}, 
    tailwindcss: {},
    autoprefixer: {},
  },
  
  plugins: [ ],
}

