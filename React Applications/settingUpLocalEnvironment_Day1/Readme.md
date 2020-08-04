DAY 1

Objective: Launch a simple React application after setting up a local development environment.

These are the tools you need to install to begin --
1. A code Editor ( i prefer VS Code) ,
2.Node .js ,
3. npm.

Creating an App
You’ll need to have Node 8.16.0 or Node 10.16.0 or later version on your local development machine (but it’s not required on the server). You can use nvm (macOS/Linux) or nvm-windows to switch Node versions between different projects.

To create a new app, you may choose one of the following methods:
1. npx
npx create-react-app my-app
(npx is a package runner tool that comes with npm 5.2+ and higher, see instructions for older npm versions)

2. npm
npm init react-app my-app
npm init <initializer> is available in npm 6+

3. Yarn
yarn create react-app my-app
yarn create <starter-kit-package> is available in Yarn 0.25+

It will create a directory called my-app inside the current folder.
Inside that directory, it will generate the initial project structure and install the transitive dependencies:

my-app
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    └── serviceWorker.js
    └── setupTests.js

No configuration or complicated folder structures, only the files you need to build your app.
Once the installation is done, you can open your project folder:

cd my-app

Inside the newly created project, you can run some built-in commands:

npm start or yarn start
Runs the app in development mode.
Open http://localhost:3000 to view it in the browser.

The page will automatically reload if you make changes to the code.
You will see the build errors and lint warnings in the console.
