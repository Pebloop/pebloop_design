/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    darkMode: ['class', "[class~='dark']"],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#52a6de',
                    dark: '#4595cb',
                    light: '#7fbce8',
                    darker: '#367fb0',
                    lighter: '#a8d1f0',
                },
                darkMode: {
                    DEFAULT: '#2a2a2a',
                    dark: '#1f1f1f',
                    light: '#343434',
                    darker: '#141414',
                    lighter: '#3c3c3c',
                },
                darkmode_elevated: {
                    DEFAULT: '#464646',
                    dark: '#333333',
                    light: '#5b5b5b',
                    darker: '#1b1b1b',
                    lighter: '#6e6e6e',
                },
                lightmode: {
                    DEFAULT: '#f5f5f5',
                    dark: '#e0e0e0',
                    light: '#ffffff',
                    darker: '#c2c2c2',
                    lighter: '#ffffff',
                },
                lightmode_elevated: {
                    DEFAULT: '#d7d7d7',
                    dark: '#c5c5c5',
                    light: '#e3e3e3',
                    darker: '#b4b4b4',
                    lighter: '#ebebeb',
                },
            },
        },
    },
    plugins: [],
}

