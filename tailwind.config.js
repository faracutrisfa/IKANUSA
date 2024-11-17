import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";
import animated from "tailwindcss-animated";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            fontFamily: {
                poppins: ["Poppins", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                "light-blue": "#F3FAFD",
                "light-blue-hover": "#EDF8FC",
                "light-blue-active": "#DAF0F9",
                "normal-blue": "#87CEEB",
                "normal-blue-hover": "#7AB9D4",
                "normal-blue-active": "#6CA5BC",
                "dark-blue": "#659BB0",
                "dark-blue-hover": "#517C8D",
                "dark-blue-active": "#3D5D6A",
                "darker-blue": "#2F4852",
                "cust-grey": "#D9D9D9",
            },
        },
        container: {
            padding: {
                DEFAULT: "1rem",
                sm: "2rem",
                lg: "4rem",
                xl: "5rem",
                "2xl": "6rem",
            },
        },
    },

    plugins: [forms, animated],
};
