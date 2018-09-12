# AppChat

## Summary
This is a little & dummy chat rooms application for practice the basics in Angular/Typescript.

Implements global injection in [globals.ts](https://github.com/AnibalFlores/app-chat/blob/master/src/app/globals.ts)  service class

A straight and simple use of Angular´s FormControl/FormGroup see [user.component.html](https://github.com/AnibalFlores/app-chat/blob/master/src/app/components/user/user.component.html) and [user.component.ts](https://github.com/AnibalFlores/app-chat/blob/master/src/app/components/user/user.component.ts)  files.


#

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.5.

## Development server

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

## Aditional steps

The project is bootstraped and uses font awesome.

Run `npm install bootstrap` to install it

Run `npm install font-awesome` to install it

Next inside `angular.json` add this lines under `"styles":  ["node_modules/bootstrap/dist/css/bootstrap.css","node_modules/font-awesome/css/font-awesome.css","src/styles.css"],`

Maybe some other dependencies are necessary via npm install such as jquery and popper.

Regards
Aníbal.-