/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
    primary: '#4f46e5',
    bg: '#020617',
    surface: '#ffffff',
    muted: '#64748b',
    border: '#e5e7eb',
  },
  borderRadius: {
    lg: '12px',
    xl: '16px',
  },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
