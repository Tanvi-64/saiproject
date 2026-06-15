/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '2xl': '1440px',
        '3xl': '1600px',
        '4xl': '1920px',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
        '10xl': '112rem',
      },
      colors: {
        border: "#e2e8f0",          // cool grey border
        background: "#ffffff",       // pure white
        foreground: "#0f172a",       // deep navy text
        card: "#ffffff",             // white cards
        primary: {
          DEFAULT: "#255899ff",        // deep navy (headers, footer, dark sections)
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#f1f5f9",        // faint cool grey (alternating sections)
          foreground: "#0f172a",
        },
        accent: {
          DEFAULT: "#0189C5",        // logo sky blue
          foreground: "#ffffff",
        },
        muted: {
          DEFAULT: "#f8fafc",        // lightest grey
          foreground: "#64748b",     // slate grey text
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

