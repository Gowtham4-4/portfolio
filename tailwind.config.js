module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // make sure this matches your file structure
  ],
  theme: {
    extend: {
      keyframes: {
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        gradientShift: "gradientShift 20s ease infinite",
      },
      backgroundSize: {
        "200%": "200% 200%",
      },
    },
  },
  plugins: [],
};
