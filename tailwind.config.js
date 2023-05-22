/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-background': "linear-gradient(270deg, transparent, rgba(0,0,0,0.7)), url('./travel.webp')",
        'faq-background': "linear-gradient(180deg, transparent, rgba(0,0,0,0.7)), url('./plane.webp')",
        'about-background': "linear-gradient(180deg, transparent, rgba(0,0,0,0.7)), url('./about.webp')"
    }
  },
  plugins: [],
}
}

