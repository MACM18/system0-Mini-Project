/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Green1: "#007FFF",
        Green2: "#7D83FF",
        Green3: "#D4DCFF",
        Yellow: "#FFD700",
        Red: "#FF0000",
        Gray: "#D9D9D9",
      },
      padding: {
        15: "15px",
        5: "5px",
        10: "10px",
        30: "30px",
      },
      gap: {
        5: "5px",
        15: "15px",
        10: "10px",
        30: "30px",
      },
    },
  },
  plugins: [],
};
