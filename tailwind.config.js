/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class', // enable class-based dark mode
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#1A1A1A',      // Dark High Contrast
                secondary: '#E6B8A2',    // Muted Clay
                accent: '#A8DADC',       // Soft Blue
                bg: '#F9F7F2',           // Warm Neutral
                surface: '#FFFFFF',      // White for cards
                textPrimary: '#1A1A1A',
                textSecondary: '#4A4A4A',
                success: '#27AE60',
                error: '#E74C3C',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Outfit', 'sans-serif'],
            },
            boxShadow: {
                'neu': '5px 5px 10px #d1d1d1, -5px -5px 10px #ffffff',
                'neu-pressed': 'inset 5px 5px 10px #d1d1d1, inset -5px -5px 10px #ffffff',
            }
        },
    },
    plugins: [],
}
