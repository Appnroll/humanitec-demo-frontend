+++
title = "Midgard-React"
+++

# Midgard-React

## Summary

Midgard-React is a [React](https://reactjs.org/) web app that implements the core features of [Midgard](https://docs.walhall.io/walhall/midgard).

Midgard-React is your **app root repository.** When you create a [Walhall app](https://docs.walhall.io/walhall), Walhall forks Midgard-React to your GitHub account and gives it the same name as your app. It comes pre-configured to communicate with your app's API via [BiFrost](https://docs.walhall.io/walhall/bifrost). This is where you develop your Walhall app.

Current React version: **v0.0.1.**

## Setup

### Initialize the app

To **initialize** the app:

`npm run init`

### Build app

-  Development environment: `npm run build`
-  Production environment: `npm run build-prod`

The build artifacts will be stored in the `dist/` directory.

### Run development server

`npm run start`

### Run tests

To **run tests** using [Jest](https://jestjs.io/): 

`npm run test`

## Features

### File tree

Within the `/src` directory, the following structure is used:

-  `/assets`: Assets to be used within the project.
-  `/clients`: Contains all the clients added to the project.
-  `/midgard`: 
    -  `/components`: Components that do not have routes assigned to them.
    -  `/layout`: Components related to the layout of the application.
    -  `/modules`: Functions that handle data.
    -  `/pages`: Components that have routes assigned to them.
    -  `/routes`: Variations to the standard route.
-  `/redux`: Contains the actions, reducers and sagas for the client.
    -  `/actions`: Actions and action types.
    -  `/reducers`: Reducers which must imported into the `index.js` file.
    -  `/sagas`: Sagas which must imported into the `index.js` file.
-  `/styles`: Contains styling variables.
-  `/ui-components`: Generic components related to the interface.

### Core interfaces

Midgard-React provides the following core user interfaces:

- **Login screen:** Uses the OAuth library from midgard-core for the OAuth password-flow authentication process with BiFrost.
- **Register screen:** A form where the user can register an account with the app. They will also be redirected to this screen after accepting an invitation from a super user.
- **User management:** A screen where an administrator can manage users, update their own profile, and handle permissions in the app.
- **Settings:** A screen for configuring app settings.

These can be found under `/src/midgard/pages`.

### Connection to BiFrost

A store is defined in the `/src/redux` directory and imported into the `index.js` file at the root.

Actions specified in `/src/redux/actions` can be called directly by components.

Sagas are defined in `/src/redux/sagas`. All sagas must be imported into the `index.js` file within this directory.
The services defined in `/src/midgard/modules` are called in the functions in these saga files.

The reducers in the `/src/redux/reducers` directory update the state with the responses from the server. All reducers should be imported into the `index.js` file within this directory.

### Http module

The Http module connects to the Http implementation in midgard-core and handles requests to the server.

### OAuth module

The OAuth module connects to the OAuth implementation in midgard-core and provides functionalities related to authentication, e.g., logging in using the password flow, logging out, retrieving and saving the access token.

Midgard uses the actions defined in `/src/redux/actions/Auth.actions.js` to access these functionalities within the components.

## License

Copyright &#169;2019 Humanitec GmbH.

This code is released under the Humanitec Affero GPL. See the **LICENSE** file for details.
