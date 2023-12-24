import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'primary': '#68e2fa',
        'textBody': '#cecece', 
      }
    },
    fontFamily: {
      'primary': ['Gotham', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'San Francisco', 'Roboto', 'Segoe UI', 'Ubuntu', 'Helvetica Neue', 'sans-serif']
    },
    animation: {
      'text-slide': 'text-slide 12.5s cubic-bezier(0.83, 0, 0.17, 1) infinite',
    },
    keyframes: {
      'text-slide': {
          '0%, 16%': {
              transform: 'translateY(0%)',
          },
          '20%, 36%': {
              transform: 'translateY(-16.66%)',
          },
          '40%, 56%': {
              transform: 'translateY(-33.33%)',
          },
          '60%, 76%': {
              transform: 'translateY(-50%)',
          },
          '80%, 96%': {
              transform: 'translateY(-66.66%)',
          },
          '100%': {
              transform: 'translateY(-83.33%)',
          },
      },                    
  },
  },
  plugins: [],
}
export default config
