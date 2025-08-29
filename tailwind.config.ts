import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4A6B4D',
        secondary: '#8FBC8F',
        accent: '#F4A460',
        background: '#F8F7F2',
        'text-primary': '#333',
        'border-gray': '#ddd',
      },
      borderRadius: {
        'custom': '8px',
      },
      boxShadow: {
        'custom': '0 2px 8px rgba(0,0,0,0.1)',
      }
    },
  },
  plugins: [],
}
export default config