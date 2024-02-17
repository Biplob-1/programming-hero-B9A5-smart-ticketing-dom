# Programmming Hero Paribahan

Developing the Future of Transportation: Where Innovation Meets Mobility

## Coach -009 | Web

<img src="./Landing Page Design.jpg" />

### Install Tailwind CSS
    npm install -D tailwindcss
    npx tailwindcss init

## Configure your template paths
 /** @type {import('tailwindcss').Config} */
    module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {},
    },
    plugins: [],
    }
## css/input.css

    @tailwind base;
    @tailwind components;
    @tailwind utilities;

package.json

    "scripts": {
    "build": "tailwindcss -i ./src/css/input.css -o ./src/css/output.css -w"
    }

## Terminal command 
    npm run build

## Install daisyUI
    npm i -D daisyui@latest

## Add daisyUI to your tailwind.config.js files:

    module.exports = {
    //...
    plugins: [require("daisyui")],
    }
