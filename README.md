# PwaTest

A simple Test to show Angular 6 PWA and ServiceWorker functionality.
A siple example how to use update and push-servers can bee seen in the app-somponent.ts

## How to start
Run  `ng build --prod` to create the pwa in the /dist folder.
Run a local http-server in the dist folder.
`cd .\dist\pwa-test\`
`http-serve`

Start browser with `http://localhost:8080/`.
Press F12. Check tab "Application->ServiceWorker"

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
