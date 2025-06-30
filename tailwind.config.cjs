// tailwind.config.cjs
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            // Define your custom colors for the futuristic dark theme
            colors: {
                'space-dark': '#0A0A1F', // Very dark background
                'space-blue': '#4A4A8A', // Muted blue for accents
                'space-purple': '#7A4A8A', // Muted purple for accents
                'star-light': '#E0E0F0', // Light color for text and stars
                'accent-blue': '#89CFF0', // Brighter blue for highlights
                'accent-purple': '#BB86FC', // Brighter purple for highlights
            },
            fontFamily: {
                // Inter is loaded via Google Fonts in Layout.astro
                sans: ['Inter', 'sans-serif'],
            },
            animation: {
                'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
                'fade-in': 'fadeIn 0.8s ease-out forwards',
            },
            keyframes: {
                fadeInUp: {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(20px)'
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0)'
                    },
                },
                fadeIn: {
                    '0%': {
                        opacity: '0',
                    },
                    '100%': {
                        opacity: '1',
                    },
                },
            },
            typography: (theme) => ({
                DEFAULT: {
                    css: {
                        color: theme('colors.star-light'),
                        h1: {
                            color: theme('colors.accent-blue'),
                        },
                        h2: {
                            color: theme('colors.accent-purple'),
                        },
                        h3: {
                            color: theme('colors.accent-blue'),
                        },
                        h4: {
                            color: theme('colors.accent-purple'),
                        },
                        strong: {
                            color: theme('colors.accent-blue'),
                        },
                        code: {
                            color: theme('colors.accent-purple'),
                        },
                        'code::before': {
                            content: '""',
                        },
                        'code::after': {
                            content: '""',
                        },
                    },
                },
                invert: {
                    css: {
                        color: theme('colors.star-light'),
                        h1: {
                            color: theme('colors.accent-blue'),
                        },
                        h2: {
                            color: theme('colors.accent-purple'),
                        },
                        h3: {
                            color: theme('colors.accent-blue'),
                        },
                        h4: {
                            color: theme('colors.accent-purple'),
                        },
                        strong: {
                            color: theme('colors.accent-blue'),
                        },
                        code: {
                            color: theme('colors.accent-purple'),
                        },
                        'code::before': {
                            content: '""',
                        },
                        'code::after': {
                            content: '""',
                        },
                    },
                },
            }),
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
};
