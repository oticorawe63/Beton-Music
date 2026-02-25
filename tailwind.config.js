/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['"Plus Jakarta Sans"', 'sans-serif'],
            },
            colors: {
                background: '#050014',
                accent: '#7000FF',
                card: '#1A1A2E',
                textMuted: '#A0A0B0',
            },
            backgroundImage: {
                'glow-gradient': 'radial-gradient(circle at center, rgba(112, 0, 255, 0.4) 0%, rgba(5, 0, 20, 0) 70%)',
            }
        },
    },
    plugins: [],
}
