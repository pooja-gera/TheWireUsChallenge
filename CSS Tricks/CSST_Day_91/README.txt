# Tailwind

Tailwind CSS is a highly customizable, low-level CSS framework that gives you all of the building blocks you need to build bespoke designs
 without any annoying opinionated styles you have to fight to override.

 Installing options:
 1.Install Tailwind via npm
 # Using npm
npm install tailwindcss

# Using Yarn
yarn add tailwindcss

2.Add Tailwind to your CSS
@tailwind base;

@tailwind components;

@tailwind utilities;

3.Create your Tailwind config file
npx tailwindcss init

module.exports = {
  theme: {},
  variants: {},
  plugins: [],
}

4.Process your CSS with Tailwind
module.exports = {
  plugins: [
    // ...
    require('tailwindcss'),
    require('autoprefixer'),
    // ...
  ]
}

5.Using Tailwind CLI
npx tailwindcss build styles.css -o output.css
