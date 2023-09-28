/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                serif: ['Lora', 'serif'],
                mono: ['Inconsolata', 'monospace'],
            },
            colors: {
                violet: '#a445ed',
                white: '#f5f5f5',
                black: '#050505',
                lightGray: '#f1f1f1',
            },
            backgroundImage: {
                violet: 'linear-gradient( 135deg, hsl(274deg, 82%, 60%), hsl(274deg, 82%, 60%) )',
                gray: 'linear-gradient( 135deg, hsl(0deg, 0%, 46%), hsl(0deg, 0%, 46%) )',
                check: 'url(./src/assets/icons/icon-arrow-down.svg)',
            },
        },
    },
    plugins: [],
};
