# Trello Clone Backend

The backend server for the Trello Clone project. It was developed using: `Nest.js` with `mongoose` package to handle MongoDB operations.

## Architecture and Organization

The main structure of the project is organized as follows:

```
|- /src
|- |- /modules
|- |- |- /app
|- |- |- /database
|- |- /common
|- |- |- /config
|- |- |- /pipes
|- |- |- /types
|- |- |- /util
```

Inside ``/src/modules/database`` we have a basic provider for our MongoDB database that handles connections.

Inside ``/src/modules/app`` we have a module that handles Auth operations, such as Login and Registration, and CRUD operations for Boards, Lists and Cards.

Our ``AppModule`` is structured as follows:

```
|- /app
|- |- /controllers
|- |- /dto
|- |- /interfaces
|- |- /providers
|- |- |- // MongoDB models for Boards, Lists and Cards
|- |- /schemas
|- |- |- // MongoDB schemas for Boards, Lists and Cards
|- |- /services
```

We have 2 controllers: one to handle Authentication and another to handle CRUD operations.

Our Authorization method uses JWT for protected requests (such as CRUD operations). The frontend app must send the user token as the ``Authorization`` field of the request's header.

To hash the user's passwords we use ``bcrypt`` package.

## Future improvements

There are some improvements that can be made to this project such as:

- Use environment variables for configuration;
- Use a better strategy for user Authentication and Authorization

## Development information

### Installation

```bash
$ npm install
```

### Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
npm run start:prod
```

### Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
