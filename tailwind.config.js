/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
    darkMode: 'class',
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', ...defaultTheme.fontFamily.sans],
                serif: ['Lora', ...defaultTheme.fontFamily.serif],
                mono: ['Inconsolata', ...defaultTheme.fontFamily.mono],
            },
            colors: {
                violet: '#a445ed',
                white: '#f5f5f5',
                black: '#050505',
                gray: '#757575',
                lightGray: '#f4f4f4',
                darkGray: '#1f1f1f',
                red: '#ff5252',
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
