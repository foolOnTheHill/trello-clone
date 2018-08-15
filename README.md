# Trello Clone

Full-stack Web App that replicates some of [Trello](https://trello.com/)'s functionalities such as Boards, Lists, Cards and Drag N' Drop of Cards between Lists.

## Requirements

This project was developed using:

- [Node.js and npm](https://docs.npmjs.com/getting-started/installing-node)
- [MongoDB](https://docs.mongodb.com/manual/installation/)
- [Angular 5](https://angular.io/guide/quickstart)
- [Nest.js](https://nestjs.com/)

## Architecture and Organization

Our app is splitted in ``Client`` and ``Server``. The architecture of each one and future improvements are explained at their respectives ``README`` files.

## Running the project

- Download the project's source code.
- Install the Client and Server dependencies by running ``npm install`` at both ``/server`` and ``/client`` folders.
- Modify ``/server/src/common/config/config.ts`` file to your preferences (pay special attention to the MongoDB's Connection URL).
- At ``/server`` run ``npm run start`` to start the app's Server.
- Modify ``/server/src/environments/environment.ts`` and ``/server/src/environments/environment.prod.ts`` (pay special attention to the Backend URL, pointing to where our Server is up and running).
- At ``/client`` run ``ng serve`` to start our Client app in development mode.
