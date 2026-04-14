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
                primary: '#2F4858',      // Deep Slate Blue
                secondary: '#5FA8A0',    // Soft Teal
                accent: '#C9A66B',       // Muted Sand
                bg: '#F7F8FA',           // Soft Neutral
                surface: '#FFFFFF',
                textPrimary: '#1F2D36',
                textSecondary: '#5B6B76',
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
