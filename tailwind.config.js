/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: '#0b0b10',
        panel: 'rgba(255,255,255,0.03)',
        glass: 'rgba(255,255,255,0.06)',
        accent: '#3EE3D6',
  accent2: '#5AA8FF',
        muted: '#9CA3AF'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui']
      },
      borderRadius: {
        xl: '16px',
        lg: '12px'
      },
      boxShadow: {
        soft: '0 8px 30px rgba(8,7,16,0.6)',
        insetSoft: 'inset 0 1px 0 rgba(255,255,255,0.03)'
      }
    },
  },
  plugins: [],
};
