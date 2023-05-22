/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-background': "linear-gradient(270deg, transparent, #98bfd7), url('./travel.webp')",
        'faq-background': "url('./plane.webp')"
    }
  },
  plugins: [],
}
}

