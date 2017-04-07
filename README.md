# ClubManager

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Firebase
* Create firebase account ([firebase](https://firebase.google.com/))
* Create 'src/app/api-keys.ts' file to store Firebase API key with masterFirebaseConfig
* Import api-keys file in app.module file
* Import 'angularfire2' with AngularFireModule
* Export masterFirebaseConfig in app.module
* List 'AngularFireModule.initializeApp(firebaseConfig)' in @NgModule:imports array
* List 'src/app/api-keys.ts' in .gitignore file

## Planning

1. Configuration/dependencies
  * NPM (Development)
    * @angular/cli (Populates  an Angular application)
    * @angular/compiler-cli (Compiles TypeScript into JavaScript in which browsers can understand)
    * Jasmine - core, spec-reporter  (Behavior-driven development framework for testing JavaScript code)
    * Node (JavaScript runtime built on Chrome's V8 JavaScript engine)
    * ts-node (TypeScript execution environment for node)
    * typescript (A superset of JavaScript that compiles to clean JavaScript output)
    * codelyzer (Helps write consistent code, and discover potential errors)
    * gulp-concat (concatenates files into one)
    * karma - chrome-launcher, cli, jasmine, jasmine-html-reporter, coverage-istanbul-reporter (Allows you to execute JavaScript code in multiple real browsers)
    * protractor (end-to-end test framework for Angular and AngularJS applications)
    * tslint (Checks your TypeScript code for readability, maintainability, and functionality errors)

  * bower (Production)
    * Bootstrap

 2. User Story

  |User Story|Complete|
  |--------------------------------|-----------|
  |As a user, I'd like to visit a page to see a list of all team or club members|Complete|
  |As a user, I'd like to click a team or club member's entry in the list to visit their profile page, which should include more details about them|Complete|
  |As a user, I'd like the option to visit an "About" page that explains what the club is, and what they do|Incomplete|
  |As a user, I'd like all data persisted in a database, so it's always there when I need it|Incomplete|
  |As a user, I'd like to filter the list of users by their particular role in the group, or some other information/category|Incomplete|
  |As an administrator, I want to add new users to the club|Incomplete|
  |As an administrator, I want to edit user profiles, in case I make a mistake, or need to update their details|Incomplete|
  |As an administrator, need the option to delete a user, in case they leave the club or team|Incomplete|

3. UX/UI
  * Include and modify bootstrap.
  * Develop custom style

## legal

Copyright (c) 2017 Copyright Holder All Rights Reserved.
