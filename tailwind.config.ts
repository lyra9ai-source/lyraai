import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        w: {
          bg: '#121212',
          'bg-secondary': '#1c1c1c',
          'bg-tertiary': '#222222',
          card: '#1e1e1e',
          'card-hover': '#292929',
          surface: '#2b2b2b',
          cream: '#faf9f6',
          'cream-80': '#faf9f6cc',
          'cream-60': '#faf9f699',
          'cream-50': '#faf9f680',
          'cream-30': '#faf9f64d',
          'cream-20': '#faf9f633',
          'cream-10': '#faf9f61a',
          'cream-5': '#faf9f60d',
          text: '#afaeac',
          muted: '#868584',
          faint: '#666469',
          dim: '#454545',
          border: '#2b2b2b',
          'border-light': '#353534',
          green: '#1ca05a',
          'green-light': '#34b298',
          'green-dim': '#1ca05a33',
          teal: '#34b298',
          blue: '#0099ff',
          warm: '#bd9f65',
        },
      },
      animation: {
        'marquee': 'marquee 35s linear infinite',
        'marquee-reverse': 'marquee-reverse 35s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 4s ease-in-out infinite',
        'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
