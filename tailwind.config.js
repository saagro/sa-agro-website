/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                agro: {
                    green: "#2D5A27",
                    forest: "#1B3C18",
                    earth: "#4A3728",
                    grain: "#E6B325",
                    sand: "#94A3B8", // Subtle gray for accents
                    cream: "#FEFCE8", // Light background
                }
            },
            fontFamily: {
                primary: ['Inter', 'sans-serif'],
                display: ['Outfit', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
