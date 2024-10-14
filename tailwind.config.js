/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Orange: "hsl(26, 100%, 55%)",
        "Pale-Orange": "hsl(25, 100%, 94%)",
        "Very-Dark-Blue": "hsl(220, 13%, 13%)",
        "Dark-Grayish-Blue": "hsl(219, 9%, 45%)",
        "Grayish-Blue": "hsl(220, 14%, 75%)",
        "Light-Grayish-Blue": "hsl(223, 64%, 98%)",
      },
    },
  },
  plugins: [],
};
