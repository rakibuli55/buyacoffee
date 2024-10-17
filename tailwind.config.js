/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'bodyColor':'#fdfffa',
        'primaryColor':'#99FF6D',
        'headingColor':"#222",
        'headingColor2':'#717171',
        'paraColor':'rgba(80, 80, 80, 0.40)',
        'paraDark':'rgba(80, 80, 80, 0.70)',
        'paraDeep':'rgba(80, 80, 80, 0.70)',
        'heroColor':'#afafa',
        'primaryLight':"#E4FFCA",
        'fotterBg' :'#081409',
      },
      fontFamily:{
        'jakarta':"'Plus Jakarta Sans', serif"
      },
      container:{
        center:true,
        padding:"24px",
        screens:{
          '2xl':'1370px',
        }
      }
    },
  },
  plugins: [],
}

