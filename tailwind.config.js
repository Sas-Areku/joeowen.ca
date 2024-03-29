/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'xs': '540px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1920px',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'vertical': "url('../../public/background-mobile.jpg')",
        'horizontal': "url('../../public/background-desktop.jpg')",
      },
      backgroundColor: {
        'custom-blue': '#002440',
        'custom-light-blue': '#004880',
        'custom-green': '#103008',
        'custom-light-green': '#20600F'
      },
      maxWidth: {
        'xxxxs': '128px',
        'xxxs': '160px',
        'xxs': '240px',
      },
      maxHeight: {
        'xxxs': '160px',
        'xxs': '240px',
      }
    },
  },
  plugins: [],
}
