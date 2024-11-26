/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
   
    animation: {
      "border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
    },
    keyframes: {
      "border-beam": {
        "100%": {
          "offset-distance": "100%",
        },
      },
      backgroundImage: {
        "text-gradient":
          "linear-gradient(89.99deg, #EDA119 0.01%, #252525 71.79%)",
      },
    },
  },
  plugins: [],
};
