const colors = require('tailwindcss/colors');

const gray = {
    50: colors.neutral[50],
    100: colors.neutral[100],
    200: colors.neutral[200],
    300: colors.neutral[300],
    400: colors.neutral[400],
    500: colors.neutral[500],
    600: colors.neutral[600],
    700: colors.neutral[700],
    800: colors.neutral[800],
    900: colors.neutral[900],
};

module.exports = {
    content: [
        './resources/scripts/**/*.{js,ts,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                header: ['"IBM Plex Sans"', '"Roboto"', 'system-ui', 'sans-serif'],
            },
            colors: {
                black: '#0a0e14',
                // Modern 3D gradient palette with vibrant accents
                primary: {
                    50: '#f0f4ff',
                    100: '#e0e9ff',
                    200: '#c7d9ff',
                    300: '#a4befd',
                    400: '#7c9ef9',
                    500: '#5b7cf6',
                    600: '#4856ed',
                    700: '#3940d4',
                    800: '#2f36ad',
                    900: '#272f8a',
                },
                accent: {
                    50: '#f5f8ff',
                    100: '#e8f1ff',
                    200: '#d4e5ff',
                    300: '#b8d1ff',
                    400: '#92b5ff',
                    500: '#6b93ff',
                    600: '#4d6bff',
                    700: '#3d52e8',
                    800: '#3140c4',
                    900: '#2a36a0',
                },
                gradient: {
                    start: '#6b93ff',
                    middle: '#4d6bff',
                    end: '#3140c4',
                },
                orange: colors.orange,
                gray: gray,
                neutral: {
                    50: colors.neutral[50],
                    100: colors.neutral[100],
                    200: colors.neutral[200],
                    300: colors.neutral[300],
                    400: colors.neutral[400],
                    500: colors.neutral[500],
                    600: colors.neutral[600],
                    700: '#1a1f28',
                    800: '#131820',
                    900: '#0a0e14',
                }
            },
            fontSize: {
                '2xs': '0.625rem',
            },
            transitionDuration: {
                250: '250ms',
            },
            borderColor: theme => ({
                default: theme('colors.neutral.400', 'currentColor'),
            }),
            backgroundImage: {
                'gradient-3d': 'linear-gradient(135deg, #6b93ff 0%, #4d6bff 50%, #3140c4 100%)',
            },
        },
    },
    plugins: [
        require('@tailwindcss/line-clamp'),
        require('@tailwindcss/forms')({
            strategy: 'class',
        }),
    ]
};
