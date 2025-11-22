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
                primary: '#2C3E50',      // azul cobalto
                secondary: '#E67E22',    // laranja queimado
                accent: '#9B59B6',       // violeta
                bg: '#F5F7FA',           // fundo claro
                textPrimary: '#2D2D2D', // texto principal
                textSecondary: '#7F8C8D', // texto secundário
                success: '#27AE60',      // verde ação
                error: '#E74C3C',        // vermelho erro
                // opcional dark mode colors
                dark: {
                    primary: '#1A252F',
                    bg: '#1E1E1E',
                    textPrimary: '#E0E0E0',
                }
            }
        },
    },
    plugins: [],
}
