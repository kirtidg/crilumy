## About TailwindCSS

Tailwind CSS works by scanning all of your HTML files, JavaScript components, and any other templates for class names, generating the corresponding styles and then writing them to a static CSS file.

## Install node and npm first.

## Install tailwind using npm first using this command

npm install -D tailwindcss

## Initialize the tailwindcss configuration using this command

npx tailwindcss init

## Update tailwind.config.js file to search for all your html and js files

module.exports = {
  content: ["*"],  <!-- change this '["./src/**/*.{html,js}"]' to this '["*"]' it will select all your html and js files -->
  theme: {
    extend: {},
  },
  plugins: [],
}

## Create input css file for the tailwind components as src/input.css

@tailwind base;
@tailwind components;
@tailwind utilities;

<!-- add these components to the src/input.css file -->

## After completion of these steps run this command:

npx tailwindcss -i ./src/input.css -o ./dist/style.css --watch

<!-- It will generate output as style.css file which will be used in html files and it contains all the css for the classes which are used all over the application -->

## Contributing

Thank you for considering contributing to the tailwind CSS! The contribution guide can be found in the [Tailwind documentation](https://tailwindcss.com/docs/installation).

