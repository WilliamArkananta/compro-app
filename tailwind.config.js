/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'accent-primary':'#3399FF',
        'accent-secondary':'#003366',
        'background': '#F1F5F9',
        'content': '#333333',
        
      },
      fontSize:{
        'h1':'2.25rem',
        'h2':'1.875rem',
        'h3':'1.5rem',
        'h4':'1.25rem',
        'body':'1rem',
        'xs':'.75rem',
      },
      backgroundImage:{
        'glass-bg': 'linear-gradient(137deg, rgba(172, 214, 255, 0.12) 0%, rgba(172, 214, 255, 0.24) 98.45%)',
        'linear-main': 'linear-gradient(142deg, #0575E6 18.43%, #021B79 86.59%)',
        'linear-accent': 'linear-gradient(236deg, #989FE0 19.64%, #2D3AAB 51.97%, #2841FB 84.3%)',
        'radial-main': 'radial-gradient(85.4% 85.4% at 32.7% 18.1%, #6CF 0%, #479AD1 35.58%, #0B4E84 70.5%, #036 100%)',
        'button-hover':'linear-gradient(302deg, #0575E6 15.54%, #021B79 81.54%)',
        
      },
      backdropBlur: {
        '6': '6px'
      },
      boxShadow:{
        'button':'2px 5px 24px 0px rgba(0, 0, 0, 0.20)'
      },
      animation:{
        'spin-slow':'spin 20s linear infinite',
        'floating':'float 5s ease infinite',
        'infinite-scroll':'infinite-scroll 40s linear infinite',
      },
      keyframes:{
        float:{
          '0%':{transform: 'translateY(-2%)'},
          '50%':{transform: 'translateY(2%)'},
          '100%':{transform: 'translateY(-2%)'},

        },
        'infinite-scroll':{
          '0%':{transform: 'translateX(0)'},
          '100%':{transform: 'translateX(calc(-50%-20px))'},
        }
      }
    },
  },
  plugins: [],
}

