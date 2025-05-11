/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
      fontFamily: {
        boorsok: ['boorsok'],
        aloja: ['Aloja'],
        BrickSans: ['BrickSans'],
        OpenSans: ['OpenSans-1'],
        Sansita: ['Sansita'],
        SansitaRegular: ['Sansita-Regular'],
      },
      colors:{
        blue: {
          50:'#DFDFF0', 
          75:'#DFDFF2',
          100:'#F0F2FA',
          200:'#010101',
          300:'#4FB7DD',
        },
        violet: {
          300:'#5724FF',
        },
        yellow: {
          100:'#8E983F',
          300:'#EDFF66',
        },
        cyan:'#0cc0df'
    },
  },
  plugins: [],
}

}