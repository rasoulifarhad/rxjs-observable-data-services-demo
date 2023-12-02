# RxjsObservableDataServicesDemo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

Project structure :

app
  |
  --> core
  |
  --v features
     |
     --> home
     |
     --> settings
     |
     --v users
        |
        --> components
        |
        --> containers
        |
        --> model
        |
        --> services
        |
        --v store
            |
            --> actions
            |
            --> effects
            |
            --> reducers
            |
            --> selectors
            |
            -- users.module.ts
            |
            -- users-routing.module.ts
  |
  --> shared
  |
  -- app.component.ts


  See https://www.slideshare.net/fabio_biondi/data-architectures-in-angular-ngrx-introduction

  See https://blog.angular-university.io/angular-2-rxjs-common-pitfalls/
  See https://blog.angular-university.io/how-to-build-angular2-apps-using-rxjs-observable-data-services-pitfalls-to-avoid/
  See https://blog.angular-university.io/angular-2-smart-components-vs-presentation-components-whats-the-difference-when-to-use-each-and-why/
  See https://blog.angular-university.io/angular-2-redux-ngrx-rxjs/
  See https://dzone.com/articles/angular-app-state-management-with-ngrx
  See https://www.toptal.com/angular/why-use-ngrx

  See https://www.slideshare.net/vagnerolliver/best-practices-ngrx-for-scaling-your-angular-application-128514097
  See https://www.slideshare.net/fabio_biondi/data-architectures-in-angular-ngrx-introduction
  See https://www.slideshare.net/SuwigyaRathore1/ngrx-128329982
