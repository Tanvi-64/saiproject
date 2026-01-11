/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "#e5e7eb",
        background: "#fafbfc",
        foreground: "#1f2937",
        card: "#ffffff",
        primary: {
          DEFAULT: "#1f2937",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#f3f4f6",
          foreground: "#1f2937",
        },
        accent: {
          DEFAULT: "#ff6b35",
          foreground: "#ffffff",
        },
        muted: {
          DEFAULT: "#f0f1f3",
          foreground: "#6b7280",
        },
        destructive: "#ef4444",
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '0.5rem',
      },
    },
  },
  plugins: [],
}

