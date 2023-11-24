/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    darkMode: ['class', "[class~='dark']"],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#52a6de',
                    dark: '#3d8abd',
                    light: '#7fbce8',
                },
                darkMode: {
                    DEFAULT: '#2a2a2a',
                    dark: '#1f1f1f',
                    light: '#343434',
                },
                darkmode_elevated: {
                    DEFAULT: '#464646',
                    dark: '#333333',
                    light: '#5b5b5b',
                },
                lightmode: {
                    DEFAULT: '#f5f5f5',
                    dark: '#e0e0e0',
                    light: '#ffffff',
                },
                lightmode_elevated: {
                    DEFAULT: '#d7d7d7',
                    dark: '#c5c5c5',
                    light: '#e3e3e3'
                },
            },
        },
    },
    plugins: [],
}

