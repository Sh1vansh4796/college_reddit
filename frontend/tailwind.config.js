/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                dark: {
                    50: "#f8f9fa",
                    100: "#f1f1f3",
                    200: "#818384",
                    300: "#575869",
                    400: "#343536",
                    500: "#272729",
                    600: "#1a1a1b",
                    700: "#030303",
                },
            },
        },
    },
    plugins: [],
}
