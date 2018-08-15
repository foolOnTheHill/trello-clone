# Trello Clone Frontend

The frontend app for the Trello Clone project. It was developed using: `Angular 5` with packages for `Bootstrap 4` (for styles) and `Dragula` (for Drag&Drop utils).

## Architecture and Organization

The main structure of the project is organized as follows:

```
|- /src
|- |- /app
|- |- |- /dashboard
|- |- |- /login
|- |- |- /register
|- |- |- /guards
|- |- |- /services
|- |- /common
|- |- |- /error
|- |- |- /interfaces
|- |- |- /types
|- |- /environments
|- index.html
```

Within ``/src/app`` we have the custom modules used at the app along with it's shared services such as ``AuthGuard``, ``UserService`` and ``BoardsService``.

Within ``/src/common`` we have functions, interfaces and types used throughout the whole app.

Within ``/src/environments`` we define our constants such as ``backendUrl`` with the link to our Backend API Endpoints.

## Development information

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.5.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
