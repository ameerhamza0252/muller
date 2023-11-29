import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/views/**/*.{js,ts,jsx,tsx,mdx}',
    './src/views/**/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    fontFamily:{
      'Helvectica':"Helvectica Neue"
    },
    colors:{
      'brand':'#00918E',
      'black':'#221E1F',
      'grey-2':'#595657',
      'B-Yellow':'#FBBA00'
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    screens:{
      'md':'700px',
      'lg':'1180px',
      'xl':'1900px',
    }
  },
  plugins: [],
}
export default config
