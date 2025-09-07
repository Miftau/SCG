/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // for App Router
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#091c50ff", // main shade
          light: "#091244ff",
          dark: "#1E3A8A",
        },
        secondary: {
          DEFAULT: "#cdc9d1ff",
          light: "#cdc9d1ff",
          dark: "#e0d9e6ff",
        },
        secondary2: "#F59E0B", // optional extra color
      },
      
    },
  },
  plugins: ["@tailwindcss/postcss"],
};
