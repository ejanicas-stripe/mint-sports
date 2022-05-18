# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm install`
Installs the dependencies in the local `node_modules` folder
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
## Environment Variables

Your project can consume variables declared in your environment as if they were declared locally in your JS files. By default you will have `NODE_ENV` defined for you, and any other environment variables starting with `REACT_APP_`.

First configure the environment variables:

Inside the repository you will find an example for your .env file. Make a copy of .env.example at the same level and rename it to .env.

For example:

```
cp .env.example .env
```
Replace the placeholder variable in the .env file with your server URL:

```
REACT_APP_SERVER_URL=<replace-with-your-server-url>
```

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).