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
                primary: '#1E3A8A',      // Trust Blue
                secondary: '#14B8A6',    // Calm Teal
                accent: '#F59E0B',       // Warm Highlight
                bg: '#F5F7FF',           // Light Indigo Tint
                surface: '#FFFFFF',
                textPrimary: '#0F172A',
                textSecondary: '#475569',
                success: '#27AE60',
                error: '#E74C3C',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Outfit', 'sans-serif'],
                serif: ['Playfair Display', 'Georgia', 'serif'],
            },
            boxShadow: {
                'neu': '5px 5px 10px #d1d1d1, -5px -5px 10px #ffffff',
                'neu-pressed': 'inset 5px 5px 10px #d1d1d1, inset -5px -5px 10px #ffffff',
            }
        },
    },
    plugins: [],
}
